const modalOverlay = document.querySelector(".modal-overlay");
const recipes = document.querySelectorAll('.revenues')

for (let recipe of recipes ){
    recipe.addEventListener("click", function(){
        const receitaId = recipe.getAttribute("id");
        window.location.href = `/receita?id=${receitaId}`
        
    })
}

function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
  }
  
  document.querySelector(".add-ingredient").addEventListener("click", addIngredient);

  function addPass(){
      const pass = document.querySelector("#pass");
      const fieldContainer = document.querySelectorAll(".pass-recipe")

      const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

      if (newField.children[0].value == "") return false

      newField.children[0].value = ""
      pass.appendChild(newField)
  }

  document.querySelector(".add-pass").addEventListener("click", addPass)
