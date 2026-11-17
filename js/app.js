
/* ==============================================
   STATISTICAL SCIENCES APPAREL CATALOGUE
   University of Toronto

   Version 2.0 — Supplier Product Catalogue
   ============================================== */

"use strict";

/* ==============================================
   1. CONFIGURATION
   ============================================== */

const CONFIG = {
  recipientEmail: "REPLACE_WITH_YOUR_EMAIL@utoronto.ca",
  emailSubject: "Statistical Sciences Apparel Request",
  storageKey: "statsci-apparel-cart-v2",
  currency: "CAD"
};

/*
  IMPORTANT

  Replace recipientEmail with the address that
  should receive apparel requests.

  All prices are estimates based on supplier
  quotations. Taxes are not included.

  The website does not process payments.
*/


/* ==============================================
   2. COLOUR PALETTE
   ============================================== */

const COLOUR_HEX = {
  "Navy": "#152746",
  "Navy Blue": "#152746",
  "Dark Navy": "#152746",
  "Classic Navy": "#17284d",
  "Black": "#171717",
  "White": "#ffffff",
  "Charcoal": "#394852",
  "Grey": "#96999b",
  "Sports Grey": "#a5a5a5",
  "Heather Grey": "#b4b4b4",
  "Graphite": "#737786",
  "Maroon": "#800019",
  "Royal Blue": "#2455ad",
  "Red": "#b92336",
  "Bottle Green": "#155642",
  "Fog": "#e5e3d9",
  "Pure Slate": "#85878b"
};


/* ==============================================
   3. PRODUCT CATALOGUE

   Images can be added later by changing
   the image property to the file path.

   Prices are quoted in Canadian dollars.
   ============================================== */

const PRODUCTS = [

  /* SWEATSHIRTS */

  {
    id: "quarterzip",
    sku: "SWEAT-QUARTERZIP",
    category: "Sweatshirts",
    name: "Quarter-Zip Sweatshirt",
    description:
      "A classic quarter-zip sweatshirt featuring the Statistical Sciences circular seal.",
    price: null,
    image: "images/sweater-option.jpeg",
    colours: [
      "Navy",
      "White",
      "Charcoal",
      "Maroon",
      "Black",
      "Sports Grey"
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    sizeStatus: "provisional"
  },

  /* CHAMPION JACKETS */

  {
    id: "champion-packable",
    sku: "CO200",
    category: "Jackets",
    name: "Champion Unisex Packable Anorak Jacket",
    description:
      "Lightweight, wind- and water-resistant pullover anorak with a packable pouch pocket and adjustable hood.",
    price: 60.00,
    image: "",
    colours: [
      "Black",
      "Navy"
    ],
    sizes: [
      "S", "M", "L", "XL", "2XL", "3XL"
    ]
  },

  {
    id: "champion-fullzip",
    sku: "CO125",
    category: "Jackets",
    name: "Champion Unisex Full-Zip Anorak Jacket",
    description:
      "Lightweight full-zip anorak with an adjustable hood, elastic cuffs and front pockets.",
    price: 69.90,
    image: "",
    colours: [
      "Black",
      "Navy"
    ],
    sizes: [
      "S", "M", "L", "XL", "2XL", "3XL"
    ]
  },

  /* TRIMARK KARMINE */

  {
    id: "karmine-men",
    sku: "12937",
    category: "Jackets",
    name: "Trimark Men's KARMINE Softshell Jacket",
    description:
      "Lightweight softshell jacket with a water-resistant finish, breathable membrane and comfortable stretch construction.",
    price: 59.95,
    image: "",
    colours: [
      "Black",
      "Classic Navy"
    ],
    sizes: [
      "S", "M", "L", "XL", "2XL",
      "3XL", "4XL", "5XL"
    ]
  },

  {
    id: "karmine-women",
    sku: "92937",
    category: "Jackets",
    name: "Trimark Women's KARMINE Softshell Jacket",
    description:
      "Lightweight, water-resistant softshell jacket with shaped seams, a tapered waist and stretch construction.",
    price: 59.95,
    image: "",
    colours: [
      "Black",
      "Navy"
    ],
    sizes: [
      "XS", "S", "M", "L", "XL",
      "2XL", "3XL"
    ]
  },

  /* CLIQUE TRAIL */

  {
    id: "clique-trail-men",
    sku: "MQO00065",
    category: "Jackets",
    name: "Clique Trail Recycled Stretch Softshell Men's Jacket",
    description:
      "Full-zip softshell made with recycled polyester, featuring a bonded fleece interior and zippered pockets.",
    price: 59.00,
    image: "",
    colours: [
      "Black",
      "Dark Navy",
      "Pure Slate"
    ],
    sizes: [
      "S", "M", "L", "XL", "2XL", "3XL"
    ]
  },

  {
    id: "clique-trail-women",
    sku: "LQO00053",
    category: "Jackets",
    name: "Clique Trail Recycled Stretch Softshell Women's Jacket",
    description:
      "Women's full-zip stretch softshell with recycled polyester, a fleece interior and zippered pockets.",
    price: 59.00,
    image: "",
    colours: [
      "Black",
      "Dark Navy",
      "Pure Slate"
    ],
    sizes: [
      "XS", "S", "M", "L", "XL",
      "2XL", "3XL"
    ]
  }

];


/* ==============================================
   4. APPLICATION STATE
   ============================================== */

let cart = [];
let previousFocus = null;

const elements = {};


/* ==============================================
   5. INITIALIZATION
   ============================================== */

document.addEventListener(
  "DOMContentLoaded",
  initialize
);

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

  const year = document.getElementById(
    "current-year"
  );

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}


/* ==============================================
   6. SPLASH SCREEN
   ============================================== */

function setupSplash() {

  if (!elements.splash) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /*
    Keep this synchronized with the
    splash animation in styles.css.
  */

  const duration = reduceMotion ? 250 : 2600;

  window.setTimeout(() => {
    elements.splash.remove();
  }, duration);
}


/* ==============================================
   7. PRICE HELPERS
   ============================================== */

function formatPrice(amount) {

  if (amount === null || amount === undefined) {
    return "Price to be confirmed";
  }

  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: CONFIG.currency
  }).format(amount);
}

function getProduct(id) {
  return PRODUCTS.find(product => product.id === id);
}

function getCartSubtotal() {

  return cart.reduce((total, item) => {

    const product = getProduct(item.productId);

    if (!product || product.price === null) {
      return total;
    }

    return total + product.price * item.quantity;

  }, 0);
}

function hasUnpricedItems() {

  return cart.some(item => {

    const product = getProduct(item.productId);

    return product && product.price === null;

  });
}


/* ==============================================
   8. PRODUCT RENDERING
   ============================================== */

function renderProducts() {

  if (!elements.productGrid) return;

  elements.productGrid.innerHTML = "";

  const categories = [
    "Sweatshirts",
    "Jackets"
  ];

  categories.forEach(category => {

    const products = PRODUCTS.filter(
      product => product.category === category
    );

    if (!products.length) return;

    const heading = document.createElement("h3");
    heading.className = "catalogue-category";
    heading.textContent = category;
    heading.style.gridColumn = "1 / -1";
    heading.style.color = "#002a5c";
    heading.style.margin = "20px 0 0";

    elements.productGrid.appendChild(heading);

    products.forEach(product => {
      elements.productGrid.appendChild(
        createProductCard(product)
      );
    });

  });

}


/* ==============================================
   9. PRODUCT CARD
   ============================================== */

function createProductCard(product) {

  const card = document.createElement("article");
  card.className = "product-card";

  /* IMAGE */

  const imageContainer = document.createElement("div");
  imageContainer.className = "product-image";

  if (product.image) {

    const image = document.createElement("img");

    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";

    image.onerror = () => {
      image.remove();
      showProductPlaceholder(
        imageContainer,
        product.name
      );
    };

    imageContainer.appendChild(image);

  } else {

    showProductPlaceholder(
      imageContainer,
      product.name
    );

  }

  /* DETAILS */

  const details = document.createElement("div");
  details.className = "product-details";

  const title = document.createElement("h3");
  title.className = "product-title";
  title.textContent = product.name;

  const sku = document.createElement("p");
  sku.className = "product-sku";
  sku.textContent = `Item #${product.sku}`;
  sku.style.fontSize = "0.75rem";
  sku.style.color = "#64748b";

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description;

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = formatPrice(product.price);
  price.style.fontWeight = "700";
  price.style.color = "#002a5c";
  price.style.fontSize = "1.1rem";

  const priceNote = document.createElement("p");
  priceNote.className = "product-price-note";
  priceNote.textContent =
    "Estimated supplier price, before tax. Subject to confirmation.";
  priceNote.style.fontSize = "0.75rem";
  priceNote.style.color = "#64748b";

  /* OPTIONS */

  const options = document.createElement("div");
  options.className = "product-options";

  const colourGroup = createSelectGroup(
    "Colour",
    `colour-${product.id}`,
    product.colours
  );

  const sizeGroup = createSelectGroup(
    "Size",
    `size-${product.id}`,
    product.sizes
  );

  const quantityGroup = document.createElement("div");
  quantityGroup.className = "option-group";

  const quantityLabel = document.createElement("label");
  quantityLabel.htmlFor = `quantity-${product.id}`;
  quantityLabel.textContent = "Quantity";

  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.id = `quantity-${product.id}`;
  quantityInput.min = "1";
  quantityInput.max = "99";
  quantityInput.step = "1";
  quantityInput.value = "1";

  quantityGroup.append(
    quantityLabel,
    quantityInput
  );

  options.append(
    colourGroup.group,
    sizeGroup.group,
    quantityGroup
  );

  /* COLOUR PREVIEW */

  const colourPreview = document.createElement("div");

  colourPreview.style.display = "flex";
  colourPreview.style.alignItems = "center";
  colourPreview.style.gap = "8px";
  colourPreview.style.marginTop = "10px";

  const swatch = document.createElement("span");

  swatch.style.display = "inline-block";
  swatch.style.width = "20px";
  swatch.style.height = "20px";
  swatch.style.borderRadius = "50%";
  swatch.style.border = "1px solid #cbd5e1";

  const colourName = document.createElement("span");
  colourName.style.fontSize = "0.8rem";

  function updateColourPreview() {

    const selected = colourGroup.select.value;

    swatch.style.backgroundColor =
      COLOUR_HEX[selected] || "#cccccc";

    colourName.textContent = selected;

  }

  colourGroup.select.addEventListener(
    "change",
    updateColourPreview
  );

  updateColourPreview();

  colourPreview.append(swatch, colourName);

  /* ADD BUTTON */

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.className = "button button-primary";
  addButton.textContent = "Add to Request";

  addButton.addEventListener("click", () => {

    const quantity = Number(quantityInput.value);

    if (
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 99
    ) {

      quantityInput.setCustomValidity(
        "Enter a whole number between 1 and 99."
      );

      quantityInput.reportValidity();
      return;

    }

    quantityInput.setCustomValidity("");

    addToCart({
      productId: product.id,
      productName: product.name,
      sku: product.sku,
      colour: colourGroup.select.value,
      size: sizeGroup.select.value,
      quantity
    });

    quantityInput.value = "1";

    openCart();

  });

  quantityInput.addEventListener("input", () => {
    quantityInput.setCustomValidity("");
  });

  details.append(
    title,
    sku,
    description,
    price,
    priceNote,
    options,
    colourPreview
  );

  if (product.sizeStatus === "provisional") {

    const sizeNote = document.createElement("p");
    sizeNote.textContent =
      "Size availability to be confirmed with supplier.";
    sizeNote.style.fontSize = "0.75rem";
    sizeNote.style.color = "#64748b";

    details.appendChild(sizeNote);
  }

  details.appendChild(addButton);

  card.append(imageContainer, details);

  return card;
}


/* ==============================================
   10. IMAGE PLACEHOLDERS
   ============================================== */

function showProductPlaceholder(container, name) {

  const placeholder = document.createElement("div");
  placeholder.className = "product-placeholder";

  placeholder.textContent = name;

  container.appendChild(placeholder);

}


/* ==============================================
   11. SELECT GROUPS
   ============================================== */

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


/* ==============================================
   12. CART MANAGEMENT
   ============================================== */

function addToCart(item) {

  const existing = cart.find(entry =>
    entry.productId === item.productId &&
    entry.colour === item.colour &&
    entry.size === item.size
  );

  if (existing) {

    existing.quantity = Math.min(
      999,
      existing.quantity + item.quantity
    );

  } else {

    cart.push({ ...item });

  }

  saveCart();
  renderCart();

}

function changeQuantity(index, change) {

  if (!cart[index]) return;

  const quantity = cart[index].quantity + change;

  if (quantity <= 0) {

    cart.splice(index, 1);

  } else {

    cart[index].quantity = Math.min(
      999,
      quantity
    );

  }

  saveCart();
  renderCart();

}

function removeFromCart(index) {

  cart.splice(index, 1);

  saveCart();
  renderCart();

}

function getTotalQuantity() {

  return cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

}


/* ==============================================
   13. RENDER CART
   ============================================== */

function renderCart() {

  if (!elements.cartItems) return;

  elements.cartItems.innerHTML = "";

  if (cart.length === 0) {

    const empty = document.createElement("p");
    empty.className = "empty-cart";

    empty.textContent =
      "Your request is empty. Browse the catalogue to add apparel.";

    elements.cartItems.appendChild(empty);

  }

  cart.forEach((item, index) => {

    const product = getProduct(item.productId);

    if (!product) return;

    const row = document.createElement("div");
    row.className = "cart-item";

    const information = document.createElement("div");

    const title = document.createElement("p");
    title.className = "cart-item-title";
    title.textContent = item.productName;

    const meta = document.createElement("p");
    meta.className = "cart-item-meta";

    meta.textContent =
      `${item.colour} | Size ${item.size}`;

    const price = document.createElement("p");
    price.className = "cart-item-meta";

    price.textContent = product.price === null
      ? "Price to be confirmed"
      : `${formatPrice(product.price)} each`;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-item";
    remove.textContent = "Remove";

    remove.addEventListener("click", () => {
      removeFromCart(index);
    });

    information.append(
      title,
      meta,
      price,
      remove
    );

    const controls = document.createElement("div");
    controls.className = "cart-item-controls";

    const decrease = document.createElement("button");
    decrease.type = "button";
    decrease.className = "quantity-button";
    decrease.textContent = "\u2212";

    decrease.setAttribute(
      "aria-label",
      `Decrease quantity of ${item.productName}, ${item.colour}, size ${item.size}`
    );

    decrease.addEventListener("click", () => {
      changeQuantity(index, -1);
    });

    const quantity = document.createElement("span");
    quantity.className = "cart-item-quantity";
    quantity.textContent = item.quantity;

    const increase = document.createElement("button");
    increase.type = "button";
    increase.className = "quantity-button";
    increase.textContent = "+";

    increase.setAttribute(
      "aria-label",
      `Increase quantity of ${item.productName}, ${item.colour}, size ${item.size}`
    );

    increase.addEventListener("click", () => {
      changeQuantity(index, 1);
    });

    controls.append(
      decrease,
      quantity,
      increase
    );

    row.append(information, controls);

    elements.cartItems.appendChild(row);

  });

  const total = getTotalQuantity();

  elements.cartCount.textContent = total;

  /*
    Existing HTML uses this element for
    total quantity, not dollar value.
  */

  elements.cartTotal.textContent = total;

  /* ESTIMATED PRICE SUMMARY */

  let summary = document.getElementById(
    "cart-price-summary"
  );

  if (!summary) {

    summary = document.createElement("div");
    summary.id = "cart-price-summary";
    summary.className = "cart-price-summary";

    summary.style.padding = "12px 0";
    summary.style.fontSize = "0.9rem";
    summary.style.color = "#002a5c";

    const cartSummary = document.querySelector(
      ".cart-summary"
    );

    if (cartSummary) {
      cartSummary.insertAdjacentElement(
        "afterend",
        summary
      );
    }

  }

  if (cart.length === 0) {

    summary.textContent = "";

  } else {

    const subtotal = formatPrice(
      getCartSubtotal()
    );

    summary.textContent = hasUnpricedItems()
      ? `Priced items subtotal: ${subtotal}. Additional items require a quote.`
      : `Estimated subtotal: ${subtotal} CAD, before tax.`;

  }

}


/* ==============================================
   14. LOCAL CART STORAGE
   ============================================== */

function saveCart() {

  try {

    localStorage.setItem(
      CONFIG.storageKey,
      JSON.stringify(cart)
    );

  } catch (error) {

    console.warn(
      "Unable to save cart.",
      error
    );

  }

}

function loadCart() {

  try {

    const saved = localStorage.getItem(
      CONFIG.storageKey
    );

    if (!saved) return;

    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed)) return;

    cart = parsed.filter(item => {

      const product = getProduct(item.productId);

      return (
        product &&
        product.colours.includes(item.colour) &&
        product.sizes.includes(item.size) &&
        Number.isInteger(item.quantity) &&
        item.quantity >= 1 &&
        item.quantity <= 999
      );

    }).map(item => {

      const product = getProduct(item.productId);

      return {
        productId: product.id,
        productName: product.name,
        sku: product.sku,
        colour: item.colour,
        size: item.size,
        quantity: item.quantity
      };

    });

  } catch (error) {

    cart = [];

  }

}


/* ==============================================
   15. OPEN AND CLOSE CART
   ============================================== */

function openCart() {

  previousFocus = document.activeElement;

  elements.cartOverlay.hidden = false;

  elements.cartPanel.classList.add(
    "is-open"
  );

  elements.cartPanel.setAttribute(
    "aria-hidden",
    "false"
  );

  elements.openCart.setAttribute(
    "aria-expanded",
    "true"
  );

  document.body.classList.add(
    "cart-open"
  );

  elements.closeCart.focus();

}

function closeCart() {

  elements.cartPanel.classList.remove(
    "is-open"
  );

  elements.cartPanel.setAttribute(
    "aria-hidden",
    "true"
  );

  elements.openCart.setAttribute(
    "aria-expanded",
    "false"
  );

  elements.cartOverlay.hidden = true;

  document.body.classList.remove(
    "cart-open"
  );

  if (
    previousFocus &&
    typeof previousFocus.focus === "function"
  ) {

    previousFocus.focus();

  }

}


/* ==============================================
   16. CUSTOMER INFORMATION
   ============================================== */

function getCustomerInformation() {

  return {

    name: document.getElementById(
      "customer-name"
    ).value.trim(),

    email: document.getElementById(
      "customer-email"
    ).value.trim(),

    affiliation: document.getElementById(
      "customer-affiliation"
    ).value,

    notes: document.getElementById(
      "customer-notes"
    ).value.trim()

  };

}

function validateRequest() {

  if (cart.length === 0) {

    showFeedback(
      "Please add at least one apparel item."
    );

    return false;

  }

  if (!elements.requestForm.reportValidity()) {

    showFeedback(
      "Please complete the required contact information."
    );

    return false;

  }

  return true;

}


/* ==============================================
   17. GENERATE EMAIL BODY
   ============================================== */

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

    const product = getProduct(
      item.productId
    );

    const unitPrice = product.price;

    const lineTotal = unitPrice === null
      ? "To be confirmed"
      : formatPrice(
          unitPrice * item.quantity
        );

    lines.push(
      `${index + 1}. ${product.name}`,
      `   Item #: ${product.sku}`,
      `   Colour: ${item.colour}`,
      `   Size: ${item.size}`,
      `   Quantity: ${item.quantity}`,
      `   Unit price: ${formatPrice(unitPrice)}`,
      `   Subtotal: ${lineTotal}`,
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

    lines.push(
      "Some requested items do not yet have",
      "confirmed pricing.",
      ""
    );

  }

  if (customer.notes) {

    lines.push(
      "ADDITIONAL NOTES",
      customer.notes,
      ""
    );

  }

  lines.push(
    "PRICING INFORMATION",
    "----------------------------------------",
    "All prices are estimates in Canadian dollars.",
    "Taxes are additional.",
    "Final pricing and availability are subject",
    "to supplier confirmation.",
    "",
    "This request does not constitute a",
    "purchase or commitment to buy.",
    "",
    "Thank you."
  );

  return lines.join("\n");

}

function generateEmailSubject() {

  const customer = getCustomerInformation();

  return `${CONFIG.emailSubject} - ${customer.name}`;

}


/* ==============================================
   18. EMAIL REQUEST
   ============================================== */

function emailRequest(event) {

  event.preventDefault();

  if (!validateRequest()) return;

  if (
    CONFIG.recipientEmail.includes(
      "REPLACE_WITH"
    )
  ) {

    showFeedback(
      "Please configure the department email address in app.js."
    );

    return;

  }

  const subject = generateEmailSubject();
  const body = generateRequestText();

  const mailto =
    `mailto:${CONFIG.recipientEmail}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  if (mailto.length > 1800) {

    showFeedback(
      "Your request is lengthy. If the email does not open correctly, use Copy Request Details."
    );

  } else {

    showFeedback(
      "Your email application should open. Please review your request and click Send."
    );

  }

  window.location.href = mailto;

}


/* ==============================================
   19. COPY REQUEST
   ============================================== */

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

    showFeedback(
      "Request copied. Paste it into an email and send it to the department."
    );

  } catch (error) {

    showFeedback(
      "Automatic copying was unavailable. Please use Email My Request."
    );

  }

}


/* ==============================================
   20. STATUS FEEDBACK
   ============================================== */

function showFeedback(message) {

  if (!elements.feedback) return;

  elements.feedback.textContent = message;

}


/* ==============================================
   21. EVENT LISTENERS
   ============================================== */

function setupEvents() {

  elements.openCart.addEventListener(
    "click",
    openCart
  );

  elements.closeCart.addEventListener(
    "click",
    closeCart
  );

  elements.cartOverlay.addEventListener(
    "click",
    closeCart
  );

  elements.requestForm.addEventListener(
    "submit",
    emailRequest
  );

  elements.copyRequest.addEventListener(
    "click",
    copyRequest
  );

  document.addEventListener("keydown", event => {

    if (
      event.key === "Escape" &&
      elements.cartPanel.classList.contains(
        "is-open"
      )
    ) {

      closeCart();

    }

    if (
      event.key === "Tab" &&
      elements.cartPanel.classList.contains(
        "is-open"
      )
    ) {

      trapCartFocus(event);

    }

  });

}


/* ==============================================
   22. KEYBOARD ACCESSIBILITY
   ============================================== */

function trapCartFocus(event) {

  const focusable = Array.from(
    elements.cartPanel.querySelectorAll(
      'button:not([disabled]), ' +
      'input:not([disabled]), ' +
      'select:not([disabled]), ' +
      'textarea:not([disabled]), ' +
      'a[href]'
    )
  ).filter(
    element => element.getClientRects().length
  );

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[
    focusable.length - 1
  ];

  if (
    event.shiftKey &&
    document.activeElement === first
  ) {

    event.preventDefault();
    last.focus();

  } else if (
    !event.shiftKey &&
    document.activeElement === last
  ) {

    event.preventDefault();
    first.focus();

  }

}
