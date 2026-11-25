
"use strict";

/* ==================================================
   STATISTICAL SCIENCES APPAREL CATALOGUE
   University of Toronto
   Version 10 — Integrated Microsoft Forms Checkout
   ================================================== */

/* 1. CONFIGURATION */

const CONFIG = {
  formUrl: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=JsKqeAMvTUuQN7RtVsVSECpVX7P7Zc5FgKM5nX6wJ7ZUNTM5VjRWQkY0V05IU1c3OUE1NDFZVTZHQy4u",

  formFields: {
    name: "rc2a924844cd3494990f703267a903efd",
    email: "r0341de33c5b9455d99a82518ea8aeb24",
    order: "rebd52696c4cb4f62bbf7b75d569e6ece"
  },

  storageKey: "statsci-apparel-cart-v5",
  splashDuration: 2600,
  maxFormUrlLength: 7500
};

/* 2. SWEATSHIRT IMAGES */

const SWEATER_IMAGES = {
  "Navy": "images/quarterzip-navy.webp",
  "White": "images/quarterzip-white.webp",
  "Charcoal": "images/quarterzip-charcoal.webp",
  "Maroon": "images/quarterzip-maroon.webp",
  "Black": "images/quarterzip-black.webp",
  "Sports Grey": "images/quarterzip-sports-grey.webp"
};

/* 3. COLOUR PALETTE */

const COLOUR_HEX = {
  "Navy": "#182946",
  "Navy Blue": "#182946",
  "Classic Navy": "#182946",
  "Vintage Navy": "#182946",
  "Collegiate Navy": "#233248",
  "Team Navy Blue": "#25385c",
  "Dark Navy": "#080b30",
  "White": "#ffffff",
  "Charcoal": "#394852",
  "Maroon": "#800019",
  "Black": "#171717",
  "Sports Grey": "#a5a5a5",
  "Pure Slate": "#717171",
  "Royal Blue": "#194781",
  "Red": "#d32130",
  "Grey Five": "#505050",
  "Platinum Grey": "#b4bec8",
  "Concrete": "#b6b6b6",
  "Elemental Grey": "#6e7174",
  "Tour Blue": "#16366c"
};

/* 4. SIZE GROUPS */

const SIZE = {
  standard: ["S","M","L","XL","2XL","3XL"],
  xs3: ["XS","S","M","L","XL","2XL","3XL"],
  s4: ["S","M","L","XL","2XL","3XL","4XL"],
  s5: ["S","M","L","XL","2XL","3XL","4XL","5XL"],
  xs4: ["XS","S","M","L","XL","2XL","3XL","4XL"],
  xs5: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"]
};

/* ==================================================
   5. COMPLETE PRODUCT CATALOGUE
   ================================================== */

const PRODUCTS = [

  /* SWEATSHIRTS */

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
    sizes: SIZE.xs3,
    sizeStatus: "provisional"
  },

  /* JACKETS */

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
    description: "Insulated jacket with Omni-Heat lining and zippered pockets.",
    price: 182.05,
    image: "images/columbia-powder-women.webp",
    colour: "Black",
    sizes: SIZE.xs3
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
    sizes: SIZE.xs3
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
    sizes: SIZE.xs4
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
    sizes: SIZE.xs5
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
    sizes: SIZE.xs5
  },
  {
    id: "karmine-men",
    sku: "12937",
    category: "Jackets",
    name: "Trimark Men's KARMINE Softshell Jacket",
    description: "Lightweight stretch softshell with waterproof breathable membrane and snap-closure pockets.",
    price: 59.95,
    image: "images/karmine-men.webp",
    colour: "Classic Navy",
    sizes: SIZE.s5
  },
  {
    id: "karmine-women",
    sku: "92937",
    category: "Jackets",
    name: "Trimark Women's KARMINE Softshell Jacket",
    description: "Lightweight softshell with shaped seams and water-repellent finish.",
    price: 59.95,
    image: "images/karmine-women.webp",
    colour: "Vintage Navy",
    sizes: SIZE.xs3
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
    sizes: SIZE.xs5
  },
  {
    id: "okapi-women",
    sku: "98117",
    category: "Jackets",
    name: "Trimark Women's OKAPI Knit Jacket",
    description: "Full-zip knit jacket with brushed backing and shaped seams.",
    price: 56.95,
    image: "images/okapi-women.webp",
    colour: "Navy",
    sizes: SIZE.xs3
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
    sizes: SIZE.xs5
  },
  {
    id: "clique-summit-women",
    sku: "LQO00019",
    category: "Jackets",
    name: "Clique Summit Performance Fleece Women's Full-Zip Jacket",
    description: "Microfleece jacket with full zipper, mock neck and secure pockets.",
    price: 49.75,
    image: "images/clique-summit-women.webp",
    colour: "Navy",
    sizes: SIZE.xs3
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
    description: "Insulated softshell with water-resistant exterior and adjustable hood.",
    price: 90,
    image: "images/clique-equinox-women.webp",
    colour: "Dark Navy",
    sizes: SIZE.xs3
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
    description: "Recycled stretch softshell with bonded microfleece lining and zippered pockets.",
    price: 59,
    image: "images/clique-trail-women.webp",
    colour: "Dark Navy",
    sizes: SIZE.xs3
  },

  /* VESTS */

  {
    id: "clique-elevation-vest",
    sku: "MQO00080",
    category: "Vests",
    name: "Clique Elevation Recycled Insulated Puffer Vest",
    description: "Lightweight channel-quilted puffer vest with a recycled polyester water-repellent shell, secure pockets and adjustable waist drawcord.",
    price: 60,
    image: "images/clique-elevation-vest.webp",
    colours: ["Pure Slate","Black","Dark Navy","Royal Blue","Red"],
    sizes: SIZE.xs5
  },
  {
    id: "clique-valhalla-vest",
    sku: "MQO00082",
    category: "Vests",
    name: "Clique Valhalla Recycled Insulated Puffer Vest",
    description: "Channel-quilted insulated vest with a recycled ripstop nylon shell, water-repellent finish, contrast zipper and secure pockets.",
    price: 66.65,
    image: "images/clique-valhalla-vest.webp",
    colours: ["Pure Slate","Black","Dark Navy","Royal Blue","Red"],
    sizes: SIZE.xs5
  },
  {
    id: "adidas-puffer-vest",
    sku: "A572",
    category: "Vests",
    name: "Adidas Puffer Full-Zip Vest",
    description: "Insulated full-zip vest constructed from recycled polyester with baffle construction, three-stripe detailing and Adidas collar branding.",
    price: 98.30,
    image: "images/adidas-puffer-vest.webp",
    colours: ["Black","Grey Five","Team Navy Blue"],
    sizes: SIZE.s4
  },
  {
    id: "columbia-powder-vest",
    sku: "212491",
    category: "Vests",
    name: "Columbia Powder Lite II Vest",
    description: "Insulated vest featuring Omni-Heat thermal-reflective lining, Thermarator insulation, Omni-Shield water and stain resistance, zippered pockets and adjustable hem.",
    price: 141.05,
    image: "images/columbia-powder-vest.webp",
    colours: ["Black","Collegiate Navy"],
    sizes: SIZE.standard
  },
  {
    id: "spyder-pelmo-vest",
    sku: "S16642",
    category: "Vests",
    name: "Spyder Pelmo Puffer Vest",
    description: "Modern-fit polyester puffer vest with a detachable adjustable hood and zippered handwarmer pockets.",
    price: 148.30,
    image: "images/spyder-pelmo-vest.webp",
    colours: ["Black"],
    sizes: ["S","3XL"],
    sizeNote: "Only S and 3XL are listed in the supplier quotation. Additional sizes require confirmation."
  },
  {
    id: "dryframe-drytech-vest",
    sku: "DF7673",
    category: "Vests",
    name: "DryFrame Dry Tech Insulated Vest",
    description: "Wind- and water-resistant insulated vest with polyester exterior, Sorona insulation, YKK zippers, reflective detailing and zippered pockets.",
    price: 149.95,
    image: "images/dryframe-drytech-vest.webp",
    colours: ["Black","Platinum Grey"],
    sizes: SIZE.xs4
  },
  {
    id: "cutter-buck-evoke-vest",
    sku: "MCO00076",
    category: "Vests",
    name: "Cutter & Buck Evoke Recycled Honeycomb Fleece Hybrid Vest",
    description: "Versatile hybrid vest featuring recycled polyester honeycomb softshell, PrimaLoft insulation, fleece interior, water-resistant finish and secure zippered pockets.",
    price: 166.65,
    image: "images/cutter-buck-evoke-vest.webp",
    colours: ["Concrete","Elemental Grey","Black","Navy Blue","Tour Blue"],
    sizes: SIZE.xs5
  }
];

/* ==================================================
   6. APPLICATION STATE
   ================================================== */

let cart = [];
let previousFocus = null;

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
    splash: "splash-screen",
    gallery: "product-gallery",
    galleryImage: "gallery-image",
    galleryHeading: "gallery-title",
    galleryCaption: "gallery-caption",
    galleryCounter: "gallery-counter",
    galleryPrevious: "gallery-previous",
    galleryNext: "gallery-next",
    checkout: "checkout-modal",
    checkoutFrame: "checkout-frame",
    checkoutFallback: "checkout-fallback"
  };

  Object.entries(ids).forEach(([key,id]) => {
    elements[key] = document.getElementById(id);
  });

  setupSplash();
  loadCart();
  renderProducts();
  renderCart();
  setupEvents();

  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();
}

/* 7. SPLASH SCREEN */

function setupSplash() {
  if (!elements.splash) return;

  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.setTimeout(
    () => elements.splash?.remove(),
    reduced ? 250 : CONFIG.splashDuration
  );
}

/* 8. HELPERS */

function makeElement(tag, className = "", text) {
  const el = document.createElement(tag);

  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;

  return el;
}

function getProduct(id) {
  return PRODUCTS.find(product => product.id === id);
}

function getAvailableColours(product) {
  return Array.isArray(product.colours)
    ? product.colours
    : [product.colour];
}

function getProductImages(product, colour) {
  if (product.colourImages) {
    const selected = product.colourImages[colour]
      ? colour
      : product.colours[0];

    return [{
      src: product.colourImages[selected],
      label: selected
    }];
  }

  if (Array.isArray(product.images) && product.images.length) {
    return product.images.filter(image => image.src);
  }

  return product.image
    ? [{
        src: product.image,
        label: product.category === "Vests"
          ? "Representative product image"
          : product.colour
      }]
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

function createSelectGroup(labelText, id, values) {
  const group = makeElement("div", "option-group");
  const label = makeElement("label", "", labelText);

  label.htmlFor = id;

  const select = document.createElement("select");
  select.id = id;

  values.forEach(value => {
    select.add(new Option(value,value));
  });

  group.append(label,select);

  return {group,select};
}

/* ==================================================
   9. PRODUCT CATALOGUE
   ================================================== */

function renderProducts() {
  elements.productGrid.replaceChildren();

  ["Sweatshirts","Jackets","Vests"].forEach(category => {
    const products = PRODUCTS
      .filter(product => product.category === category)
      .sort((a,b) =>
        (a.price ?? Infinity) - (b.price ?? Infinity)
      );

    if (!products.length) return;

    const heading = makeElement(
      "h3", "catalogue-category", category
    );

    heading.id = `category-${category.toLowerCase()}`;

    elements.productGrid.appendChild(heading);

    products.forEach(product => {
      elements.productGrid.appendChild(
        createProductCard(product)
      );
    });

    const count = document.querySelector(
      `[data-category-count="${category}"]`
    );

    if (count) {
      count.textContent = `(${products.length})`;
    }
  });
}

/* ==================================================
   10. PRODUCT CARDS
   ================================================== */

function createProductCard(product) {
  const card = makeElement("article", "product-card");
  const imageBox = makeElement("div", "product-image");
  const details = makeElement("div", "product-details");

  const colours = getAvailableColours(product);
  const isVest = product.category === "Vests";

  let selectedColour = colours[0];

  const imageButton = makeElement(
    "button", "product-image-button"
  );

  imageButton.type = "button";
  imageButton.title = "Click to enlarge image";

  imageButton.setAttribute(
    "aria-label",
    `Enlarge image of ${product.name}`
  );

  function updateImage() {
    const images = getProductImages(
      product, selectedColour
    );

    const src = images[0]?.src;

    imageButton.replaceChildren();
    imageButton.disabled = !src;

    if (!src) {
      imageButton.appendChild(makeElement(
        "div", "product-placeholder", product.name
      ));
      return;
    }

    const image = document.createElement("img");

    image.loading = "lazy";
    image.alt = isVest
      ? `${product.name} — representative image`
      : `${product.name} — ${selectedColour}`;

    const zoom = makeElement(
      "span", "product-zoom-label", "View larger"
    );

    zoom.setAttribute("aria-hidden","true");

    image.onerror = () => {
      if (!imageButton.contains(image)) return;

      imageButton.replaceChildren(makeElement(
        "div", "product-placeholder", product.name
      ));

      imageButton.disabled = true;
    };

    imageButton.append(image,zoom);
    image.src = src;
  }

  imageButton.addEventListener("click", () => {
    openGallery(product,selectedColour);
  });

  imageBox.appendChild(imageButton);
  updateImage();

  const title = makeElement(
    "h4", "product-title", product.name
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
      : "Estimated supplier price, before tax. Subject to confirmation."
  );

  const options = makeElement("div","product-options");

  /* COLOUR OPTIONS */

  if (colours.length > 1) {
    const colourGroup = createSelectGroup(
      "Colour",
      `colour-${product.id}`,
      colours
    );

    const swatchRow = makeElement(
      "div", "product-swatch-row"
    );

    const swatch = makeElement(
      "span", "product-colour-swatch"
    );

    swatch.setAttribute("aria-hidden","true");

    const colourName = makeElement(
      "span", "product-colour-name"
    );

    function updateSwatch() {
      swatch.style.backgroundColor =
        COLOUR_HEX[selectedColour] || "#cccccc";

      colourName.textContent = selectedColour;
    }

    colourGroup.select.addEventListener("change", () => {
      selectedColour = colourGroup.select.value;

      updateSwatch();

      if (product.colourImages) {
        updateImage();
      }
    });

    updateSwatch();

    swatchRow.append(swatch,colourName);
    colourGroup.group.appendChild(swatchRow);

    if (isVest) {
      colourGroup.group.appendChild(makeElement(
        "p",
        "representative-note",
        "Product image is representative and does not change with colour selection."
      ));
    }

    options.appendChild(colourGroup.group);

  } else {
    const colourGroup = makeElement(
      "div", "option-group"
    );

    const label = makeElement(
      "span", "option-label", "Colour"
    );

    const fixedColour = makeElement(
      "p", "product-fixed-colour", selectedColour
    );

    colourGroup.append(label,fixedColour);
    options.appendChild(colourGroup);
  }

  /* SIZE OPTIONS */

  const sizeGroup = createSelectGroup(
    "Size",
    `size-${product.id}`,
    product.sizes
  );

  options.appendChild(sizeGroup.group);

  /* QUANTITY */

  const quantityGroup = makeElement(
    "div", "option-group"
  );

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

  quantityGroup.append(quantityLabel,quantityInput);
  options.appendChild(quantityGroup);

  /* ADD TO REQUEST */

  const button = makeElement(
    "button",
    "button button-primary",
    "Add to Request"
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
    title,
    sku,
    description,
    price,
    priceNote,
    options
  );

  if (product.sizeStatus === "provisional") {
    details.appendChild(makeElement(
      "p",
      "representative-note",
      "Size availability to be confirmed."
    ));
  }

  if (product.sizeNote) {
    details.appendChild(makeElement(
      "p",
      "representative-note",
      product.sizeNote
    ));
  }

  details.appendChild(button);
  card.append(imageBox,details);

  return card;
}

/* ==================================================
   11. FULL-SCREEN PRODUCT IMAGE VIEWER
   ================================================== */

function openGallery(product, colour) {
  const images = getProductImages(product,colour);

  if (!images.length) return;

  galleryProduct = product;
  galleryColour = colour;
  galleryIndex = 0;

  renderGallery();

  elements.gallery.showModal();

  document.body.classList.add("gallery-open");
}

function renderGallery() {
  if (!galleryProduct) return;

  const images = getProductImages(
    galleryProduct,galleryColour
  );

  const selected = images[galleryIndex];

  if (!selected) return;

  elements.galleryHeading.textContent =
    galleryProduct.name;

  elements.galleryImage.alt =
    `${galleryProduct.name} — ${selected.label || "Product view"}`;

  elements.galleryCaption.textContent =
    galleryProduct.category === "Vests"
      ? "Representative product image. Selected colour may differ."
      : selected.label || galleryColour;

  elements.galleryImage.src = selected.src;

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
    galleryProduct,galleryColour
  );

  if (images.length < 2) return;

  galleryIndex = (
    galleryIndex + direction + images.length
  ) % images.length;

  renderGallery();
}

function closeGallery() {
  if (elements.gallery.open) {
    elements.gallery.close();
  }
}

/* ==================================================
   12. CART MANAGEMENT
   ================================================== */

function getTotalQuantity() {
  return cart.reduce(
    (sum,item) => sum + item.quantity,
    0
  );
}

function getCartSubtotal() {
  const cents = cart.reduce((sum,item) => {
    const product = getProduct(item.productId);

    if (!product || product.price === null) {
      return sum;
    }

    return sum +
      Math.round(product.price * 100) * item.quantity;

  },0);

  return cents / 100;
}

function hasUnpricedItems() {
  return cart.some(item =>
    getProduct(item.productId)?.price === null
  );
}

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
    cart.push({...item});
  }

  saveCart();
  renderCart();
}

function changeQuantity(index,delta) {
  if (!cart[index]) return;

  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index,1);
  } else {
    cart[index].quantity = Math.min(
      999,cart[index].quantity
    );
  }

  saveCart();
  renderCart();

  restoreCartControlFocus(index,delta > 0 ? 1 : 0);
}

function removeFromCart(index) {
  cart.splice(index,1);

  saveCart();
  renderCart();

  const removeButtons = elements.cartItems
    .querySelectorAll(".remove-item");

  const next = removeButtons[
    Math.min(index,removeButtons.length - 1)
  ];

  (next || elements.closeCart).focus();
}

function restoreCartControlFocus(index,buttonIndex) {
  const rows = elements.cartItems
    .querySelectorAll(".cart-item");

  const row = rows[Math.min(index,rows.length - 1)];

  const button = row?.querySelectorAll(
    ".quantity-button"
  )[buttonIndex];

  (button || elements.closeCart).focus();
}

function renderCart() {
  elements.cartItems.replaceChildren();

  if (!cart.length) {
    elements.cartItems.appendChild(makeElement(
      "p",
      "empty-cart",
      "Your request is empty. Browse the catalogue to add apparel."
    ));
  }

  cart.forEach((item,index) => {
    const product = getProduct(item.productId);

    if (!product) return;

    const row = makeElement("div","cart-item");
    const info = makeElement("div");

    const title = makeElement(
      "p","cart-item-title",product.name
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
      "button","remove-item","Remove"
    );

    remove.type = "button";

    remove.addEventListener("click",() => {
      removeFromCart(index);
    });

    info.append(title,meta,price,remove);

    const controls = makeElement(
      "div","cart-item-controls"
    );

    function quantityButton(symbol,delta,label) {
      const button = makeElement(
        "button","quantity-button",symbol
      );

      button.type = "button";

      button.setAttribute(
        "aria-label",
        `${label} ${product.name}, ${item.colour}, ${item.size}`
      );

      button.addEventListener("click",() => {
        changeQuantity(index,delta);
      });

      return button;
    }

    const count = makeElement(
      "span",
      "cart-item-quantity",
      String(item.quantity)
    );

    controls.append(
      quantityButton("−",-1,"Decrease"),
      count,
      quantityButton("+",1,"Increase")
    );

    row.append(info,controls);
    elements.cartItems.appendChild(row);
  });

  const total = getTotalQuantity();

  elements.cartCount.textContent = total;
  elements.cartTotal.textContent = total;

  document.getElementById("clear-cart").hidden =
    !cart.length;
}

/* ==================================================
   13. CART STORAGE
   ================================================== */

function saveCart() {
  try {
    localStorage.setItem(
      CONFIG.storageKey,
      JSON.stringify(cart)
    );
  } catch (error) {
    console.warn("Cart storage unavailable.",error);
  }
}

function loadCart() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(CONFIG.storageKey) || "[]"
    );

    if (!Array.isArray(saved)) return;

    cart = saved.filter(item => {
      if (!item) return false;

      const product = getProduct(item.productId);

      return (
        product &&
        getAvailableColours(product).includes(item.colour) &&
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

function clearCart() {
  if (!cart.length) return;

  if (!window.confirm(
    "Remove all items from your apparel request?"
  )) return;

  cart = [];

  saveCart();
  renderCart();

  showFeedback("Your request has been cleared.");

  elements.closeCart.focus();
}

/* ==================================================
   14. CART PANEL
   ================================================== */

function setPageInert(value) {
  [
    document.querySelector(".site-header"),
    document.querySelector("main"),
    document.querySelector(".site-footer")
  ].forEach(element => {
    if (element) element.inert = value;
  });
}

function openCart() {
  if (elements.cartPanel.classList.contains("is-open")) {
    return;
  }

  previousFocus = document.activeElement;

  elements.cartOverlay.hidden = false;

  elements.cartPanel.classList.add("is-open");

  elements.cartPanel.inert = false;

  elements.cartPanel.setAttribute(
    "aria-hidden","false"
  );

  elements.openCart.setAttribute(
    "aria-expanded","true"
  );

  setPageInert(true);

  document.body.classList.add("cart-open");

  elements.closeCart.focus();
}

function closeCart() {
  if (!elements.cartPanel.classList.contains("is-open")) {
    return;
  }

  elements.cartPanel.classList.remove("is-open");

  elements.openCart.setAttribute(
    "aria-expanded","false"
  );

  elements.cartOverlay.hidden = true;

  document.body.classList.remove("cart-open");

  setPageInert(false);

  if (previousFocus?.focus) {
    previousFocus.focus();
  }

  elements.cartPanel.inert = true;

  elements.cartPanel.setAttribute(
    "aria-hidden","true"
  );
}

/* ==================================================
   15. CUSTOMER INFORMATION
   ================================================== */

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
  elements.feedback.textContent = message;
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

  if (!getCustomerInformation().name) {
    showFeedback("Please enter your full name.");
    document.getElementById("customer-name").focus();
    return false;
  }

  return true;
}

/* ==================================================
   16. GENERATE ITEMIZED REQUEST
   ================================================== */

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

  cart.forEach((item,index) => {
    const product = getProduct(item.productId);

    if (!product) return;

    lines.push(
      `${index + 1}. ${product.name}`,
      `   Category: ${product.category}`,
      `   Item #: ${product.sku}`,
      `   Colour: ${item.colour}`,
      `   Size: ${item.size}`,
      `   Quantity: ${item.quantity}`,
      `   Unit price: ${formatPrice(product.price)}`,
      ""
    );
  });

  lines.push(
    "----------------------------------------",
    `TOTAL ITEMS: ${getTotalQuantity()}`,
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
    "All prices are supplier estimates in CAD.",
    "Taxes are additional.",
    "Final pricing and availability require confirmation.",
    "",
    "This request does not constitute a purchase",
    "or commitment to buy."
  );

  return lines.join("\n");
}

/* ==================================================
   17. MICROSOFT FORMS INTEGRATION
   ================================================== */

function buildFormUrl(includeOrder = true) {
  const customer = getCustomerInformation();

  const url = new URL(CONFIG.formUrl);

  url.searchParams.set(
    CONFIG.formFields.name,
    customer.name
  );

  url.searchParams.set(
    CONFIG.formFields.email,
    customer.email
  );

  if (includeOrder) {
    url.searchParams.set(
      CONFIG.formFields.order,
      generateRequestText()
    );
  }

  return url.toString();
}

function submitRequest(event) {
  event.preventDefault();

  if (!validateRequest()) return;

  const formUrl = buildFormUrl();

  if (formUrl.length > CONFIG.maxFormUrlLength) {
    showFeedback(
      "Your request is too long to prefill automatically. " +
      "Use Copy Request Details to complete the form manually."
    );

    return;
  }

  openCheckoutModal(formUrl);
}

/* ==================================================
   18. EMBEDDED CHECKOUT MODAL
   ================================================== */

function openCheckoutModal(formUrl) {
  if (elements.checkout.open) return;

  const embeddedUrl = new URL(formUrl);

  embeddedUrl.searchParams.set("embed","true");

  elements.checkoutFallback.href = formUrl;

  elements.checkout.showModal();

  document.body.classList.add("checkout-open");

  elements.checkoutFrame.src = embeddedUrl.toString();

  showFeedback(
    "Review your information in Microsoft Forms and click Submit."
  );
}

function closeCheckoutModal() {
  if (elements.checkout.open) {
    elements.checkout.close();
  }
}

/* ==================================================
   19. COPY REQUEST FALLBACK
   ================================================== */

async function copyRequest() {
  if (!validateRequest()) return;

  const text = generateRequestText();

  document.getElementById(
    "request-copy-fallback"
  )?.remove();

  document.getElementById(
    "manual-form-link"
  )?.remove();

  try {
    await navigator.clipboard.writeText(text);

    showFeedback(
      "Request copied. Paste it into the Complete Apparel Request field in Microsoft Forms."
    );

  } catch (error) {
    const fallback = makeElement(
      "textarea",
      "request-copy-fallback"
    );

    fallback.id = "request-copy-fallback";
    fallback.value = text;
    fallback.readOnly = true;
    fallback.rows = 12;

    fallback.setAttribute(
      "aria-label","Complete apparel request to copy"
    );

    elements.feedback.after(fallback);

    fallback.focus();
    fallback.select();

    showFeedback(
      "Automatic copying was unavailable. Copy the selected request details manually."
    );
  }

  const link = makeElement(
    "a",
    "button button-outline manual-form-link",
    "Open Microsoft Forms"
  );

  link.id = "manual-form-link";
  link.href = buildFormUrl(false);
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const fallback = document.getElementById(
    "request-copy-fallback"
  );

  (fallback || elements.feedback).after(link);
}

/* ==================================================
   20. EVENTS AND ACCESSIBILITY
   ================================================== */

function setupEvents() {
  elements.openCart.addEventListener(
    "click",openCart
  );

  elements.closeCart.addEventListener(
    "click",closeCart
  );

  elements.cartOverlay.addEventListener(
    "click",closeCart
  );

  elements.requestForm.addEventListener(
    "submit",submitRequest
  );

  elements.copyRequest.addEventListener(
    "click",copyRequest
  );

  document.getElementById("clear-cart")
    .addEventListener("click",clearCart);

  /* PRODUCT GALLERY */

  document.getElementById("gallery-close")
    .addEventListener("click",closeGallery);

  elements.galleryPrevious.addEventListener(
    "click",() => moveGallery(-1)
  );

  elements.galleryNext.addEventListener(
    "click",() => moveGallery(1)
  );

  elements.gallery.addEventListener("close",() => {
    document.body.classList.remove("gallery-open");

    galleryProduct = null;
    galleryColour = null;

    elements.galleryImage.removeAttribute("src");
  });

  elements.gallery.addEventListener("click",event => {
    if (event.target === elements.gallery) {
      const rect = elements.gallery.getBoundingClientRect();

      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        closeGallery();
      }
    }
  });

  elements.galleryImage.addEventListener("error",() => {
    elements.galleryCaption.textContent =
      "Product image is currently unavailable.";
  });

  /* CHECKOUT MODAL */

  document.getElementById("checkout-close")
    .addEventListener("click",closeCheckoutModal);

  elements.checkout.addEventListener("close",() => {
    document.body.classList.remove("checkout-open");

    elements.checkoutFrame.src = "about:blank";

    elements.checkoutFallback.href = CONFIG.formUrl;

    showFeedback(
      "If you submitted your request, look for the confirmation email. " +
      "Your cart has been retained. You can clear it when you are finished."
    );
  });

  /* KEYBOARD NAVIGATION */

  document.addEventListener("keydown",event => {
    if (elements.checkout.open) return;

    if (elements.gallery.open) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveGallery(-1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        moveGallery(1);
      }

      return;
    }

    if (!elements.cartPanel.classList.contains("is-open")) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeCart();
    }

    if (event.key === "Tab") {
      trapFocus(elements.cartPanel,event);
    }
  });
}

function trapFocus(container,event) {
  const focusable = Array.from(
    container.querySelectorAll(
      'button:not([disabled]):not([hidden]), ' +
      'input:not([disabled]), ' +
      'select:not([disabled]), ' +
      'textarea:not([disabled]), a[href]'
    )
  ).filter(el =>
    el.getClientRects().length &&
    !el.closest("[hidden]")
  );

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (!container.contains(document.activeElement)) {
    event.preventDefault();

    (event.shiftKey ? last : first).focus();
    return;
  }

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
