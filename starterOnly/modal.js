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
console.log(modalbg);
const modalBtn = document.querySelectorAll(".modal-btn");
console.log(modalBtn); // non Défini et non utilisé dans le html
const formData = document.querySelectorAll(".formData");
console.log(formData);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Functions

function validate() {
  // Variable contenant tous les éléments <input> de type "texte"
  let textInputs = document.querySelectorAll('.formData input[type="text"]');
  // Variable contenant la case de type "checkbox"
  let requiredCheckbox = document.querySelector("#checkbox1");

  // Boucler sur tous les éléments <input> de type "texte"
  for (let i = 0; i < textInputs.length; i++) {
    let inputValue = textInputs[i].value.trim(); // ici trim() permet de supprimer les espaces dans les champs

    // Vérifie si inputValue est différent des caractères alphabétiques
    if (!/^[a-zA-Z]+$/.test(inputValue)) {
      // Afficher un message d'erreur si le champ contient autre chose que des lettres
      alert(
        "Veullez remplir les champs Prénom et Nom avec des lettres uniquement"
      );
      return false;
    }
  }

  // Vérifie si la case à cocher est cochée
  if (!requiredCheckbox.checked) {
    alert(
      "Veuillez cocher la case \"J'ai lu et accepté les conditions d'utilisation\""
    );
    return false;
  }
  return true;
}
