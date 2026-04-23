const baseProducts = [
  { id: "salmon", name: "Лосось", omega3: 2.3, omega6: 0.4, protein: 20.4, carbs: 0 },
  { id: "mackerel", name: "Скумбрия", omega3: 2.6, omega6: 0.3, protein: 18.6, carbs: 0 },
  { id: "sardines", name: "Сардины", omega3: 1.5, omega6: 0.2, protein: 24.6, carbs: 0 },
  { id: "herring", name: "Сельдь", omega3: 1.7, omega6: 0.2, protein: 17.7, carbs: 0 },
  { id: "tuna", name: "Тунец", omega3: 0.24, omega6: 0.02, protein: 23.3, carbs: 0 },
  { id: "trout", name: "Форель", omega3: 1.0, omega6: 0.3, protein: 20.8, carbs: 0 },
  { id: "cod", name: "Треска", omega3: 0.22, omega6: 0.02, protein: 17.8, carbs: 0 },
  { id: "shrimp", name: "Креветки", omega3: 0.32, omega6: 0.03, protein: 24.0, carbs: 0.2 },
  { id: "flaxseed", name: "Семена льна", omega3: 22.8, omega6: 5.9, protein: 18.3, carbs: 28.9 },
  { id: "chia", name: "Семена чиа", omega3: 17.8, omega6: 5.8, protein: 16.5, carbs: 42.1 },
  { id: "walnut", name: "Грецкий орех", omega3: 9.1, omega6: 38.1, protein: 15.2, carbs: 13.7 },
  { id: "almond", name: "Миндаль", omega3: 0.01, omega6: 12.1, protein: 21.2, carbs: 21.6 },
  { id: "sunflower", name: "Семечки подсолнечника", omega3: 0.07, omega6: 23.0, protein: 20.8, carbs: 20.0 },
  { id: "pumpkin", name: "Тыквенные семечки", omega3: 0.12, omega6: 20.7, protein: 30.2, carbs: 10.7 },
  { id: "olive-oil", name: "Оливковое масло", omega3: 0.76, omega6: 9.8, protein: 0, carbs: 0 },
  { id: "flax-oil", name: "Льняное масло", omega3: 53.3, omega6: 12.7, protein: 0, carbs: 0 },
  { id: "sunflower-oil", name: "Подсолнечное масло", omega3: 0.2, omega6: 65.7, protein: 0, carbs: 0 },
  { id: "egg", name: "Яйцо куриное", omega3: 0.07, omega6: 1.2, protein: 12.6, carbs: 0.7 },
  { id: "chicken", name: "Куриная грудка", omega3: 0.05, omega6: 0.5, protein: 31.0, carbs: 0 },
  { id: "beef", name: "Говядина", omega3: 0.04, omega6: 0.15, protein: 26.1, carbs: 0 },
  { id: "tofu", name: "Тофу", omega3: 0.35, omega6: 2.7, protein: 8.1, carbs: 1.9 },
  { id: "lentils", name: "Чечевица вареная", omega3: 0.04, omega6: 0.14, protein: 9.0, carbs: 20.1 },
  { id: "oats", name: "Овсянка вареная", omega3: 0.03, omega6: 0.62, protein: 2.5, carbs: 12.0 },
  { id: "buckwheat", name: "Гречка вареная", omega3: 0.02, omega6: 0.22, protein: 3.4, carbs: 19.9 },
  { id: "rice", name: "Рис белый вареный", omega3: 0.0, omega6: 0.1, protein: 2.7, carbs: 28.2 },
  { id: "avocado", name: "Авокадо", omega3: 0.11, omega6: 1.7, protein: 2.0, carbs: 8.5 },
  { id: "barley-cooked", name: "Перловка вареная", omega3: 0.02, omega6: 0.15, protein: 2.3, carbs: 28.2 },
  { id: "bulgur-cooked", name: "Булгур вареный", omega3: 0.01, omega6: 0.13, protein: 3.1, carbs: 18.6 },
  { id: "quinoa-cooked", name: "Киноа вареная", omega3: 0.08, omega6: 0.97, protein: 4.4, carbs: 21.3 },
  { id: "brown-rice-cooked", name: "Рис бурый вареный", omega3: 0.01, omega6: 0.27, protein: 2.6, carbs: 23.0 },
  { id: "wild-rice-cooked", name: "Дикий рис вареный", omega3: 0.03, omega6: 0.21, protein: 4.0, carbs: 21.3 },
  { id: "millet-cooked", name: "Пшено вареное", omega3: 0.04, omega6: 0.55, protein: 3.5, carbs: 23.7 },
  { id: "whole-wheat-pasta-cooked", name: "Макароны цельнозерновые вареные", omega3: 0.02, omega6: 0.28, protein: 5.3, carbs: 30.1 },
  { id: "rye-bread", name: "Хлеб ржаной", omega3: 0.08, omega6: 0.85, protein: 8.5, carbs: 48.3 },
  { id: "whole-grain-bread", name: "Хлеб цельнозерновой", omega3: 0.12, omega6: 1.4, protein: 12.0, carbs: 43.0 },
  { id: "chickpeas-cooked", name: "Нут вареный", omega3: 0.04, omega6: 1.1, protein: 8.9, carbs: 27.4 },
  { id: "beans-red-cooked", name: "Фасоль красная вареная", omega3: 0.05, omega6: 0.23, protein: 8.7, carbs: 22.8 },
  { id: "beans-white-cooked", name: "Фасоль белая вареная", omega3: 0.11, omega6: 0.18, protein: 9.7, carbs: 25.1 },
  { id: "peas-cooked", name: "Горох вареный", omega3: 0.04, omega6: 0.16, protein: 8.3, carbs: 21.1 },
  { id: "black-beans-cooked", name: "Черная фасоль вареная", omega3: 0.18, omega6: 0.15, protein: 8.9, carbs: 23.7 },
  { id: "edamame", name: "Эдамаме", omega3: 0.36, omega6: 1.8, protein: 11.9, carbs: 8.9 },
  { id: "sweet-potato", name: "Батат запеченный", omega3: 0.01, omega6: 0.06, protein: 2.0, carbs: 20.7 },
  { id: "potato-boiled", name: "Картофель вареный", omega3: 0.01, omega6: 0.03, protein: 1.9, carbs: 20.1 },
  { id: "corn-boiled", name: "Кукуруза вареная", omega3: 0.02, omega6: 0.59, protein: 3.4, carbs: 21.0 },
  { id: "beet-boiled", name: "Свекла вареная", omega3: 0.01, omega6: 0.06, protein: 1.7, carbs: 10.0 },
  { id: "carrot-raw", name: "Морковь сырая", omega3: 0.0, omega6: 0.12, protein: 0.9, carbs: 9.6 },
  { id: "pumpkin-baked", name: "Тыква запеченная", omega3: 0.0, omega6: 0.01, protein: 1.0, carbs: 6.5 },
  { id: "apple", name: "Яблоко", omega3: 0.01, omega6: 0.04, protein: 0.3, carbs: 13.8 },
  { id: "pear", name: "Груша", omega3: 0.0, omega6: 0.09, protein: 0.4, carbs: 15.2 },
  { id: "banana", name: "Банан", omega3: 0.03, omega6: 0.05, protein: 1.1, carbs: 22.8 },
  { id: "orange", name: "Апельсин", omega3: 0.01, omega6: 0.02, protein: 0.9, carbs: 11.8 },
  { id: "grapefruit", name: "Грейпфрут", omega3: 0.01, omega6: 0.02, protein: 0.8, carbs: 10.7 },
  { id: "kiwi", name: "Киви", omega3: 0.04, omega6: 0.25, protein: 1.1, carbs: 14.7 },
  { id: "mango", name: "Манго", omega3: 0.05, omega6: 0.02, protein: 0.8, carbs: 15.0 },
  { id: "persimmon", name: "Хурма", omega3: 0.0, omega6: 0.04, protein: 0.6, carbs: 18.6 },
  { id: "berries-blueberry", name: "Черника", omega3: 0.06, omega6: 0.09, protein: 0.7, carbs: 14.5 },
  { id: "berries-raspberry", name: "Малина", omega3: 0.13, omega6: 0.25, protein: 1.2, carbs: 11.9 },
  { id: "berries-strawberry", name: "Клубника", omega3: 0.07, omega6: 0.09, protein: 0.7, carbs: 7.7 },
  { id: "dates", name: "Финики", omega3: 0.0, omega6: 0.02, protein: 2.5, carbs: 75.0 },
  { id: "raisins", name: "Изюм", omega3: 0.04, omega6: 0.04, protein: 3.1, carbs: 79.2 },
  { id: "dried-apricots", name: "Курага", omega3: 0.02, omega6: 0.07, protein: 3.4, carbs: 62.6 },
];

const eggCategories = [
  { id: "sv", label: "СВ, высшая", range: "от 75 г", grams: 80 },
  { id: "c0", label: "С0, отборная", range: "65-74,9 г", grams: 70 },
  { id: "c1", label: "С1, первая", range: "55-64,9 г", grams: 60 },
  { id: "c2", label: "С2, вторая", range: "45-54,9 г", grams: 50 },
  { id: "c3", label: "С3, третья", range: "35-44,9 г", grams: 40 },
];

const productGroups = {
  salmon: "protein",
  mackerel: "protein",
  sardines: "protein",
  herring: "protein",
  tuna: "protein",
  trout: "protein",
  cod: "protein",
  shrimp: "protein",
  egg: "protein",
  chicken: "protein",
  beef: "protein",
  tofu: "protein",
  edamame: "protein",
  flaxseed: "fats",
  chia: "fats",
  walnut: "fats",
  almond: "fats",
  sunflower: "fats",
  pumpkin: "fats",
  "olive-oil": "fats",
  "flax-oil": "fats",
  "sunflower-oil": "fats",
  avocado: "fats",
};

const groupLabels = {
  protein: "Преобладает белок",
  carbs: "Преобладают углеводы",
  fats: "Преобладают жиры",
};

const STORAGE_KEYS = {
  meals: "omega-calculator-meals",
  customProducts: "omega-calculator-products",
};

const elements = {
  clearDay: document.querySelector("#clear-day"),
  categoryFilter: document.querySelector("#category-filter"),
  productSearch: document.querySelector("#product-search"),
  productSelect: document.querySelector("#product-select"),
  eggTools: document.querySelector("#egg-tools"),
  eggPieceFields: document.querySelector("#egg-piece-fields"),
  eggCategory: document.querySelector("#egg-category"),
  eggCount: document.querySelector("#egg-count"),
  eggNote: document.querySelector("#egg-note"),
  gramsField: document.querySelector("#grams-field"),
  gramsInput: document.querySelector("#grams-input"),
  mealForm: document.querySelector("#meal-form"),
  productPreview: document.querySelector("#product-preview"),
  mealList: document.querySelector("#meal-list"),
  mealCount: document.querySelector("#meal-count"),
  totals: {
    omega3: document.querySelector("#total-omega3"),
    omega6: document.querySelector("#total-omega6"),
    protein: document.querySelector("#total-protein"),
    carbs: document.querySelector("#total-carbs"),
  },
  customForm: document.querySelector("#custom-form"),
  customName: document.querySelector("#custom-name"),
  customOmega3: document.querySelector("#custom-omega3"),
  customOmega6: document.querySelector("#custom-omega6"),
  customProtein: document.querySelector("#custom-protein"),
  customCarbs: document.querySelector("#custom-carbs"),
};

let customProducts = load(STORAGE_KEYS.customProducts, []);
let meals = load(STORAGE_KEYS.meals, []);

function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getProducts() {
  return [...baseProducts, ...customProducts]
    .map((product) => ({ ...product, group: getProductGroup(product) }))
    .sort((a, b) => a.name.localeCompare(b.name, "ru"));
}

function getProduct(id) {
  return getProducts().find((product) => product.id === id);
}

function format(value) {
  const rounded = Math.round((value + Number.EPSILON) * 100) / 100;
  return `${rounded.toLocaleString("ru-RU", { maximumFractionDigits: 2 })} г`;
}

function scaleProduct(product, grams) {
  const multiplier = grams / 100;
  return {
    omega3: product.omega3 * multiplier,
    omega6: product.omega6 * multiplier,
    protein: product.protein * multiplier,
    carbs: product.carbs * multiplier,
  };
}

function getProductGroup(product) {
  if (productGroups[product.id]) return productGroups[product.id];
  if (product.carbs >= product.protein && product.carbs >= product.omega3 + product.omega6) return "carbs";
  if (product.protein >= product.carbs) return "protein";
  return "fats";
}

function getSelectedEggUnit() {
  return document.querySelector('input[name="egg-unit"]:checked')?.value || "grams";
}

function getEggCategory(id) {
  return eggCategories.find((category) => category.id === id) || eggCategories[2];
}

function getMealAmount() {
  const product = getProduct(elements.productSelect.value);

  if (product?.id !== "egg" || getSelectedEggUnit() === "grams") {
    const grams = Number(elements.gramsInput.value);
    return {
      grams,
      note: `${formatPlain(grams)} г`,
    };
  }

  const category = getEggCategory(elements.eggCategory.value);
  const count = Number(elements.eggCount.value);
  const grams = count * category.grams;

  return {
    grams,
    note: `${formatPlain(count)} ${plural(count, ["яйцо", "яйца", "яиц"])} ${category.label.split(",")[0]} ≈ ${formatPlain(grams)} г`,
    egg: {
      categoryId: category.id,
      categoryLabel: category.label,
      categoryRange: category.range,
      gramsPerEgg: category.grams,
      count,
    },
  };
}

function makeId(prefix) {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return `${prefix}-${globalThis.crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatPlain(value) {
  return Number(value).toLocaleString("ru-RU", { maximumFractionDigits: 2 });
}

function renderEggCategories() {
  elements.eggCategory.innerHTML = eggCategories
    .map((category) => `<option value="${category.id}">${category.label} (${category.range}, берем ≈ ${category.grams} г)</option>`)
    .join("");
  elements.eggCategory.value = "c1";
}

function renderEggControls() {
  const product = getProduct(elements.productSelect.value);
  const isEgg = product?.id === "egg";
  const isPieces = isEgg && getSelectedEggUnit() === "pieces";
  const category = getEggCategory(elements.eggCategory.value);
  const count = Number(elements.eggCount.value) || 0;

  elements.eggTools.hidden = !isEgg;
  elements.eggPieceFields.hidden = !isPieces;
  elements.gramsField.hidden = isPieces;
  elements.gramsInput.required = !isPieces;

  if (!isEgg) {
    elements.eggNote.textContent = "";
    return;
  }

  elements.eggNote.textContent = isPieces
    ? `Расчет по категории: ${category.range}; используем среднее ${category.grams} г за 1 яйцо, итого примерно ${formatPlain(count * category.grams)} г.`
    : "Можно считать яйцо обычным весом в граммах или переключиться на расчет по штукам и категории.";
}

function renderProductSelect() {
  const query = elements.productSearch.value.trim().toLowerCase();
  const selectedGroup = elements.categoryFilter.value;
  const currentValue = elements.productSelect.value;
  const products = getProducts().filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(query);
    const matchesGroup = selectedGroup === "all" || product.group === selectedGroup;
    return matchesSearch && matchesGroup;
  });

  elements.productSelect.innerHTML = "";

  if (!products.length) {
    const option = document.createElement("option");
    option.textContent = "Ничего не найдено";
    option.disabled = true;
    elements.productSelect.append(option);
    renderPreview();
    return;
  }

  Object.entries(groupLabels).forEach(([group, label]) => {
    const groupProducts = products.filter((product) => product.group === group);
    if (!groupProducts.length) return;

    const optgroup = document.createElement("optgroup");
    optgroup.label = label;
    groupProducts.forEach((product) => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      optgroup.append(option);
    });
    elements.productSelect.append(optgroup);
  });

  if (products.some((product) => product.id === currentValue)) {
    elements.productSelect.value = currentValue;
  }

  renderEggControls();
  renderPreview();
}

function renderPreview() {
  const product = getProduct(elements.productSelect.value);
  const amount = getMealAmount();
  const grams = Number(amount.grams) || 0;

  if (!product) {
    elements.productPreview.innerHTML = "";
    return;
  }

  const values = scaleProduct(product, grams);
  elements.productPreview.innerHTML = [
    ["Вес", grams],
    ["Омега-3", values.omega3],
    ["Омега-6", values.omega6],
    ["Белки", values.protein],
    ["Углеводы", values.carbs],
  ]
    .map(
      ([label, value]) => `
        <div class="preview-item">
          <span>${label}</span>
          <strong>${format(value)}</strong>
        </div>
      `,
    )
    .join("");
}

function renderMeals() {
  elements.mealCount.textContent = `${meals.length} ${plural(meals.length, ["позиция", "позиции", "позиций"])}`;

  if (!meals.length) {
    elements.mealList.innerHTML = '<div class="empty-state">Добавьте первый продукт, и здесь появится расчет за день.</div>';
    renderTotals();
    return;
  }

  elements.mealList.innerHTML = meals
    .map((meal) => {
      const values = scaleProduct(meal.product, meal.grams);
      return `
        <article class="meal-row">
          <div>
            <div class="food-name">${meal.product.name}</div>
            <span class="food-subtitle">${meal.note || `${meal.grams} г`}</span>
          </div>
          ${nutrientCell("Омега-3", values.omega3)}
          ${nutrientCell("Омега-6", values.omega6)}
          ${nutrientCell("Белки", values.protein)}
          ${nutrientCell("Углеводы", values.carbs)}
          <button class="remove-button" type="button" data-id="${meal.id}" aria-label="Удалить ${meal.product.name}">×</button>
        </article>
      `;
    })
    .join("");

  renderTotals();
}

function nutrientCell(label, value) {
  return `<div class="nutrient-cell"><span>${label}</span>${format(value)}</div>`;
}

function renderTotals() {
  const totals = meals.reduce(
    (result, meal) => {
      const values = scaleProduct(meal.product, meal.grams);
      result.omega3 += values.omega3;
      result.omega6 += values.omega6;
      result.protein += values.protein;
      result.carbs += values.carbs;
      return result;
    },
    { omega3: 0, omega6: 0, protein: 0, carbs: 0 },
  );

  Object.entries(totals).forEach(([key, value]) => {
    elements.totals[key].textContent = format(value);
  });
}

function plural(count, forms) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms[1];
  return forms[2];
}

elements.categoryFilter.addEventListener("change", renderProductSelect);
elements.productSearch.addEventListener("input", renderProductSelect);
elements.productSelect.addEventListener("change", () => {
  renderEggControls();
  renderPreview();
});
elements.gramsInput.addEventListener("input", renderPreview);
elements.eggCategory.addEventListener("change", () => {
  renderEggControls();
  renderPreview();
});
elements.eggCount.addEventListener("input", () => {
  renderEggControls();
  renderPreview();
});
document.querySelectorAll('input[name="egg-unit"]').forEach((input) => {
  input.addEventListener("change", () => {
    renderEggControls();
    renderPreview();
  });
});

elements.mealForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const product = getProduct(elements.productSelect.value);
  const amount = getMealAmount();
  const grams = Number(amount.grams);

  if (!product || !Number.isFinite(grams) || grams <= 0) return;

  meals = [{ id: makeId("meal"), product, grams, note: amount.note, egg: amount.egg }, ...meals];
  save(STORAGE_KEYS.meals, meals);
  renderMeals();
});

elements.mealList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (!button) return;

  meals = meals.filter((meal) => meal.id !== button.dataset.id);
  save(STORAGE_KEYS.meals, meals);
  renderMeals();
});

elements.clearDay.addEventListener("click", () => {
  meals = [];
  save(STORAGE_KEYS.meals, meals);
  renderMeals();
});

elements.customForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = elements.customName.value.trim();
  if (!name) return;

  const product = {
    id: makeId("custom"),
    name,
    omega3: Number(elements.customOmega3.value) || 0,
    omega6: Number(elements.customOmega6.value) || 0,
    protein: Number(elements.customProtein.value) || 0,
    carbs: Number(elements.customCarbs.value) || 0,
  };

  customProducts = [...customProducts, product];
  save(STORAGE_KEYS.customProducts, customProducts);
  elements.customForm.reset();
  elements.customOmega3.value = 0;
  elements.customOmega6.value = 0;
  elements.customProtein.value = 0;
  elements.customCarbs.value = 0;
  elements.productSearch.value = "";
  renderProductSelect();
  elements.productSelect.value = product.id;
  renderPreview();
});

renderEggCategories();
renderProductSelect();
renderMeals();
