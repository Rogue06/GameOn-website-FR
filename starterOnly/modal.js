function editNav() {
  var x = document.getElementById("myTopnav");

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
const closeModalBtn = document.querySelector(".close");
// récupérer class du bouton "C'est parti"
const submitModal = document.querySelector(".btn-submit");
const textInput = document.querySelectorAll(".formData input[type='text']");
const emailInput = document.querySelector(".formData input[type='email']");
const dateInput = document.querySelector(".formData input[type='date']");

let allInputFields = document.querySelectorAll(".formData input");
const lettersRegex = /^[A-Za-z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Function for close modal
function closeModal() {
  modalbg.style.display = "none";
}
// Ajouter un écouteur de clic à l'élément ".close" Si click alors on execute la fonction !
closeModalBtn.addEventListener("click", closeModal);

// Fonction pour cacher les messages d'erreurs des champs
/* function hideErrorMessages() {
  // Sélectionne tous les éléments du formulaire avec l'attribut data-error-visible
  let errorElements = document.querySelectorAll('[data-error-visible="true"]');

  // Parcourt tous les éléments du formulaire selectionnés
  errorElements.forEach(function (element) {
    // Supprime l'attribut data-error-visible
    element.removeAttribute("data-error-visible");
  });
} 
// Appelle la fonction au chargement de la page
window.addEventListener("load", hideErrorMessages);*/

// Fonction pour valider le formulaire quand l'utilisateur clique sur  "Submit"
function validateForm(event) {
  event.preventDefault(); // Empêcher la soumission par defaut du modal
  const form = event.target.closest("form"); // Récupérer l'élément du formulaire le plus proche
  // Soumettre le formulaire si toutes les validations sont réussies
  const isFormValid =
    validateName() &&
    validateEmail() &&
    validateDate() &&
    validateNumbers() &&
    validateRadio() &&
    validateCheckbox();

  // Afficher les messages d'erreur si nécessaire
  if (!isFormValid) {
    displayErrorIfNeeded();
    return; // Arrêter le traitement si le formulaire n'est pas valide
  }

  // Soumettre le formulaire si toutes les validations sont réussies
  if (isFormValid === true) {
    form.submit(); // Soumettre le formulaire
    console.log(isFormValid);
  }
}
submitModal.addEventListener("click", validateForm); // Ajouter un evenement (écouteur)au bouton "C'est parti"
function validateName() {
  let isNameValid = true; // Variable pour suivre si la validation du nom réussit ou échoue

  for (let i = 0; i < textInput.length; i++) {
    let inputTextValue = textInput[i].value.trim(); // Récupère la valeur du champ de texte
    let inputID = textInput[i].id; // Récupère l'ID du champ de texte

    // Vérifie si l'ID correspond aux champs Prénom et Nom
    if (inputID === "first" || inputID === "last") {
      //console.log("validation du champ " + inputID);

      if (
        inputTextValue === "" ||
        inputTextValue.length < 2 ||
        !lettersRegex.test(inputTextValue)
      ) {
        isNameValid = false;

        const formDataElement = textInput[i].closest(".formData");
        formDataElement.setAttribute("data-error-visible", "true");
      } else {
        // Si le champ est valide, on met à jour l'attribut data-error-visible à false
        const formDataElement = textInput[i].closest(".formData");
        formDataElement.setAttribute("data-error-visible", "false");
      }
    }
  }
  //console.log("La validation du nom retourne :", isNameValid);
  return isNameValid; // Retourne l'état de la validation du nom
}

// Fonction pour tester l'email
function validateEmail() {
  let = isEmailValid = true;
  let inputEmailValue = emailInput.value.trim(); // Permet de voir si le champs est vide
  if (inputEmailValue === "" || !emailRegex.test(inputEmailValue)) {
    // Permet de voir si l'email est valide (champ pas vide et email valide via regex)
    isEmailValid = false; // initialisation de la variable
    const formDataElement = emailInput.closest(".formData");
    formDataElement.setAttribute("data-error-visible", "true"); // Met à jour l'attribut data-error-visible à true si retour false.
    //console.log("le champs email est vide retourne :", false);
  } else {
    //console.log("la validation de l'email retourne :", false);
    const formDataElement = emailInput.closest(".formData"); // Permet de trouver le formulaire
    formDataElement.setAttribute("data-error-visible", "false"); // Met à jour l'attribut data-error-visible à false si retour true.
  }
  // console.log("la validation de l'email retourne :", true);
}

// Fonction vérifier si l'utilisateur entre une date et a 18 ans ou plus
function validateDate() {
  // Récupérer la date de naissance
  let inputDateValue = dateInput.value;

  // Créer une instance de Date pour la date de naissance de l'utilisateur
  let userBirthDate = new Date(inputDateValue);

  // Ajouter 18 ans à la date de naissance de l'utilisateur
  userBirthDate.setFullYear(userBirthDate.getFullYear() + 18);

  // Créer une instance de Date pour la date actuelle
  let currentDate = new Date();

  // Comparer la date de naissance de l'utilisateur avec la date actuelle
  if (userBirthDate <= currentDate) {
    console.log("la validation de la date de naissance retourne :", true);
    // L'utilisateur a 18 ans ou plus
    const formDataElement = dateInput.closest(".formData");
    formDataElement.setAttribute("data-error-visible", "false");
    //return true;
  } else {
    console.log("la validation de la date de naissance retourne :", false);
    // L'utilisateur a moins de 18 ans
    const formDataElement = dateInput.closest(".formData");
    formDataElement.setAttribute("data-error-visible", "true");
    //return false;
  }
}

// Fonction qui vérifie si le nombre de tournois est > 0
function validateNumbers() {
  const inputNumberValue = document.querySelector(
    ".formData input[type='number']"
  );

  if (inputNumberValue.value <= 0) {
    console.log("la validation du nombre de tournois retourne :", false);
    const formDataElement = inputNumberValue.closest(".formData");
    formDataElement.setAttribute("data-error-visible", "true");
    //return false;
  } else {
    console.log("la validation du nombre de tournois retourne :", true);
    const formDataElement = inputNumberValue.closest(".formData");
    formDataElement.setAttribute("data-error-visible", "false");
    //return true;
  }
}

// Vérifier si le input de type "radio" n'est pas vide
function validateRadio() {
  const inputRadioValue = document.querySelector(
    ".formData input[type='radio']:checked"
  );
  const radioFormDataElement = document
    .querySelector(".formData input[type='radio']")
    .closest(".formData");

  if (inputRadioValue === null) {
    //console.log("la validation du lieu de participation retourne :", false);
    radioFormDataElement.setAttribute("data-error-visible", "true");
    //return false;
  } else {
    radioFormDataElement.setAttribute("data-error-visible", "false");
    //console.log("la validation du lieu de participation retourne :", true);
    //return true;
  }
}

function validateCheckbox() {
  const checkbox1Input = document.getElementById("checkbox1");
  if (!checkbox1Input.checked) {
    const checkbox1FormData = checkbox1Input.closest(".formData");
    checkbox1FormData.setAttribute("data-error-visible", "true");
    console.log("la checkbox lu et approuvé retourne :", false);
  } else {
    checkbox1Input
      .closest(".formData")
      .setAttribute("data-error-visible", "false");
    console.log("la checkbox lu et approuvé retourne :", true);
  }
}

// Fonction qui vérifie la validité du formulaire de chaque champ.
function displayErrorIfNeeded() {
  const validations = [
    validateName(),
    validateEmail(),
    validateDate(),
    validateNumbers(),
    validateRadio(),
    validateCheckbox(),
  ];
  // Parcourir les résultats des validations
  validations.forEach((isValid, index) => {
    if (!isValid) {
      // Récupérer le champ correspondant à cette validation
      const currentInputElement = allInputFields[index];

      // Afficher le message d'erreur
      currentInputElement.setAttribute("data-error-visible", "true");
      currentInputElement.setAttribute(
        "data-error",
        "Veuillez remplir ce champ correctement."
      );
    }
  });
}

// Récupérez tous les champs de saisie
let textInputFields = document.querySelectorAll(".text-control");

// Ajoutez un gestionnaire d'événements blur à chaque champ de saisie
textInputFields.forEach((inputField) => {
  inputField.addEventListener("blur", function () {
    displayErrorIfNeeded(inputField);
  });
});
