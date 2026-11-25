
"use strict";

/* ============================================
   STATISTICAL SCIENCES APPAREL CATALOGUE
   University of Toronto
   Version 6 — Sweatshirts, Jackets and Vests
   ============================================ */

/* 1. CONFIGURATION */

const CONFIG = {
  recipientEmail: "REPLACE_WITH_YOUR_EMAIL@utoronto.ca",
  emailSubject: "Statistical Sciences Apparel Request",
  storageKey: "statsci-apparel-cart-v5",
  splashDuration: 2600
};

/* IMPORTANT:
   Retain your actual receiving email address
   when replacing this file.
*/

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

/* ============================================
   5. COMPLETE PRODUCT CATALOGUE
   ============================================ */

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
    description: "Insulated softshell with water-resistant exterior, adjustable hood and secure pockets.",
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

  /* ==========================================
     VESTS
     All supplier-listed colours are selectable.
     Product images remain unchanged.
     ========================================== */

  {
    id: "clique-elevation-vest",
    sku: "MQO00080",
    category: "Vests",
    name: "Clique Elevation Recycled Insulated Puffer Vest",
    description: "Lightweight channel-quilted puffer vest with a recycled polyester water-repellent shell, secure hand and inside chest pockets, and adjustable waist drawcord.",
    price: 60,
    image: "images/clique-elevation-vest.webp",
    colours: [
      "Pure Slate",
      "Black",
      "Dark Navy",
      "Royal Blue",
      "Red"
    ],
    sizes: SIZE.xs5
  },
  {
    id: "clique-valhalla-vest",
    sku: "MQO00082",
    category: "Vests",
    name: "Clique Valhalla Recycled Insulated Puffer Vest",
    description: "Channel-quilted insulated vest with a recycled ripstop nylon shell, water-repellent finish, contrast zipper and secure zippered hand and chest pockets.",
    price: 66.65,
    image: "images/clique-valhalla-vest.webp",
    colours: [
      "Pure Slate",
      "Black",
      "Dark Navy",
      "Royal Blue",
      "Red"
    ],
    sizes: SIZE.xs5
  },
  {
    id: "adidas-puffer-vest",
    sku: "A572",
    category: "Vests",
    name: "Adidas Puffer Full-Zip Vest",
    description: "Insulated full-zip vest constructed from recycled polyester with baffle construction, signature three-stripe detailing on the back and Adidas branding on the collar.",
    price: 98.30,
    image: "images/adidas-puffer-vest.webp",
    colours: [
      "Black",
      "Grey Five",
      "Team Navy Blue"
    ],
    sizes: SIZE.s4
  },
  {
    id: "columbia-powder-vest",
    sku: "212491",
    category: "Vests",
    name: "Columbia Powder Lite II Vest",
    description: "Insulated vest featuring Omni-Heat thermal-reflective lining, Thermarator insulation, Omni-Shield water and stain resistance, zippered pockets and an adjustable hem.",
    price: 141.05,
    image: "images/columbia-powder-vest.webp",
    colours: [
      "Black",
      "Collegiate Navy"
    ],
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
    description: "Wind- and water-resistant insulated vest with a durable polyester exterior, Sorona insulation, YKK zippers, reflective detailing and zippered hand pockets.",
    price: 149.95,
    image: "images/dryframe-drytech-vest.webp",
    colours: [
      "Black",
      "Platinum Grey"
    ],
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
    colours: [
      "Concrete",
      "Elemental Grey",
      "Black",
      "Navy Blue",
      "Tour Blue"
    ],
    sizes: SIZE.xs5
  }
];

/* ============================================
   6. APPLICATION STATE
   ============================================ */

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

  Object.entries(ids).forEach(([key,id]) => {
    elements[key] = document.getElementById(id);
  });

  loadCart();
  renderProducts();
  renderCart();
  createGallery();
  setupEvents();
  setupSplash();

  const year = document.getElementById("current-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

/* 7. SPLASH SCREEN */

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

/* 8. HELPERS */

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getAvailableColours(product) {
  return Array.isArray(product.colours)
    ? product.colours
    : [product.colour];
}

function getColour(product, selected) {
  const colours = getAvailableColours(product);

  return colours.includes(selected)
    ? selected
    : colours[0];
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

  if (!product.image) return [];

  return [{
    src: product.image,
    label: product.category === "Vests"
      ? "Representative product image"
      : product.colour || "Product view"
  }];
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

/* ============================================
   9. PRODUCT CATALOGUE
   ============================================ */

function renderProducts() {
  if (!elements.productGrid) return;

  elements.productGrid.replaceChildren();

  const categories = [
    "Sweatshirts",
    "Jackets",
    "Vests"
  ];

  categories.forEach(category => {
    const products = PRODUCTS
      .filter(p => p.category === category)
      .sort((a,b) => {
        if (a.price === null && b.price === null) return 0;
        if (a.price === null) return 1;
        if (b.price === null) return -1;

        return a.price - b.price;
      });

    if (!products.length) return;

    const heading = makeElement(
      "h3",
      "catalogue-category",
      category
    );

    heading.id = `category-${category.toLowerCase()}`;

    elements.productGrid.appendChild(heading);

    products.forEach(product => {
      elements.productGrid.appendChild(
        createProductCard(product)
      );
    });
  });
}

/* ============================================
   10. PRODUCT CARDS
   ============================================ */

function createProductCard(product) {
  const card = makeElement("article", "product-card");
  const imageBox = makeElement("div", "product-image");
  const details = makeElement("div", "product-details");

  const colours = getAvailableColours(product);
  const hasColourChoice = colours.length > 1;
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

  const image = document.createElement("img");
  image.loading = "lazy";

  const zoom = makeElement(
    "span", "product-zoom-label", "View larger"
  );

  zoom.setAttribute("aria-hidden", "true");

  const placeholder = makeElement(
    "div",
    "product-placeholder",
    product.name
  );

  function updateImage() {
    const images = getProductImages(
      product, selectedColour
    );

    const src = images[0]?.src;

    if (!src) {
      imageButton.replaceChildren(placeholder);
      imageButton.disabled = true;
      return;
    }

    imageButton.disabled = false;

    image.alt = isVest
      ? `${product.name} — representative image`
      : `${product.name} — ${selectedColour}`;

    imageButton.replaceChildren(image, zoom);

    if (image.getAttribute("src") !== src) {
      image.src = src;
    }
  }

  image.onerror = () => {
    imageButton.replaceChildren(placeholder);
    imageButton.disabled = true;
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
      : "Estimated supplier price, before tax. Subject to confirmation."
  );

  const options = makeElement("div", "product-options");

  /* COLOUR SELECTION */

  if (hasColourChoice) {
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

    swatch.setAttribute("aria-hidden", "true");

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

      /*
        Only sweatshirts have colour-specific images.
        Vests retain their representative mockup.
      */

      if (product.colourImages) {
        updateImage();
      }
    });

    updateSwatch();

    swatchRow.append(swatch, colourName);

    colourGroup.group.appendChild(swatchRow);

    if (isVest) {
      const note = makeElement(
        "p",
        "product-price-note",
        "Product image is representative and does not change with colour selection."
      );

      note.style.margin = "4px 0 0";

      colourGroup.group.appendChild(note);
    }

    options.appendChild(colourGroup.group);

  } else {
    const colourGroup = makeElement(
      "div", "option-group"
    );

    const label = makeElement(
      "span", "", "Colour"
    );

    label.style.fontSize = ".82rem";
    label.style.fontWeight = "700";

    const fixedColour = makeElement(
      "p",
      "product-fixed-colour",
      selectedColour
    );

    fixedColour.style.margin = "0";
    fixedColour.style.fontSize = ".9rem";
    fixedColour.style.fontWeight = "600";

    colourGroup.append(label, fixedColour);
    options.appendChild(colourGroup);
  }

  /* SIZE SELECTION */

  const sizeGroup = createSelectGroup(
    "Size",
    `size-${product.id}`,
    product.sizes
  );

  options.appendChild(sizeGroup.group);

  /* QUANTITY SELECTION */

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

  quantityGroup.append(quantityLabel, quantityInput);
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
      "product-price-note",
      "Size availability to be confirmed."
    ));
  }

  if (product.sizeNote) {
    details.appendChild(makeElement(
      "p",
      "product-price-note",
      product.sizeNote
    ));
  }

  details.appendChild(button);
  card.append(imageBox, details);

  return card;
}

/* ============================================
   11. FULL-SCREEN IMAGE GALLERY
   ============================================ */

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

  image.onerror = () => {
    elements.galleryCaption.textContent =
      "Product image is currently unavailable.";
  };

  close.addEventListener("click", closeGallery);

  previous.addEventListener("click", () => {
    moveGallery(-1);
  });

  next.addEventListener("click", () => {
    moveGallery(1);
  });

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

  elements.galleryImage.alt =
    `${galleryProduct.name} — ${selected.label}`;

  elements.galleryImage.src = selected.src;

  elements.galleryCaption.textContent =
    galleryProduct.category === "Vests"
      ? "Representative product image. Selected colour may differ."
      : selected.label || galleryColour;

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

  if (images.length < 2) return;

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

/* ============================================
   12. CART MANAGEMENT
   ============================================ */

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

  }, 0);

  return cents / 100;
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
      999,
      existing.quantity + item.quantity
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
      999,
      cart[index].quantity
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
      "p",
      "empty-cart",
      "Your request is empty."
    ));
  }

  cart.forEach((item,index) => {
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

    const lineTotal = makeElement(
      "p",
      "cart-item-meta",
      product.price === null
        ? ""
        : `Subtotal: ${formatPrice(product.price * item.quantity)}`
    );

    const remove = makeElement(
      "button", "remove-item", "Remove"
    );

    remove.type = "button";

    remove.addEventListener("click", () => {
      removeFromCart(index);
    });

    info.append(title, meta, price, lineTotal, remove);

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

  summary.hidden = !cart.length;

  summary.textContent = !cart.length
    ? ""
    : hasUnpricedItems()
      ? `Priced items subtotal: ${formatPrice(getCartSubtotal())}. Other items require a quote.`
      : `Estimated subtotal: ${formatPrice(getCartSubtotal())}, before tax.`;
}

/* ============================================
   13. CART STORAGE
   ============================================ */

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

/* ============================================
   14. CART PANEL
   ============================================ */

function openCart() {
  previousFocus = document.activeElement;

  elements.cartOverlay.hidden = false;
  elements.cartPanel.classList.add("is-open");

  elements.cartPanel.setAttribute(
    "aria-hidden", "false"
  );

  elements.openCart.setAttribute(
    "aria-expanded", "true"
  );

  document.body.classList.add("cart-open");

  elements.closeCart.focus();
}

function closeCart() {
  elements.cartPanel.classList.remove("is-open");

  elements.cartPanel.setAttribute(
    "aria-hidden", "true"
  );

  elements.openCart.setAttribute(
    "aria-expanded", "false"
  );

  elements.cartOverlay.hidden = true;

  document.body.classList.remove("cart-open");

  if (previousFocus?.focus) {
    previousFocus.focus();
  }
}

/* ============================================
   15. CUSTOMER INFORMATION
   ============================================ */

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

  if (!getCustomerInformation().name) {
    showFeedback("Please enter your full name.");
    return false;
  }

  return true;
}

function getRecipient() {
  const recipient = CONFIG.recipientEmail.trim();

  if (
    !recipient ||
    recipient.includes("REPLACE_WITH") ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)
  ) {
    showFeedback(
      "Please configure the receiving email address."
    );

    return null;
  }

  return recipient;
}

/* ============================================
   16. ITEMIZED EMAIL
   ============================================ */

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
    "All prices are supplier estimates in CAD.",
    "Taxes are additional.",
    "Final pricing and availability require confirmation.",
    "",
    "This request does not constitute a purchase",
    "or commitment to buy."
  );

  return lines.join("\n");
}

/* ============================================
   17. OUTLOOK WEB EMAIL
   ============================================ */

function emailRequest(event) {
  event.preventDefault();

  if (!validateRequest()) return;

  const recipient = getRecipient();

  if (!recipient) return;

  const subject = generateEmailSubject();
  const body = generateRequestText();

  const outlookUrl =
    "https://outlook.office.com/mail/deeplink/compose" +
    "?to=" + encodeURIComponent(recipient) +
    "&subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  if (outlookUrl.length > 8000) {
    showFeedback(
      "Your request is very long. Please use Copy Request Details and paste the request into Outlook."
    );

    return;
  }

  window.open(
    outlookUrl,
    "_blank",
    "noopener,noreferrer"
  );

  showFeedback(
    "Outlook should open in a new tab. Review your request and click Send. If Outlook does not open, use Copy Request Details."
  );
}

/* ============================================
   18. COPY REQUEST
   ============================================ */

async function copyRequest() {
  if (!validateRequest()) return;

  const recipient = getRecipient();

  if (!recipient) return;

  const text = [
    `To: ${recipient}`,
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
    const fallback = makeElement(
      "textarea", "request-copy-fallback"
    );

    fallback.value = text;
    fallback.readOnly = true;
    fallback.rows = 12;
    fallback.style.width = "100%";

    document.querySelector(
      ".request-copy-fallback"
    )?.remove();

    elements.feedback.after(fallback);

    fallback.focus();
    fallback.select();

    showFeedback(
      "Automatic copying was unavailable. Copy the selected request text manually."
    );
  }
}

/* ============================================
   19. EVENTS AND ACCESSIBILITY
   ============================================ */

function setupEvents() {
  elements.openCart.addEventListener(
    "click", openCart
  );

  elements.closeCart.addEventListener(
    "click", closeCart
  );

  elements.cartOverlay.addEventListener(
    "click", closeCart
  );

  elements.requestForm.addEventListener(
    "submit", emailRequest
  );

  elements.copyRequest.addEventListener(
    "click", copyRequest
  );

  const emailButton = document.getElementById(
    "email-request"
  );

  if (emailButton) {
    emailButton.textContent = "Open Request in Outlook";
  }

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

      if (event.key === "Escape") {
        closeCart();
      }

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

  if (!container.contains(document.activeElement)) {
    event.preventDefault();

    if (event.shiftKey) {
      last.focus();
    } else {
      first.focus();
    }

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
