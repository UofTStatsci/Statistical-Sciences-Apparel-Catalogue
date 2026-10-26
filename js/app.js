
/* ==========================================
   STATISTICAL SCIENCES APPAREL CATALOGUE
   University of Toronto
   ========================================== */

"use strict";

/* ==========================================
   1. WEBSITE CONFIGURATION
   ========================================== */

const CONFIG = {
  recipientEmail: "communications.statistics@utoronto.ca",
  emailSubject: "Statistical Sciences Apparel Request",
  storageKey: "statsci-apparel-cart-v1"
};

/*
  Replace recipientEmail with the email address
  that should receive apparel requests.

  Prices are intentionally excluded.
  All requests are subject to a bookstore quote.
*/


/* ==========================================
   2. PRODUCT CATALOGUE
   ========================================== */

const PRODUCTS = [
  {
    id: "crewneck",
    name: "Classic Crewneck Sweatshirt",
    description:
      "A comfortable everyday crewneck sweatshirt featuring Statistical Sciences branding.",
    image: "",
    colours: [
      "Navy Blue",
      "Black",
      "Heather Grey",
      "Royal Blue",
      "White",
      "Red"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"]
  },

  {
    id: "hoodie",
    name: "Pullover Hoodie",
    description:
      "A classic pullover hoodie with department branding, ideal for everyday wear.",
    image: "",
    colours: [
      "Navy Blue",
      "Black",
      "Heather Grey",
      "Royal Blue",
      "White",
      "Red"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"]
  },

  {
    id: "ziphoodie",
    name: "Full-Zip Hoodie",
    description:
      "A versatile full-zip sweatshirt with Statistical Sciences branding.",
    image: "",
    colours: [
      "Navy Blue",
      "Black",
      "Heather Grey",
      "Royal Blue",
      "White",
      "Red"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"]
  }
];


/* ==========================================
   3. APPLICATION STATE
   ========================================== */

let cart = [];
let previousFocus = null;

const elements = {};


/* ==========================================
   4. INITIALIZATION
   ========================================== */

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  elements.productGrid =
    document.getElementById("product-grid");

  elements.openCart =
    document.getElementById("open-cart");

  elements.closeCart =
    document.getElementById("close-cart");

  elements.cartPanel =
    document.getElementById("cart-panel");

  elements.cartOverlay =
    document.getElementById("cart-overlay");

  elements.cartItems =
    document.getElementById("cart-items");

  elements.cartCount =
    document.getElementById("cart-count");

  elements.cartTotal =
    document.getElementById("cart-total-items");

  elements.requestForm =
    document.getElementById("request-form");

  elements.copyRequest =
    document.getElementById("copy-request");

  elements.feedback =
    document.getElementById("request-feedback");

  elements.splash =
    document.getElementById("splash-screen");

  loadCart();
  renderProducts();
  renderCart();
  setupEvents();
  setupSplash();

  const year = document.getElementById("current-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}


/* ==========================================
   5. SPLASH SCREEN
   ========================================== */

function setupSplash() {
  if (!elements.splash) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const duration = reduceMotion ? 250 : 1650;

  window.setTimeout(() => {
    elements.splash.remove();
  }, duration);
}


/* ==========================================
   6. PRODUCT RENDERING
   ========================================== */

function renderProducts() {
  if (!elements.productGrid) return;

  elements.productGrid.innerHTML = "";

  PRODUCTS.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";

    const imageContainer = document.createElement("div");
    imageContainer.className = "product-image";

    if (product.image) {
      const image = document.createElement("img");

      image.src = product.image;
      image.alt = product.name;
      image.loading = "lazy";

      imageContainer.appendChild(image);
    } else {
      const placeholder = document.createElement("div");

      placeholder.className = "product-placeholder";
      placeholder.textContent = product.name;

      imageContainer.appendChild(placeholder);
    }

    const details = document.createElement("div");
    details.className = "product-details";

    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = product.name;

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;

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
    quantityInput.required = true;

    quantityGroup.append(quantityLabel, quantityInput);

    options.append(
      colourGroup.group,
      sizeGroup.group,
      quantityGroup
    );

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "button button-primary";
    addButton.textContent = "Add to Request";

    addButton.addEventListener("click", () => {
      const colour = colourGroup.select.value;
      const size = sizeGroup.select.value;
      const quantity = Number(quantityInput.value);

      if (
        !Number.isInteger(quantity) ||
        quantity < 1 ||
        quantity > 99
      ) {
        quantityInput.setCustomValidity(
          "Please enter a whole number between 1 and 99."
        );
        quantityInput.reportValidity();
        return;
      }

      quantityInput.setCustomValidity("");

      addToCart({
        productId: product.id,
        productName: product.name,
        colour,
        size,
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
      description,
      options,
      addButton
    );

    card.append(imageContainer, details);
    elements.productGrid.appendChild(card);
  });
}


/* ==========================================
   7. CREATE SELECT FIELDS
   ========================================== */

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


/* ==========================================
   8. SHOPPING CART
   ========================================== */

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

  const nextQuantity = cart[index].quantity + change;

  if (nextQuantity <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].quantity = Math.min(999, nextQuantity);
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


/* ==========================================
   9. RENDER SHOPPING CART
   ========================================== */

function renderCart() {
  if (!elements.cartItems) return;

  elements.cartItems.innerHTML = "";

  if (cart.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-cart";
    empty.textContent =
      "Your request is currently empty. Browse the catalogue to add apparel.";

    elements.cartItems.appendChild(empty);
  }

  cart.forEach((item, index) => {
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

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-item";
    remove.textContent = "Remove";

    remove.addEventListener("click", () => {
      removeFromCart(index);
    });

    information.append(title, meta, remove);

    const controls = document.createElement("div");
    controls.className = "cart-item-controls";

    const decrease = document.createElement("button");
    decrease.type = "button";
    decrease.className = "quantity-button";
    decrease.textContent = "−";
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

    controls.append(decrease, quantity, increase);
    row.append(information, controls);

    elements.cartItems.appendChild(row);
  });

  const total = getTotalQuantity();

  elements.cartCount.textContent = total;
  elements.cartTotal.textContent = total;
}


/* ==========================================
   10. SAVE AND RESTORE CART
   ========================================== */

function saveCart() {
  try {
    localStorage.setItem(
      CONFIG.storageKey,
      JSON.stringify(cart)
    );
  } catch (error) {
    console.warn("Cart storage unavailable.", error);
  }
}

function loadCart() {
  try {
    const saved = localStorage.getItem(CONFIG.storageKey);

    if (!saved) return;

    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed)) return;

    cart = parsed.filter(item => {
      const product = PRODUCTS.find(
        p => p.id === item.productId
      );

      return (
        product &&
        product.name === item.productName &&
        product.colours.includes(item.colour) &&
        product.sizes.includes(item.size) &&
        Number.isInteger(item.quantity) &&
        item.quantity >= 1 &&
        item.quantity <= 999
      );
    });
  } catch (error) {
    cart = [];
    console.warn("Unable to restore cart.", error);
  }
}


/* ==========================================
   11. OPEN AND CLOSE CART
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

  if (
    previousFocus &&
    typeof previousFocus.focus === "function"
  ) {
    previousFocus.focus();
  }
}


/* ==========================================
   12. CUSTOMER INFORMATION
   ========================================== */

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
      "Please add at least one apparel item before submitting."
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


/* ==========================================
   13. GENERATE ITEMIZED EMAIL
   ========================================== */

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
    lines.push(
      `${index + 1}. ${item.productName}`,
      `   Colour: ${item.colour}`,
      `   Size: ${item.size}`,
      `   Quantity: ${item.quantity}`,
      ""
    );
  });

  lines.push(
    "----------------------------------------",
    `TOTAL ITEMS REQUESTED: ${getTotalQuantity()}`,
    ""
  );

  if (customer.notes) {
    lines.push(
      "ADDITIONAL NOTES",
      customer.notes,
      ""
    );
  }

  lines.push(
    "I understand that pricing and availability",
    "are subject to confirmation following a",
    "quotation from the University of Toronto",
    "Bookstore.",
    "",
    "This request does not constitute a purchase",
    "or commitment to buy.",
    "",
    "Thank you."
  );

  return lines.join("\n");
}

function generateEmailSubject() {
  const customer = getCustomerInformation();

  return `${CONFIG.emailSubject} - ${customer.name}`;
}


/* ==========================================
   14. EMAIL REQUEST
   ========================================== */

function emailRequest(event) {
  event.preventDefault();

  if (!validateRequest()) return;

  if (
    CONFIG.recipientEmail.includes("REPLACE_WITH")
  ) {
    showFeedback(
      "The department email address has not yet been configured."
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
      "This request is lengthy. If your email application does not open correctly, use Copy Request Details instead."
    );
  } else {
    showFeedback(
      "Your email application should open with your request. Please review the message and click Send."
    );
  }

  window.location.href = mailto;
}


/* ==========================================
   15. COPY REQUEST DETAILS
   ========================================== */

async function copyRequest() {
  if (!validateRequest()) return;

  const subject = generateEmailSubject();
  const body = generateRequestText();

  const text =
    `To: ${CONFIG.recipientEmail}\n` +
    `Subject: ${subject}\n\n` +
    body;

  try {
    await navigator.clipboard.writeText(text);

    showFeedback(
      "Request details copied. Paste them into an email and send to the department."
    );
  } catch (error) {
    showFeedback(
      "Unable to copy automatically. Please use Email My Request or try another browser."
    );
  }
}


/* ==========================================
   16. FEEDBACK
   ========================================== */

function showFeedback(message) {
  if (!elements.feedback) return;

  elements.feedback.textContent = message;
}


/* ==========================================
   17. EVENT LISTENERS
   ========================================== */

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
      elements.cartPanel.classList.contains("is-open")
    ) {
      closeCart();
    }

    if (
      event.key === "Tab" &&
      elements.cartPanel.classList.contains("is-open")
    ) {
      trapCartFocus(event);
    }
  });
}


/* ==========================================
   18. CART KEYBOARD ACCESSIBILITY
   ========================================== */

function trapCartFocus(event) {
  const focusable = Array.from(
    elements.cartPanel.querySelectorAll(
      'button:not([disabled]), ' +
      'input:not([disabled]), ' +
      'select:not([disabled]), ' +
      'textarea:not([disabled]), ' +
      'a[href]'
    )
  ).filter(element => element.getClientRects().length);

  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

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
