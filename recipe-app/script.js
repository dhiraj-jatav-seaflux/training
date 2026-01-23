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
  const template = document.getElementById("recipe-template");

  recipes.forEach((recipe) => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".recipe-name").textContent = recipe.name;
    clone.querySelector(".recipe-type").textContent = recipe.type;
    clone.querySelector(".recipe-description").textContent = recipe.description;

    clone.querySelector('[data-action="edit"]').dataset.id = recipe.id;
    clone.querySelector('[data-action="delete"]').dataset.id = recipe.id;

    recipesContainer.appendChild(clone);
  });
}

recipesContainer.addEventListener("click", (e) => {
  const button = e.target;
  if (button.tagName !== "BUTTON") return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "delete") {
    if (confirm("Do you want to delete the recipe?")) {
      deleteRecipe(id);
    } else {
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

function saveToLocalStorage() {
  localStorage.setItem("recipes", JSON.stringify(recipes));
  localStorage.setItem("recipeId", recipeId);
}

function loadFromLocalStorage() {
  const savedRecipes = localStorage.getItem("recipes");
  const savedRecipeId = localStorage.getItem("recipeId");

  if (savedRecipes) {
    recipes = JSON.parse(savedRecipes);
  }

  if (savedRecipeId) {
    recipeId = Number(savedRecipeId);
  }

  renderRecipes();
}