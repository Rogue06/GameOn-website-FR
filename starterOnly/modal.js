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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Variables
const lettersRegex = /^[A-Za-z]+$/;

// Function pour fermer la fenêtre modale
function closeModal() {
  modalbg.style.display = "none";
}
// Récupérer l'élément avec la classe ".close"
const closeModalBtn = document.querySelector(".close");

// Ajouter un écouteur de clic à l'élément ".close" Si click alors on execute la fonction !
closeModalBtn.addEventListener("click", closeModal);

// Functions pour les conditions
function validate() {
  let textInputs = document.querySelectorAll('.formData input[type="text"]'); // Variable contenant tous les éléments <input> de type "texte"
  let emailInput = document.querySelector(".formData input[type='email']"); // Variable contenant tous les éléments <input> de type "email"
  let dateInput = document.querySelector(".formData input[type='date']"); // Variable contenant tous les éléments <input> de type "date"
  let numberInput = document.querySelector(".formData input[type='number']"); // Variable contenant tous les éléments <input> de type "number"
  let radioInput = document.querySelectorAll(".formData input[type='radio']"); // Variable contenant tous les éléments <input> de type "radio"
  let requiredCheckbox = document.querySelector("#checkbox1"); // Variable contenant la case de type "checkbox"

  // Boucler sur tous les éléments <input> de type "texte"
  for (let i = 0; i < textInputs.length; i++) {
    let inputValue = textInputs[i].value.trim(); // ici trim() permet de supprimer les espaces dans les champs
    let inputId = textInputs[i].id;

    // Vérifie l'ID des champs input
    if (inputId === "first" || inputId === "last") {
      // Vérifie si inputValue est différent des caractères alphabétiques
      if (!lettersRegex.test(inputValue)) {
        // Afficher un message d'erreur si le champ contient autre chose que des lettres
        alert(
          "Veuillez remplir les champs Prénom et Nom avec des lettres uniquement"
        );
        return false;
      }
      // Vérifie si les champs types textes ont moins de 2 caractères
      if (inputValue.length < 2) {
        // Afficher un message d'erreur si le champ est vide
        alert(
          "Veuillez remplir les champs Prénom et Nom avec au moins 2 caractères"
        );
        return false;
      }
    }
    // Vérifie l'ID du champ email
    let emailValue = emailInput.value.trim();
    if (emailValue == "") {
      //alert("Veuillez remplir le champ E-mail");
      let error = "Veuillez remplir le champ E-mail";
      let html = `
      <div class="data-error">
      <span>${error} est obligatoire</span>
      </div>
      `;
      let formData = document.querySelector(".formData");
      console.log(formData);
      formData.innerHTML = html;
      return false;
    }
  }

  // Vérifie si la case à cocher est cochée
  if (!requiredCheckbox.checked) {
    alert(
      "Veuillez lire et cocher la case \"J'ai lu et accepté les conditions d'utilisation\""
    );
    return false;
  }
  return true;

  // Vérifie si le champs number est vide
}
