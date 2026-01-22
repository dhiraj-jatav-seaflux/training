let recipes = [];

let nextId = 1;
let editingId = null;

const form = document.getElementById("recipe-form");
const submitBtn = document.getElementById("submit-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  if (editingId === null) {
    const recipe = {
      id: nextId++,
      name: formData.get("name"),
      type: formData.get("type"),
      description: formData.get("description"),
    };

    recipes.push(recipe);
  } else {
    const recipe = recipes.find((r) => r.id === editingId);
    if (!recipe) return;

    recipe.name = formData.get("name");
    recipe.type = formData.get("type");
    recipe.description = formData.get("description");

    editingId = null;
    submitBtn.textContent = "Add Recipe";
  }

  renderRecipes();
  form.reset();
});

const recipesContainer = document.querySelector(".recipes");

function renderRecipes() {
  recipesContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeEl = document.createElement("div");

    recipeEl.className =
      "recipe bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 hover:shadow-lg transition";

    recipeEl.innerHTML = `
      <h3 class="recipe-name text-xl font-semibold text-gray-800">
        ${recipe.name}
      </h3>

      <span
        class="recipe-type inline-block w-fit text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
      >
        ${recipe.type}
      </span>

      <p class="recipe-description text-gray-600 text-sm leading-relaxed">
        ${recipe.description}
      </p>

      <div class="flex gap-2 mt-auto">
        <button
          data-id="${recipe.id}"
          data-action="edit"
          class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
        >
          Edit
        </button>

        <button
          data-id="${recipe.id}"
          data-action="delete"
          class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
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
    deleteRecipe(id);
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
  renderRecipes();
}
