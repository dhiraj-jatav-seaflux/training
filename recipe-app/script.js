let recipes = [];

let recipeId = 1;

let editingId = null;

const form = document.getElementById("recipe-form");
const submitBtn = document.getElementById("submit-btn");

document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  if (editingId === null) {
    const recipe = {
      id: recipeId++,
      name: formData.get("name"),
      type: formData.get("type"),
      description: formData.get("description"),
    };

    if(recipe.name.trim() == "" || recipe.type.trim() == "" || recipe.description.trim() == ""){
      alert("All fields are necessary");
      return;
    }  

    recipes.push(recipe);
  } else {
    const recipe = recipes.find((r) => r.id === editingId);
    if (!recipe) return;

    recipe.name = formData.get("name");
    recipe.type = formData.get("type");
    recipe.description = formData.get("description");

    if(recipe.name.trim() == "" || recipe.type.trim() == "" || recipe.description.trim() == ""){
      alert("All fields are necessary");
      return;
    }  

    editingId = null;
    submitBtn.textContent = "Add Recipe";
  }

  saveToLocalStorage();
  renderRecipes();
  form.reset();
});

const recipesContainer = document.querySelector(".recipes");

function renderRecipes() {
  recipesContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeEl = document.createElement("div");

    recipeEl.className =
      "recipe bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100";

    recipeEl.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="w-12 h-12 rounded-full bg-linear-to-br from-purple-400 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        </div>
        <div class="flex-1">
          <h3 class="recipe-name text-xl font-bold text-gray-800 mb-1 ml-1">
            ${recipe.name}
          </h3>
          <span class="recipe-type inline-block text-xs font-semibold bg-purple-100 text-purple-700 px-3 py-1 rounded-full uppercase tracking-wide">
            ${recipe.type}
          </span>
        </div>
      </div>

      <p class="recipe-description text-gray-600 text-md leading-relaxed flex-1 ml-1">
        ${recipe.description}
      </p>

      <div class="flex gap-3 mt-auto pt-4 border-t border-gray-100">
        <button
          data-id="${recipe.id}"
          data-action="edit"
          class="flex-1 bg-linear-to-r from-amber-400 to-orange-500 text-white px-4 py-2.5 rounded-xl hover:from-amber-500 hover:to-orange-600 transition-all duration-300 font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          Edit
        </button>

        <button
          data-id="${recipe.id}"
          data-action="delete"
          class="flex-1 bg-linear-to-r from-red-500 to-pink-600 text-white px-4 py-2.5 rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          Delete
        </button>
      </div>
    `;

    recipesContainer.appendChild(recipeEl);
  });
}

recipesContainer.addEventListener("click", (e) => {
  const button = e.target;
  if (button.tagName !== "BUTTON") return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "delete") {
    if(confirm("Do you want to delete the recipe?")){
      deleteRecipe(id);
    }else{
      return;
    }
  }

  if (action === "edit") {
    startEdit(id);
  }
});

function startEdit(id) {
  const recipe = recipes.find((r) => r.id === id);
  if (!recipe) return;

  editingId = id;
  
  form.elements.name.value = recipe.name;
  form.elements.type.value = recipe.type;
  form.elements.description.value = recipe.description;

  submitBtn.textContent = "Update Recipe";
}

function deleteRecipe(id) {
  recipes = recipes.filter((recipe) => recipe.id !== id);
  saveToLocalStorage();
  renderRecipes();
}

function saveToLocalStorage(){
  localStorage.setItem("recipes", JSON.stringify(recipes));
  localStorage.setItem("recipeId", recipeId);
}

function loadFromLocalStorage(){
  const savedRecipes = localStorage.getItem("recipes");
  const savedRecipeId = localStorage.getItem("recipeId");

  if(savedRecipes){
    recipes = JSON.parse(savedRecipes);
  }

  if(savedRecipeId){
    recipeId = Number(savedRecipeId);
  }

  renderRecipes();
}