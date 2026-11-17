
"use strict";

/* ==========================================
   STATISTICAL SCIENCES APPAREL CATALOGUE
   Complete Supplier Catalogue — Version 3
   ========================================== */

const CONFIG = {
  recipientEmail: "REPLACE_WITH_YOUR_EMAIL@utoronto.ca",
  emailSubject: "Statistical Sciences Apparel Request",
  storageKey: "statsci-apparel-cart-v3"
};

const SIZES = {
  standard: ["S", "M", "L", "XL", "2XL", "3XL"],
  extended: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
  extended5: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
  women: ["XS", "S", "M", "L", "XL", "2XL", "3XL"]
};

const COLOUR_HEX = {
  "Navy": "#182946",
  "Navy Blue": "#182946",
  "Collegiate Navy": "#172947",
  "Dark Navy": "#172947",
  "Classic Navy": "#172947",
  "Vintage Navy": "#172947",
  "Black": "#171717",
  "White": "#ffffff",
  "Charcoal": "#394852",
  "Dark Charcoal": "#50545b",
  "Graphite": "#777985",
  "Grey": "#96999b",
  "Sports Grey": "#a5a5a5",
  "Heather Grey": "#b4b4b4",
  "Grey Storm": "#808080",
  "Quarry": "#969995",
  "Maroon": "#800019",
  "Royal Blue": "#2455ad",
  "New Royal": "#2455ad",
  "Olympic Blue": "#0877b4",
  "True Royal": "#1680d0",
  "Red": "#bc2637",
  "Team Red": "#bc2637",
  "Scarlet": "#e51c45",
  "Bottle Green": "#155642",
  "Forest": "#244f3a",
  "Dark Citron Green": "#a3aa4c",
  "Fog": "#e5e3d9",
  "Pure Slate": "#85878b",
  "Dark Mocha": "#493a32",
  "Duck Brown": "#a87b4b",
  "Gold": "#f1b942",
  "Orange": "#ef682d",
  "Light Blue": "#83b0dc",
  "Dark Green": "#16452d",
  "Purple": "#5e3790",
  "Pink Candy": "#f0a5cb",
  "Safety Green": "#c9ec4c"
};

/*
  Product colours follow the supplier catalogue.
  Final availability must be reconfirmed.

  Images are blank until actual photographs
  are uploaded to the images folder.

  Prices are historical supplier quotes in CAD,
  before tax, not guaranteed current prices.
*/

const PRODUCTS = [
  {
    id: "quarterzip",
    sku: "SWEAT-QUARTERZIP",
    category: "Sweatshirts",
    name: "Quarter-Zip Sweatshirt",
    description: "Quarter-zip sweatshirt featuring the Statistical Sciences circular seal.",
    price: null,
    image: "images/sweater-option.jpeg",
    colours: ["Navy", "White", "Charcoal", "Maroon", "Black", "Sports Grey"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    sizeStatus: "provisional"
  },

  {
    id: "champion-packable",
    sku: "CO200",
    category: "Jackets",
    name: "Champion Unisex Packable Anorak",
    description: "Lightweight wind- and water-resistant pullover with adjustable hood and packable pouch pocket.",
    price: 60.00,
    image: "",
    colours: ["White", "Black", "Dark Green", "Gold", "Graphite", "Light Blue", "Maroon", "Navy", "Orange", "Pink Candy", "Purple", "Royal Blue", "Safety Green", "Scarlet"],
    sizes: SIZES.standard
  },
  {
    id: "champion-fullzip",
    sku: "CO125",
    category: "Jackets",
    name: "Champion Unisex Full-Zip Anorak",
    description: "Lightweight full-zip wind- and water-resistant jacket with adjustable hood and pockets.",
    price: 69.90,
    image: "",
    colours: ["Black", "Graphite", "Navy", "Royal Blue", "Scarlet"],
    sizes: SIZES.standard
  },

  {
    id: "columbia-powder-men",
    sku: "212489",
    category: "Jackets",
    name: "Columbia Men's Powder Lite II Jacket",
    description: "Insulated jacket with Omni-Heat thermal-reflective lining and water-repellent fabric.",
    price: 182.05,
    image: "",
    colours: ["Black", "Collegiate Navy"],
    sizes: SIZES.standard
  },
  {
    id: "columbia-powder-women",
    sku: "212490",
    category: "Jackets",
    name: "Columbia Women's Powder Lite II Full-Zip Jacket",
    description: "Insulated women's jacket with Omni-Heat lining, zippered pockets and water-repellent fabric.",
    price: 182.05,
    image: "",
    colours: ["Black"],
    sizes: SIZES.women
  },
  {
    id: "columbia-tipton",
    sku: "208959",
    category: "Jackets",
    name: "Columbia Men's Tipton Peak III Insulated Hooded Jacket",
    description: "Insulated hooded jacket with waterproof breathable construction and adjustable cuffs.",
    price: 224.95,
    image: "",
    colours: ["Black"],
    sizes: SIZES.standard
  },
  {
    id: "columbia-bugaboo-women",
    sku: "208782",
    category: "Jackets",
    name: "Columbia Women's Bugaboo III Fleece Interchange Jacket",
    description: "Versatile interchange jacket with removable fleece liner and weather-protective outer shell.",
    price: 284.95,
    image: "",
    colours: ["Black"],
    sizes: SIZES.women
  },
  {
    id: "columbia-bugaboo-men",
    sku: "209690",
    category: "Jackets",
    name: "Columbia Men's Bugaboo III Fleece Interchange Jacket",
    description: "Three-in-one interchange jacket with removable fleece liner and adjustable storm hood.",
    price: 284.95,
    image: "",
    colours: ["Black"],
    sizes: SIZES.standard
  },

  {
    id: "harriton-fleece",
    sku: "M740",
    category: "Jackets",
    name: "Harriton Unisex Fleece Lined Nylon Jacket",
    description: "Wind- and water-resistant nylon jacket with anti-pill microfleece lining and zippered pockets.",
    price: 65.20,
    image: "",
    colours: ["Black", "Navy"],
    sizes: SIZES.extended
  },
  {
    id: "harriton-climabloc",
    sku: "M721",
    category: "Jackets",
    name: "Harriton Unisex ClimaBloc Station Jacket",
    description: "Insulated station jacket with durable water-repellent protection and adjustable fit.",
    price: 82.90,
    image: "",
    colours: ["Black", "Navy"],
    sizes: SIZES.extended5
  },

  {
    id: "core365-region",
    sku: "88205",
    category: "Jackets",
    name: "CORE365 Men's Region 3-in-1 Jacket with Fleece Liner",
    description: "Water-resistant outer jacket with removable anti-pill fleece liner and roll-away hood.",
    price: 172.90,
    image: "",
    colours: ["Black", "Dark Charcoal", "Dark Mocha", "Dark Navy", "Duck Brown"],
    sizes: SIZES.extended5
  },

  {
    id: "karmine-men",
    sku: "12937",
    category: "Jackets",
    name: "Trimark Men's KARMINE Softshell Jacket",
    description: "Lightweight stretch softshell with waterproof breathable membrane and snap-closure pockets.",
    price: 59.95,
    image: "",
    colours: ["Black", "Classic Navy", "Forest", "True Royal"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"]
  },
  {
    id: "karmine-women",
    sku: "92937",
    category: "Jackets",
    name: "Trimark Women's KARMINE Softshell Jacket",
    description: "Lightweight women's softshell with shaped seams, stretch fabric and water-repellent finish.",
    price: 59.95,
    image: "",
    colours: ["Black", "Dark Citron Green", "Olympic Blue", "Quarry", "Team Red", "Vintage Navy"],
    sizes: SIZES.women
  },
  {
    id: "okapi-men",
    sku: "18117",
    category: "Jackets",
    name: "Trimark Men's OKAPI Knit Jacket",
    description: "Polyester jersey knit full-zip jacket with brushed backing and lower welt pockets.",
    price: 56.95,
    image: "",
    colours: ["Black", "Grey Storm", "Heather Grey", "Navy", "New Royal", "Olympic Blue", "Team Red", "White"],
    sizes: SIZES.extended5
  },
  {
    id: "okapi-women",
    sku: "98117",
    category: "Jackets",
    name: "Trimark Women's OKAPI Knit Jacket",
    description: "Women's full-zip knit jacket with brushed backing, shaped seams and lower pockets.",
    price: 56.95,
    image: "",
    colours: ["Black", "Grey Storm", "Heather Grey", "Navy", "New Royal", "Olympic Blue", "Team Red", "White"],
    sizes: SIZES.women
  },

  {
    id: "clique-summit-men",
    sku: "MQO00028",
    category: "Jackets",
    name: "Clique Summit Performance Fleece Men's Full-Zip Jacket",
    description: "Soft polyester microfleece jacket with full zipper, mock neck and zippered front pockets.",
    price: 49.75,
    image: "",
    colours: ["Charcoal", "Black", "Navy", "Royal Blue", "Red"],
    sizes: SIZES.extended5
  },
  {
    id: "clique-summit-women",
    sku: "LQO00019",
    category: "Jackets",
    name: "Clique Summit Performance Fleece Women's Full-Zip Jacket",
    description: "Women's microfleece jacket with full zipper, mock neck and secure front pockets.",
    price: 49.75,
    image: "",
    colours: ["Charcoal", "Black", "Navy", "Royal Blue", "Red"],
    sizes: SIZES.women
  },
  {
    id: "clique-equinox-men",
    sku: "MQO00073",
    category: "Jackets",
    name: "Clique Equinox Insulated Softshell Men's Hooded Jacket",
    description: "Insulated softshell with wind- and water-resistant exterior and adjustable hood.",
    price: 90.00,
    image: "",
    colours: ["Pure Slate", "Black", "Bottle Green", "Dark Navy", "Royal Blue", "Red"],
    sizes: SIZES.women
  },
  {
    id: "clique-equinox-women",
    sku: "LQO00060",
    category: "Jackets",
    name: "Clique Equinox Insulated Softshell Women's Hooded Jacket",
    description: "Women's insulated softshell with water-resistant exterior, adjustable hood and secure pockets.",
    price: 90.00,
    image: "",
    colours: ["Pure Slate", "Black", "Bottle Green", "Dark Navy", "Royal Blue", "Red"],
    sizes: SIZES.women
  },
  {
    id: "clique-trail-men",
    sku: "MQO00065",
    category: "Jackets",
    name: "Clique Trail Recycled Stretch Softshell Men's Jacket",
    description: "Recycled polyester stretch softshell with fleece interior and zippered pockets.",
    price: 59.00,
    image: "",
    colours: ["Fog", "Pure Slate", "Black", "Bottle Green", "Dark Navy", "Royal Blue", "Red"],
    sizes: SIZES.women
  },
  {
    id: "clique-trail-women",
    sku: "LQO00053",
    category: "Jackets",
    name: "Clique Trail Recycled Stretch Softshell Women's Jacket",
    description: "Women's recycled stretch softshell with bonded microfleece lining and zippered pockets.",
    price: 59.00,
    image: "",
    colours: ["Fog", "Pure Slate", "Black", "Bottle Green", "Dark Navy", "Royal Blue", "Red"],
    sizes: SIZES.women
  }
];

/* ==========================================
   APPLICATION STATE AND INITIALIZATION
   ========================================== */

let cart = [];
let previousFocus = null;
const elements = {};

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  const ids = {
    productGrid: "product-grid",
    openCart: "open-cart",
    closeCart: "close-cart",
    cartPanel: "cart-panel",
    cartOverlay: "cart-overlay",
    cartItems: "cart-items",
    cartCount: "cart-count",
    cartTotal: "cart-total-items",
    requestForm: "request-form",
    copyRequest: "copy-request",
    feedback: "request-feedback",
    splash: "splash-screen"
  };

  Object.entries(ids).forEach(([key, id]) => {
    elements[key] = document.getElementById(id);
  });

  loadCart();
  renderProducts();
  renderCart();
  setupEvents();
  setupSplash();

  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();
}

function setupSplash() {
  if (!elements.splash) return;
  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.setTimeout(
    () => elements.splash.remove(),
    reduced ? 250 : 2600
  );
}

/* ==========================================
   PRICES
   ========================================== */

function formatPrice(value) {
  if (value === null || value === undefined) {
    return "Price to be confirmed";
  }
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD"
  }).format(value);
}

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getTotalQuantity() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => {
    const product = getProduct(item.productId);
    return sum + (product && product.price !== null
      ? product.price * item.quantity : 0);
  }, 0);
}

function hasUnpricedItems() {
  return cart.some(item => {
    const product = getProduct(item.productId);
    return product && product.price === null;
  });
}

/* ==========================================
   PRODUCT CATALOGUE
   ========================================== */

function renderProducts() {
  const grid = elements.productGrid;
  if (!grid) return;
  grid.replaceChildren();

  ["Sweatshirts", "Jackets"].forEach(category => {
    const heading = document.createElement("h3");
    heading.className = "catalogue-category";
    heading.textContent = category;
    grid.appendChild(heading);

    PRODUCTS.filter(p => p.category === category)
      .forEach(product => grid.appendChild(
        createProductCard(product)
      ));
  });
}

function createSelectGroup(labelText, id, values) {
  const group = document.createElement("div");
  group.className = "option-group";

  const label = document.createElement("label");
  label.htmlFor = id;
  label.textContent = labelText;

  const select = document.createElement("select");
  select.id = id;

  values.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });

  group.append(label, select);
  return { group, select };
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const imageBox = document.createElement("div");
  imageBox.className = "product-image";

  function placeholder() {
    imageBox.replaceChildren();
    const box = document.createElement("div");
    box.className = "product-placeholder";
    box.textContent = product.name;
    imageBox.appendChild(box);
  }

  if (product.image) {
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";
    image.onerror = placeholder;
    imageBox.appendChild(image);
  } else {
    placeholder();
  }

  const details = document.createElement("div");
  details.className = "product-details";

  const title = document.createElement("h3");
  title.className = "product-title";
  title.textContent = product.name;

  const sku = document.createElement("p");
  sku.className = "product-sku";
  sku.textContent = `Item #${product.sku}`;

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description;

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = formatPrice(product.price);

  const note = document.createElement("p");
  note.className = "product-price-note";
  note.textContent = product.price === null
    ? "Supplier pricing to be confirmed."
    : "Historical supplier quote. Before tax; final price subject to confirmation.";

  const colour = createSelectGroup(
    "Colour", `colour-${product.id}`, product.colours
  );
  const size = createSelectGroup(
    "Size", `size-${product.id}`, product.sizes
  );

  const qtyGroup = document.createElement("div");
  qtyGroup.className = "option-group";

  const qtyLabel = document.createElement("label");
  qtyLabel.htmlFor = `quantity-${product.id}`;
  qtyLabel.textContent = "Quantity";

  const qty = document.createElement("input");
  qty.type = "number";
  qty.id = `quantity-${product.id}`;
  qty.min = "1";
  qty.max = "99";
  qty.step = "1";
  qty.value = "1";

  qtyGroup.append(qtyLabel, qty);

  const options = document.createElement("div");
  options.className = "product-options";
  options.append(colour.group, size.group, qtyGroup);

  const swatchRow = document.createElement("div");
  swatchRow.style.cssText =
    "display:flex;align-items:center;gap:9px;margin-top:12px";

  const swatch = document.createElement("span");
  swatch.style.cssText =
    "width:21px;height:21px;border-radius:50%;border:1px solid #cbd5e1;display:inline-block";

  const colourText = document.createElement("span");
  colourText.style.fontSize = ".82rem";

  function updateSwatch() {
    const value = colour.select.value;
    swatch.style.backgroundColor = COLOUR_HEX[value] || "#ccc";
    colourText.textContent = value;
  }

  colour.select.addEventListener("change", updateSwatch);
  updateSwatch();
  swatchRow.append(swatch, colourText);

  const button = document.createElement("button");
  button.type = "button";
  button.className = "button button-primary";
  button.textContent = "Add to Request";

  button.addEventListener("click", () => {
    const quantity = Number(qty.value);

    if (!Number.isInteger(quantity) ||
        quantity < 1 || quantity > 99) {
      qty.setCustomValidity("Enter a whole number from 1 to 99.");
      qty.reportValidity();
      return;
    }

    qty.setCustomValidity("");

    addToCart({
      productId: product.id,
      colour: colour.select.value,
      size: size.select.value,
      quantity
    });

    qty.value = "1";
    openCart();
  });

  qty.addEventListener("input", () => qty.setCustomValidity(""));

  details.append(
    title, sku, description, price, note, options, swatchRow
  );

  if (product.sizeStatus === "provisional") {
    const sizeNote = document.createElement("p");
    sizeNote.className = "product-price-note";
    sizeNote.textContent = "Size availability to be confirmed.";
    details.appendChild(sizeNote);
  }

  details.appendChild(button);
  card.append(imageBox, details);
  return card;
}

/* ==========================================
   CART
   ========================================== */

function addToCart(item) {
  const existing = cart.find(entry =>
    entry.productId === item.productId &&
    entry.colour === item.colour &&
    entry.size === item.size
  );

  if (existing) {
    existing.quantity = Math.min(
      999, existing.quantity + item.quantity
    );
  } else {
    cart.push({ ...item });
  }

  saveCart();
  renderCart();
}

function changeQuantity(index, delta) {
  if (!cart[index]) return;
  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].quantity = Math.min(999, cart[index].quantity);
  }

  saveCart();
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function renderCart() {
  if (!elements.cartItems) return;

  elements.cartItems.replaceChildren();

  if (!cart.length) {
    const empty = document.createElement("p");
    empty.className = "empty-cart";
    empty.textContent = "Your request is empty.";
    elements.cartItems.appendChild(empty);
  }

  cart.forEach((item, index) => {
    const product = getProduct(item.productId);
    if (!product) return;

    const row = document.createElement("div");
    row.className = "cart-item";

    const info = document.createElement("div");

    const title = document.createElement("p");
    title.className = "cart-item-title";
    title.textContent = product.name;

    const meta = document.createElement("p");
    meta.className = "cart-item-meta";
    meta.textContent = `${item.colour} | Size ${item.size}`;

    const price = document.createElement("p");
    price.className = "cart-item-meta";
    price.textContent = product.price === null
      ? "Price to be confirmed"
      : `${formatPrice(product.price)} each`;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-item";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => removeFromCart(index));

    info.append(title, meta, price, remove);

    const controls = document.createElement("div");
    controls.className = "cart-item-controls";

    function qtyButton(symbol, delta, label) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quantity-button";
      button.textContent = symbol;
      button.setAttribute(
        "aria-label",
        `${label} ${product.name}, ${item.colour}, ${item.size}`
      );
      button.addEventListener("click", () =>
        changeQuantity(index, delta)
      );
      return button;
    }

    const quantity = document.createElement("span");
    quantity.className = "cart-item-quantity";
    quantity.textContent = item.quantity;

    controls.append(
      qtyButton("−", -1, "Decrease"),
      quantity,
      qtyButton("+", 1, "Increase")
    );

    row.append(info, controls);
    elements.cartItems.appendChild(row);
  });

  const total = getTotalQuantity();
  elements.cartCount.textContent = total;
  elements.cartTotal.textContent = total;

  let summary = document.getElementById("cart-price-summary");

  if (!summary) {
    summary = document.createElement("div");
    summary.id = "cart-price-summary";
    summary.className = "cart-price-summary";
    document.querySelector(".cart-summary")
      .insertAdjacentElement("afterend", summary);
  }

  if (!cart.length) {
    summary.textContent = "";
  } else {
    summary.textContent = hasUnpricedItems()
      ? `Priced items subtotal: ${formatPrice(getCartSubtotal())}. Other items require a quote.`
      : `Estimated subtotal: ${formatPrice(getCartSubtotal())} CAD, before tax.`;
  }
}

/* ==========================================
   STORAGE
   ========================================== */

function saveCart() {
  try {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(cart));
  } catch (error) {
    console.warn("Cart storage unavailable.", error);
  }
}

function loadCart() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(CONFIG.storageKey) || "[]"
    );

    if (!Array.isArray(saved)) return;

    cart = saved.filter(item => {
      const product = getProduct(item.productId);
      return product &&
        product.colours.includes(item.colour) &&
        product.sizes.includes(item.size) &&
        Number.isInteger(item.quantity) &&
        item.quantity >= 1 &&
        item.quantity <= 999;
    });
  } catch (error) {
    cart = [];
  }
}

/* ==========================================
   CART PANEL
   ========================================== */

function openCart() {
  previousFocus = document.activeElement;
  elements.cartOverlay.hidden = false;
  elements.cartPanel.classList.add("is-open");
  elements.cartPanel.setAttribute("aria-hidden", "false");
  elements.openCart.setAttribute("aria-expanded", "true");
  document.body.classList.add("cart-open");
  elements.closeCart.focus();
}

function closeCart() {
  elements.cartPanel.classList.remove("is-open");
  elements.cartPanel.setAttribute("aria-hidden", "true");
  elements.openCart.setAttribute("aria-expanded", "false");
  elements.cartOverlay.hidden = true;
  document.body.classList.remove("cart-open");

  if (previousFocus && previousFocus.focus) {
    previousFocus.focus();
  }
}

/* ==========================================
   CUSTOMER INFORMATION AND EMAIL
   ========================================== */

function getCustomerInformation() {
  return {
    name: document.getElementById("customer-name").value.trim(),
    email: document.getElementById("customer-email").value.trim(),
    affiliation: document.getElementById("customer-affiliation").value,
    notes: document.getElementById("customer-notes").value.trim()
  };
}

function showFeedback(message) {
  if (elements.feedback) elements.feedback.textContent = message;
}

function validateRequest() {
  if (!cart.length) {
    showFeedback("Please add at least one item.");
    return false;
  }

  if (!elements.requestForm.reportValidity()) {
    showFeedback("Please complete the required information.");
    return false;
  }

  return true;
}

function generateEmailSubject() {
  return `${CONFIG.emailSubject} - ${getCustomerInformation().name}`;
}

function generateRequestText() {
  const customer = getCustomerInformation();

  const lines = [
    "STATISTICAL SCIENCES APPAREL REQUEST",
    "University of Toronto",
    "",
    "CUSTOMER INFORMATION",
    "----------------------------------------",
    `Name: ${customer.name}`,
    `Email: ${customer.email}`,
    `Affiliation: ${customer.affiliation}`,
    "",
    "REQUESTED ITEMS",
    "----------------------------------------"
  ];

  cart.forEach((item, index) => {
    const product = getProduct(item.productId);
    if (!product) return;

    lines.push(
      `${index + 1}. ${product.name}`,
      `   Item #: ${product.sku}`,
      `   Colour: ${item.colour}`,
      `   Size: ${item.size}`,
      `   Quantity: ${item.quantity}`,
      `   Unit price: ${formatPrice(product.price)}`,
      `   Line total: ${product.price === null
        ? "To be confirmed"
        : formatPrice(product.price * item.quantity)}`,
      ""
    );
  });

  lines.push(
    "----------------------------------------",
    `TOTAL ITEMS: ${getTotalQuantity()}`,
    `ESTIMATED PRICED ITEMS SUBTOTAL: ${formatPrice(getCartSubtotal())}`,
    ""
  );

  if (hasUnpricedItems()) {
    lines.push("Some items require a separate price quote.", "");
  }

  if (customer.notes) {
    lines.push("ADDITIONAL NOTES", customer.notes, "");
  }

  lines.push(
    "All prices are historical supplier estimates in CAD.",
    "Taxes are additional.",
    "Final prices and availability require confirmation.",
    "",
    "This request does not constitute a purchase",
    "or commitment to buy."
  );

  return lines.join("\n");
}

function emailRequest(event) {
  event.preventDefault();
  if (!validateRequest()) return;

  if (CONFIG.recipientEmail.includes("REPLACE_WITH")) {
    showFeedback("Please configure the receiving email address.");
    return;
  }

  const mailto =
    `mailto:${CONFIG.recipientEmail}` +
    `?subject=${encodeURIComponent(generateEmailSubject())}` +
    `&body=${encodeURIComponent(generateRequestText())}`;

  showFeedback(
    mailto.length > 1800
      ? "This request is long. If your email application does not open correctly, use Copy Request Details."
      : "Your email application should open. Review the message and click Send."
  );

  window.location.href = mailto;
}

async function copyRequest() {
  if (!validateRequest()) return;

  const text = [
    `To: ${CONFIG.recipientEmail}`,
    `Subject: ${generateEmailSubject()}`,
    "",
    generateRequestText()
  ].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    showFeedback("Request copied. Paste it into an email and send.");
  } catch (error) {
    showFeedback("Copying was unavailable. Please use Email My Request.");
  }
}

/* ==========================================
   EVENTS AND ACCESSIBILITY
   ========================================== */

function setupEvents() {
  elements.openCart.addEventListener("click", openCart);
  elements.closeCart.addEventListener("click", closeCart);
  elements.cartOverlay.addEventListener("click", closeCart);
  elements.requestForm.addEventListener("submit", emailRequest);
  elements.copyRequest.addEventListener("click", copyRequest);

  document.addEventListener("keydown", event => {
    if (!elements.cartPanel.classList.contains("is-open")) return;

    if (event.key === "Escape") closeCart();
    if (event.key === "Tab") trapCartFocus(event);
  });
}

function trapCartFocus(event) {
  const focusable = Array.from(
    elements.cartPanel.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), ' +
      'select:not([disabled]), textarea:not([disabled]), a[href]'
    )
  ).filter(el => el.getClientRects().length);

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey &&
      document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey &&
             document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
