
"use strict";

/* ============================================
   STATISTICAL SCIENCES APPAREL CATALOGUE
   University of Toronto
   Version 5 — Final Colour Configuration
   ============================================ */

/* 1. CONFIGURATION */

const CONFIG = {
  recipientEmail: "REPLACE_WITH_YOUR_EMAIL@utoronto.ca",
  emailSubject: "Statistical Sciences Apparel Request",
  storageKey: "statsci-apparel-cart-v5",
  splashDuration: 2600
};

/*
  Replace recipientEmail with your actual
  departmental receiving email address.

  Prices are historical supplier estimates
  in CAD, excluding tax.
*/

/* 2. SWEATSHIRT COLOURS AND IMAGES */

const SWEATER_IMAGES = {
  "Navy": "images/quarterzip-navy.webp",
  "White": "images/quarterzip-white.webp",
  "Charcoal": "images/quarterzip-charcoal.webp",
  "Maroon": "images/quarterzip-maroon.webp",
  "Black": "images/quarterzip-black.webp",
  "Sports Grey": "images/quarterzip-sports-grey.webp"
};

const COLOUR_HEX = {
  "Navy": "#182946",
  "White": "#ffffff",
  "Charcoal": "#394852",
  "Maroon": "#800019",
  "Black": "#171717",
  "Sports Grey": "#a5a5a5"
};

/* 3. SIZE GROUPS

   Jacket sizes should be checked against
   supplier measurement charts before launch.
*/

const SIZE = {
  standard: ["S","M","L","XL","2XL","3XL"],
  extended: ["XS","S","M","L","XL","2XL","3XL","4XL"],
  extended5: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"],
  women: ["XS","S","M","L","XL","2XL","3XL"]
};

/* 4. COMPLETE PRODUCT CATALOGUE */

const PRODUCTS = [
  {
    id: "quarterzip",
    sku: "SWEAT-QUARTERZIP",
    category: "Sweatshirts",
    name: "Quarter-Zip Sweatshirt",
    description: "Classic quarter-zip sweatshirt featuring the Statistical Sciences circular seal.",
    price: null,
    image: SWEATER_IMAGES.Navy,
    colourImages: SWEATER_IMAGES,
    colours: Object.keys(SWEATER_IMAGES),
    sizes: ["XS","S","M","L","XL","2XL","3XL"],
    sizeStatus: "provisional"
  },

  {
    id: "champion-packable",
    sku: "CO200",
    category: "Jackets",
    name: "Champion Unisex Packable Anorak",
    description: "Lightweight wind- and water-resistant pullover with adjustable hood and packable pouch pocket.",
    price: 60,
    image: "images/champion-packable.webp",
    colour: "Navy Blue",
    sizes: SIZE.standard
  },
  {
    id: "champion-fullzip",
    sku: "CO125",
    category: "Jackets",
    name: "Champion Unisex Full-Zip Anorak",
    description: "Lightweight full-zip wind- and water-resistant jacket with adjustable hood and pockets.",
    price: 69.90,
    image: "images/champion-fullzip.webp",
    colour: "Navy Blue",
    sizes: SIZE.standard
  },
  {
    id: "columbia-powder-men",
    sku: "212489",
    category: "Jackets",
    name: "Columbia Men's Powder Lite II Jacket",
    description: "Insulated jacket with Omni-Heat thermal-reflective lining and water-repellent fabric.",
    price: 182.05,
    image: "images/columbia-powder-men.webp",
    colour: "Collegiate Navy",
    sizes: SIZE.standard
  },
  {
    id: "columbia-powder-women",
    sku: "212490",
    category: "Jackets",
    name: "Columbia Women's Powder Lite II Full-Zip Jacket",
    description: "Insulated women's jacket with Omni-Heat lining and zippered pockets.",
    price: 182.05,
    image: "images/columbia-powder-women.webp",
    colour: "Black",
    sizes: SIZE.women
  },
  {
    id: "columbia-tipton",
    sku: "208959",
    category: "Jackets",
    name: "Columbia Men's Tipton Peak III Insulated Hooded Jacket",
    description: "Insulated hooded jacket with waterproof breathable construction and adjustable cuffs.",
    price: 224.95,
    image: "images/columbia-tipton.webp",
    colour: "Black",
    sizes: SIZE.standard
  },
  {
    id: "columbia-bugaboo-women",
    sku: "208782",
    category: "Jackets",
    name: "Columbia Women's Bugaboo III Fleece Interchange Jacket",
    description: "Interchange jacket with removable fleece liner and weather-protective outer shell.",
    price: 284.95,
    image: "images/columbia-bugaboo-women.webp",
    colour: "Black",
    sizes: SIZE.women
  },
  {
    id: "columbia-bugaboo-men",
    sku: "209690",
    category: "Jackets",
    name: "Columbia Men's Bugaboo III Fleece Interchange Jacket",
    description: "Three-in-one interchange jacket with removable fleece liner and adjustable storm hood.",
    price: 284.95,
    image: "images/columbia-bugaboo-men.webp",
    colour: "Black",
    sizes: SIZE.standard
  },
  {
    id: "harriton-fleece",
    sku: "M740",
    category: "Jackets",
    name: "Harriton Unisex Fleece Lined Nylon Jacket",
    description: "Wind- and water-resistant nylon jacket with anti-pill microfleece lining and zippered pockets.",
    price: 65.20,
    image: "images/harriton-fleece.webp",
    colour: "Navy Blue",
    sizes: SIZE.extended
  },
  {
    id: "harriton-climabloc",
    sku: "M721",
    category: "Jackets",
    name: "Harriton Unisex ClimaBloc Station Jacket",
    description: "Insulated station jacket with durable water-repellent protection and adjustable fit.",
    price: 82.90,
    image: "images/harriton-climabloc.webp",
    colour: "Navy Blue",
    sizes: SIZE.extended5
  },
  {
    id: "core365-region",
    sku: "88205",
    category: "Jackets",
    name: "CORE365 Men's Region 3-in-1 Jacket with Fleece Liner",
    description: "Water-resistant outer jacket with removable anti-pill fleece liner and roll-away hood.",
    price: 172.90,
    image: "images/core365-region.webp",
    colour: "Dark Navy",
    sizes: SIZE.extended5
  },
  {
    id: "karmine-men",
    sku: "12937",
    category: "Jackets",
    name: "Trimark Men's KARMINE Softshell Jacket",
    description: "Lightweight stretch softshell with waterproof breathable membrane and snap-closure pockets.",
    price: 59.95,
    image: "images/karmine-men.webp",
    colour: "Vintage Navy",
    sizes: ["S","M","L","XL","2XL","3XL","4XL","5XL"]
  },
  {
    id: "karmine-women",
    sku: "92937",
    category: "Jackets",
    name: "Trimark Women's KARMINE Softshell Jacket",
    description: "Lightweight women's softshell with shaped seams and water-repellent finish.",
    price: 59.95,
    image: "images/karmine-women.webp",
    colour: "Vintage Navy",
    sizes: SIZE.women
  },
  {
    id: "okapi-men",
    sku: "18117",
    category: "Jackets",
    name: "Trimark Men's OKAPI Knit Jacket",
    description: "Polyester jersey knit full-zip jacket with brushed backing and lower welt pockets.",
    price: 56.95,
    image: "images/okapi-men.webp",
    colour: "Navy",
    sizes: SIZE.extended5
  },
  {
    id: "okapi-women",
    sku: "98117",
    category: "Jackets",
    name: "Trimark Women's OKAPI Knit Jacket",
    description: "Women's full-zip knit jacket with brushed backing and shaped seams.",
    price: 56.95,
    image: "images/okapi-women.webp",
    colour: "Navy",
    sizes: SIZE.women
  },
  {
    id: "clique-summit-men",
    sku: "MQO00028",
    category: "Jackets",
    name: "Clique Summit Performance Fleece Men's Full-Zip Jacket",
    description: "Soft polyester microfleece jacket with full zipper, mock neck and zippered pockets.",
    price: 49.75,
    image: "images/clique-summit-men.webp",
    colour: "Navy",
    sizes: SIZE.extended5
  },
  {
    id: "clique-summit-women",
    sku: "LQO00019",
    category: "Jackets",
    name: "Clique Summit Performance Fleece Women's Full-Zip Jacket",
    description: "Women's microfleece jacket with full zipper, mock neck and secure pockets.",
    price: 49.75,
    image: "images/clique-summit-women.webp",
    colour: "Navy",
    sizes: SIZE.women
  },
  {
    id: "clique-equinox-men",
    sku: "MQO00073",
    category: "Jackets",
    name: "Clique Equinox Insulated Softshell Men's Hooded Jacket",
    description: "Insulated softshell with wind- and water-resistant exterior and adjustable hood.",
    price: 90,
    image: "images/clique-equinox-men.webp",
    colour: "Dark Navy",
    sizes: SIZE.standard
  },
  {
    id: "clique-equinox-women",
    sku: "LQO00060",
    category: "Jackets",
    name: "Clique Equinox Insulated Softshell Women's Hooded Jacket",
    description: "Women's insulated softshell with water-resistant exterior and adjustable hood.",
    price: 90,
    image: "images/clique-equinox-women.webp",
    colour: "Dark Navy",
    sizes: SIZE.women
  },
  {
    id: "clique-trail-men",
    sku: "MQO00065",
    category: "Jackets",
    name: "Clique Trail Recycled Stretch Softshell Men's Jacket",
    description: "Recycled polyester stretch softshell with fleece interior and zippered pockets.",
    price: 59,
    image: "images/clique-trail-men.webp",
    colour: "Dark Navy",
    sizes: SIZE.standard
  },
  {
    id: "clique-trail-women",
    sku: "LQO00053",
    category: "Jackets",
    name: "Clique Trail Recycled Stretch Softshell Women's Jacket",
    description: "Women's recycled stretch softshell with bonded microfleece lining and zippered pockets.",
    price: 59,
    image: "images/clique-trail-women.webp",
    colour: "Dark Navy",
    sizes: SIZE.women
  }
];

/* 5. APPLICATION STATE */

let cart = [];
let previousFocus = null;
let galleryPreviousFocus = null;
let galleryProduct = null;
let galleryColour = null;
let galleryIndex = 0;

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
  createGallery();
  setupEvents();
  setupSplash();

  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();
}

/* 6. SPLASH SCREEN */

function setupSplash() {
  if (!elements.splash) return;

  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.setTimeout(
    () => elements.splash.remove(),
    reduced ? 250 : CONFIG.splashDuration
  );
}

/* 7. HELPERS */

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getColour(product, selected) {
  return product.colourImages
    ? selected || product.colours[0]
    : product.colour;
}

function getProductImages(product, colour) {
  if (product.colourImages) {
    const selected = getColour(product, colour);
    return [{
      src: product.colourImages[selected],
      label: selected
    }];
  }

  if (Array.isArray(product.images) && product.images.length) {
    return product.images.filter(image => image.src);
  }

  return product.image
    ? [{src: product.image, label: product.colour}]
    : [];
}

function formatPrice(value) {
  if (value === null || value === undefined) {
    return "Price to be confirmed";
  }

  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD"
  }).format(value);
}

function makeElement(tag, className = "", text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function createSelectGroup(labelText, id, values) {
  const group = makeElement("div", "option-group");
  const label = makeElement("label", "", labelText);
  label.htmlFor = id;

  const select = document.createElement("select");
  select.id = id;

  values.forEach(value => {
    select.add(new Option(value, value));
  });

  group.append(label, select);
  return {group, select};
}

/* 8. PRODUCT CATALOGUE */

function renderProducts() {
  if (!elements.productGrid) return;

  elements.productGrid.replaceChildren();

  ["Sweatshirts", "Jackets"].forEach(category => {
    const heading = makeElement(
      "h3", "catalogue-category", category
    );

    elements.productGrid.appendChild(heading);

    PRODUCTS
      .filter(p => p.category === category)
      .sort((a, b) => {
        if (a.price === null && b.price === null) return 0;
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return a.price - b.price;
      })
      .forEach(product => {
        elements.productGrid.appendChild(
          createProductCard(product)
        );
      });
  });
}

/* 9. PRODUCT CARDS */

function createProductCard(product) {
  const card = makeElement("article", "product-card");
  const imageBox = makeElement("div", "product-image");
  const details = makeElement("div", "product-details");

  const isSweater = Boolean(product.colourImages);
  let selectedColour = isSweater
    ? product.colours[0]
    : product.colour;

  const imageButton = makeElement(
    "button", "product-image-button"
  );
  imageButton.type = "button";
  imageButton.title = "Click to enlarge image";
  imageButton.setAttribute(
    "aria-label", `Enlarge image of ${product.name}`
  );

  const image = document.createElement("img");
  image.alt = `${product.name} — ${selectedColour}`;
  image.loading = "lazy";

  const zoom = makeElement(
    "span", "product-zoom-label", "View larger"
  );
  zoom.setAttribute("aria-hidden", "true");

  const placeholder = makeElement(
    "div", "product-placeholder", product.name
  );

  function updateImage() {
    const images = getProductImages(product, selectedColour);
    const src = images[0]?.src;

    if (!src) {
      imageButton.replaceChildren(placeholder);
      return;
    }

    image.style.display = "";
    image.src = src;
    image.alt = `${product.name} — ${selectedColour}`;
    imageButton.replaceChildren(image, zoom);
  }

  image.onerror = () => {
    imageButton.replaceChildren(placeholder);
  };

  imageButton.addEventListener("click", () => {
    openGallery(product, selectedColour);
  });

  imageBox.appendChild(imageButton);
  updateImage();

  const title = makeElement(
    "h3", "product-title", product.name
  );

  const sku = makeElement(
    "p", "product-sku", `Item #${product.sku}`
  );

  const description = makeElement(
    "p", "product-description", product.description
  );

  const price = makeElement(
    "p", "product-price", formatPrice(product.price)
  );

  const priceNote = makeElement(
    "p",
    "product-price-note",
    product.price === null
      ? "Supplier pricing to be confirmed."
      : "Historical supplier quote, before tax. Final pricing subject to confirmation."
  );

  const options = makeElement("div", "product-options");

  if (isSweater) {
    const colourGroup = createSelectGroup(
      "Colour",
      `colour-${product.id}`,
      product.colours
    );

    colourGroup.select.addEventListener("change", () => {
      selectedColour = colourGroup.select.value;
      updateImage();
    });

    options.appendChild(colourGroup.group);
  } else {
    const colourGroup = makeElement("div", "option-group");
    const label = makeElement("label", "", "Colour");

    const fixedColour = makeElement(
      "p", "product-fixed-colour", product.colour
    );

    fixedColour.style.margin = "0";
    fixedColour.style.fontSize = ".9rem";
    fixedColour.style.fontWeight = "600";

    colourGroup.append(label, fixedColour);
    options.appendChild(colourGroup);
  }

  const sizeGroup = createSelectGroup(
    "Size",
    `size-${product.id}`,
    product.sizes
  );

  options.appendChild(sizeGroup.group);

  const quantityGroup = makeElement("div", "option-group");
  const quantityLabel = makeElement(
    "label", "", "Quantity"
  );
  quantityLabel.htmlFor = `quantity-${product.id}`;

  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.id = `quantity-${product.id}`;
  quantityInput.min = "1";
  quantityInput.max = "99";
  quantityInput.step = "1";
  quantityInput.value = "1";

  quantityInput.addEventListener("input", () => {
    quantityInput.setCustomValidity("");
  });

  quantityGroup.append(quantityLabel, quantityInput);
  options.appendChild(quantityGroup);

  const button = makeElement(
    "button", "button button-primary", "Add to Request"
  );
  button.type = "button";

  button.addEventListener("click", () => {
    const quantity = Number(quantityInput.value);

    if (
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 99
    ) {
      quantityInput.setCustomValidity(
        "Enter a whole number from 1 to 99."
      );
      quantityInput.reportValidity();
      return;
    }

    quantityInput.setCustomValidity("");

    addToCart({
      productId: product.id,
      colour: selectedColour,
      size: sizeGroup.select.value,
      quantity
    });

    quantityInput.value = "1";
    openCart();
  });

  details.append(
    title, sku, description, price, priceNote, options
  );

  if (product.sizeStatus === "provisional") {
    details.appendChild(makeElement(
      "p",
      "product-price-note",
      "Size availability to be confirmed."
    ));
  }

  details.appendChild(button);
  card.append(imageBox, details);

  return card;
}

/* 10. FULL-SCREEN IMAGE GALLERY */

function createGallery() {
  const overlay = makeElement("div", "gallery-overlay");
  overlay.id = "product-gallery";
  overlay.hidden = true;
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "gallery-title");

  const panel = makeElement("div", "gallery-panel");
  const header = makeElement("div", "gallery-header");

  const heading = makeElement("h2", "gallery-title");
  heading.id = "gallery-title";

  const close = makeElement(
    "button", "gallery-close", "×"
  );
  close.type = "button";
  close.setAttribute("aria-label", "Close image viewer");

  header.append(heading, close);

  const stage = makeElement("div", "gallery-stage");

  const previous = makeElement(
    "button", "gallery-arrow gallery-prev", "‹"
  );
  previous.type = "button";
  previous.setAttribute("aria-label", "Previous image");

  const image = document.createElement("img");
  image.className = "gallery-image";
  image.alt = "";

  const next = makeElement(
    "button", "gallery-arrow gallery-next", "›"
  );
  next.type = "button";
  next.setAttribute("aria-label", "Next image");

  stage.append(previous, image, next);

  const footer = makeElement("div", "gallery-footer");
  const caption = makeElement("p", "gallery-caption");
  const counter = makeElement("span", "gallery-counter");

  footer.append(caption, counter);
  panel.append(header, stage, footer);
  overlay.appendChild(panel);
  document.body.appendChild(overlay);

  elements.gallery = overlay;
  elements.galleryImage = image;
  elements.galleryHeading = heading;
  elements.galleryCaption = caption;
  elements.galleryCounter = counter;
  elements.galleryPrevious = previous;
  elements.galleryNext = next;
  elements.galleryClose = close;

  close.addEventListener("click", closeGallery);
  previous.addEventListener("click", () => moveGallery(-1));
  next.addEventListener("click", () => moveGallery(1));

  overlay.addEventListener("click", event => {
    if (event.target === overlay) closeGallery();
  });
}

function openGallery(product, colour) {
  const images = getProductImages(product, colour);
  if (!images.length) return;

  galleryPreviousFocus = document.activeElement;
  galleryProduct = product;
  galleryColour = colour;
  galleryIndex = 0;

  elements.gallery.hidden = false;
  document.body.classList.add("gallery-open");

  renderGallery();
  elements.galleryClose.focus();
}

function renderGallery() {
  if (!galleryProduct) return;

  const images = getProductImages(
    galleryProduct, galleryColour
  );
  const selected = images[galleryIndex];

  if (!selected) return;

  elements.galleryHeading.textContent =
    galleryProduct.name;

  elements.galleryImage.src = selected.src;
  elements.galleryImage.alt =
    `${galleryProduct.name} — ${selected.label || galleryColour}`;

  elements.galleryCaption.textContent =
    selected.label || galleryColour;

  elements.galleryCounter.textContent =
    `${galleryIndex + 1} of ${images.length}`;

  const multiple = images.length > 1;
  elements.galleryPrevious.hidden = !multiple;
  elements.galleryNext.hidden = !multiple;
  elements.galleryCounter.hidden = !multiple;
}

function moveGallery(direction) {
  if (!galleryProduct) return;

  const images = getProductImages(
    galleryProduct, galleryColour
  );

  galleryIndex = (
    galleryIndex + direction + images.length
  ) % images.length;

  renderGallery();
}

function closeGallery() {
  if (!elements.gallery || elements.gallery.hidden) return;

  elements.gallery.hidden = true;
  document.body.classList.remove("gallery-open");

  galleryProduct = null;
  galleryColour = null;

  if (galleryPreviousFocus?.focus) {
    galleryPreviousFocus.focus();
  }
}

/* 11. CART MANAGEMENT */

function getTotalQuantity() {
  return cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => {
    const product = getProduct(item.productId);

    return sum + (
      product && product.price !== null
        ? product.price * item.quantity
        : 0
    );
  }, 0);
}

function hasUnpricedItems() {
  return cart.some(item => {
    const product = getProduct(item.productId);
    return product && product.price === null;
  });
}

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
    cart.push({...item});
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
    cart[index].quantity = Math.min(
      999, cart[index].quantity
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

function renderCart() {
  if (!elements.cartItems) return;

  elements.cartItems.replaceChildren();

  if (!cart.length) {
    elements.cartItems.appendChild(makeElement(
      "p", "empty-cart", "Your request is empty."
    ));
  }

  cart.forEach((item, index) => {
    const product = getProduct(item.productId);
    if (!product) return;

    const row = makeElement("div", "cart-item");
    const info = makeElement("div");

    const title = makeElement(
      "p", "cart-item-title", product.name
    );

    const meta = makeElement(
      "p",
      "cart-item-meta",
      `${item.colour} | Size ${item.size}`
    );

    const price = makeElement(
      "p",
      "cart-item-meta",
      product.price === null
        ? "Price to be confirmed"
        : `${formatPrice(product.price)} each`
    );

    const remove = makeElement(
      "button", "remove-item", "Remove"
    );
    remove.type = "button";
    remove.addEventListener("click", () => {
      removeFromCart(index);
    });

    info.append(title, meta, price, remove);

    const controls = makeElement(
      "div", "cart-item-controls"
    );

    function quantityButton(symbol, delta, label) {
      const button = makeElement(
        "button", "quantity-button", symbol
      );
      button.type = "button";
      button.setAttribute(
        "aria-label",
        `${label} ${product.name}, ${item.colour}, ${item.size}`
      );

      button.addEventListener("click", () => {
        changeQuantity(index, delta);
      });

      return button;
    }

    const count = makeElement(
      "span",
      "cart-item-quantity",
      String(item.quantity)
    );

    controls.append(
      quantityButton("−", -1, "Decrease"),
      count,
      quantityButton("+", 1, "Increase")
    );

    row.append(info, controls);
    elements.cartItems.appendChild(row);
  });

  const total = getTotalQuantity();
  elements.cartCount.textContent = total;
  elements.cartTotal.textContent = total;

  let summary = document.getElementById(
    "cart-price-summary"
  );

  if (!summary) {
    summary = makeElement(
      "div", "cart-price-summary"
    );
    summary.id = "cart-price-summary";

    document.querySelector(".cart-summary")
      ?.insertAdjacentElement("afterend", summary);
  }

  summary.textContent = !cart.length
    ? ""
    : hasUnpricedItems()
      ? `Priced items subtotal: ${formatPrice(getCartSubtotal())}. Other items require a quote.`
      : `Estimated subtotal: ${formatPrice(getCartSubtotal())}, before tax.`;
}

/* 12. CART STORAGE */

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
    const saved = JSON.parse(
      localStorage.getItem(CONFIG.storageKey) || "[]"
    );

    if (!Array.isArray(saved)) return;

    cart = saved.filter(item => {
      const product = getProduct(item.productId);

      const validColour = product && (
        product.colourImages
          ? product.colours.includes(item.colour)
          : product.colour === item.colour
      );

      return (
        product &&
        validColour &&
        product.sizes.includes(item.size) &&
        Number.isInteger(item.quantity) &&
        item.quantity >= 1 &&
        item.quantity <= 999
      );
    });
  } catch (error) {
    cart = [];
  }
}

/* 13. CART PANEL */

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

  if (previousFocus?.focus) previousFocus.focus();
}

/* 14. CUSTOMER INFORMATION */

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

function showFeedback(message) {
  if (elements.feedback) {
    elements.feedback.textContent = message;
  }
}

function validateRequest() {
  if (!cart.length) {
    showFeedback("Please add at least one item.");
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

/* 15. ITEMIZED EMAIL */

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
      `   Line total: ${
        product.price === null
          ? "To be confirmed"
          : formatPrice(product.price * item.quantity)
      }`,
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
      "Some items require a separate price quote.",
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
    showFeedback(
      "Please configure the receiving email address."
    );
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
    showFeedback(
      "Request copied. Paste it into an email and send."
    );
  } catch (error) {
    showFeedback(
      "Copying was unavailable. Please use Email My Request."
    );
  }
}

/* 16. EVENTS AND ACCESSIBILITY */

function setupEvents() {
  elements.openCart.addEventListener("click", openCart);
  elements.closeCart.addEventListener("click", closeCart);
  elements.cartOverlay.addEventListener("click", closeCart);
  elements.requestForm.addEventListener("submit", emailRequest);
  elements.copyRequest.addEventListener("click", copyRequest);

  document.addEventListener("keydown", event => {
    if (elements.gallery && !elements.gallery.hidden) {
      if (event.key === "Escape") {
        closeGallery();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveGallery(-1);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        moveGallery(1);
        return;
      }

      if (event.key === "Tab") {
        trapFocus(elements.gallery, event);
      }

      return;
    }

    if (elements.cartPanel.classList.contains("is-open")) {
      if (event.key === "Escape") closeCart();

      if (event.key === "Tab") {
        trapFocus(elements.cartPanel, event);
      }
    }
  });
}

function trapFocus(container, event) {
  const focusable = Array.from(
    container.querySelectorAll(
      'button:not([disabled]):not([hidden]), ' +
      'input:not([disabled]), ' +
      'select:not([disabled]), ' +
      'textarea:not([disabled]), a[href]'
    )
  ).filter(el => el.getClientRects().length);

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
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
