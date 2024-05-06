function editNav() {
  var x = document.getElementById("myTopnav");
  console.log(x);
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// Récupérer l'élément avec la classe ".close"
const closeModalBtn = document.querySelector(".close");
// récupérer class du bouton "C'est parti"
const submitModal = document.querySelector(".btn-submit");
// Récuperer la valeur des inputs type "texte"
const textInput = document.querySelectorAll(".formData input[type='text']");
// Récuperer la valeur des inputs type "email"
const emailInput = document.querySelector(".formData input[type='email']");

// Others Variables
const lettersRegex = /^[A-Za-z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Function pour fermer la fenêtre modale
function closeModal() {
  modalbg.style.display = "none";
}
// Ajouter un écouteur de clic à l'élément ".close" Si click alors on execute la fonction !
closeModalBtn.addEventListener("click", closeModal);

// Fonction pour valider le formulaire quand l'utilisateur clique sur  "Submit"
function validateForm(event) {
  event.preventDefault(); // Empêcher la soumission par defaut du modal
  function validateName() {
    let isNameValid = true; // Variable pour suivre si la validation du nom réussit ou échoue

    for (let i = 0; i < textInput.length; i++) {
      let inputTextValue = textInput[i].value.trim();
      let inputID = textInput[i].id;

      // Vérifie si l'ID correspond aux champs Prénom et Nom
      if (inputID === "first" || inputID === "last") {
        //console.log("validation du champ " + inputID);

        // Vérifie les conditions de validation
        if (
          inputTextValue === "" ||
          inputTextValue.length < 2 ||
          !lettersRegex.test(inputTextValue)
        ) {
          isNameValid = false; // La validation du nom a échoué
          // Sélectionne l'élément d'entrée spécifique et ajoute un attribut data-error
          textInput[i].setAttribute("data-error", "Please enter a valid name");
        } else {
          // La validation du nom a réussi, donc supprime l'attribut data-error s'il existe
          textInput[i].removeAttribute("data-error");
        }
      }
    }

    return isNameValid; // Retourne l'état de la validation du nom
  }

  // Fonction pour tester l'email
  function validateEmail() {
    let inputEmailValue = emailInput.value.trim(); // Permet de voir si le champs est vide
    if (inputEmailValue === "") {
      return false;
    } else if (!emailRegex.test(inputEmailValue)) {
      return false;
    }
    return true;
  }
  // Fonction pour la date de naissance
  function validateDate() {
    // Récupérer la date de naissance dans l'input type "date"
    const dateInput = document.querySelector(".formData input[type='date']");
    let inputDateValue = dateInput.value;

    // Créer une instance de Date pour la date de naissance de l'utilisateur
    let userBirthDate = new Date(inputDateValue);

    // Ajouter 18 ans à la date de naissance de l'utilisateur
    userBirthDate.setFullYear(userBirthDate.getFullYear() + 18);

    // Créer une instance de Date pour la date actuelle
    let currentDate = new Date();

    // Comparer la date de naissance de l'utilisateur avec la date actuelle
    if (userBirthDate <= currentDate) {
      // L'utilisateur a 18 ans ou plus
      return true;
    } else {
      // L'utilisateur a moins de 18 ans
      return false;
    }
  }

  // Vérifier si le input de type "number" n'est pas vide
  function validateNumbers() {
    const inputNumberValue = document.querySelector(
      ".formData input[type='number']"
    );

    if (inputNumberValue.value <= 0 || inputNumberValue.value > 99) {
      return false;
    }
    return true;
  }

  // Vérifier si le input de type "radio" n'est pas vide
  function validateRadio() {
    const inputRadioValue = document.querySelector(
      ".formData input[type='radio']:checked"
    );
    if (inputRadioValue === null) {
      return false;
    }
    return true;
  }

  function validateCheckbox() {
    const checkbox1 = document.getElementById("checkbox1");
    if (!checkbox1.checked) {
      return false;
    }
    return true;
  }

  // Soumettre le formulaire si toutes les validations sont réussies
  if (
    validateName() &&
    validateEmail() &&
    validateDate() &&
    validateNumbers() &&
    validateRadio() &&
    validateCheckbox()
  ) {
    event.target.submit(); // Soumettre le formulaire
  }
}
submitModal.addEventListener("click", validateForm);

// TODO

// changer les fonctions event et submit car à l'appuie du bouton il faut faire apparaite une fenetre de validation de modal et non pas envoyer le formulaire

// règler le problème de validation complet du formulaire
