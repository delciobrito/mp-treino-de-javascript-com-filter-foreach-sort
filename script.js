import { products } from "./data.js";

const smartphones = document.querySelector("#products");
const sortOrder = document.querySelector("#sortOrder");
const ranger = document.querySelector("#maxRange");
const buttonSearch = document.querySelector("#navigation__search-icon");
const productName = document.querySelector("#productName");
const template = document.querySelector("#not-found-template");
const btnSubMenu = document.querySelector("#menu-toogle");
const subMenu = document.querySelector(".submenu");
const btnMenuHamburguer = document.querySelector("#menu-hamburguer");
const menuHamburguer = document.querySelector(".header__nav-item__menu");
const sortByRating = [];
let maxValue = document.querySelector("#maxValue");

sortOrder.addEventListener("change", () => {
  if (sortOrder.value === "default") {
    renderProducts(products);
  } else if (sortOrder.value === "lowToHigh") {
    sortProductsByLowestPrice();
    renderProducts(sortByRating);
  } else if (sortOrder.value === "highToLow") {
    sortProductsByHighestPrice();
    renderProducts(sortByRating);
  } else if (sortOrder.value === "rating") {
    sortProductsByRatings();
    renderProducts(sortByRating);
  }
});

ranger.addEventListener("input", () => {
  let price = ranger.value;
  maxValue.innerText = `${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(ranger.value)}`;

  rangePrice(price);
});

productName.addEventListener("keypress", (e) => {
  const name = productName.value;
  if (e.key === "Enter") {
    if (name != "") {
      renderProducts(filterName(name));
    } else {
      smartphones.innerHTML = "";
      const button = document.createElement("button");
      smartphones.append(template.content.cloneNode(true));
    }
  }
});

buttonSearch.addEventListener("click", (e) => {
  const name = productName.value;
  if (name != "") {
    renderProducts(filterName(name));
  } else {
    smartphones.innerHTML = "";
    smartphones.append(template.content.cloneNode(true));
  }
});

btnSubMenu.addEventListener("click", () => {
  if (subMenu.style.display === "block") {
    subMenu.style.display = "none";
  } else {
    subMenu.style.display = "block";
  }
});

btnMenuHamburguer.addEventListener("click", () => {
  const visibled = menuHamburguer.dataset.visibled;
  if (menuHamburguer.style.display === "block") {
    menuHamburguer.style.display = "none";
  } else {
    menuHamburguer.style.display = "block";
  }
});

function renderProducts(listProducts) {
  smartphones.innerHTML = "";

  if (listProducts.length != 0) {
    listProducts.forEach((product) => {
      const div = document.createElement("div");
      const name = document.createElement("h2");
      const image = document.createElement("img");
      const divRating = document.createElement("div");
      const divPrice = document.createElement("div");
      const price = document.createElement("p");
      const priceOld = document.createElement("p");
      const descripition = document.createElement("p");
      const button = document.createElement("button");

      div.className = "product";
      image.className = "product__image";
      divPrice.className = "product__div-price";
      price.className = "product__price";
      priceOld.className = "product__price-old";
      descripition.className = "product__text";
      button.className = "button button-gradient";

      name.innerText = product.name;
      image.src = product.srcImg;

      price.innerText = `${new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(product.price)} no PIX`;

      priceOld.innerText = `${new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(product.originalPrice)}`;

      descripition.innerText = product.description;
      button.innerText = "Compre agora";

      divPrice.append(price, priceOld);

      for (let i = 0; i < product.rating; i++) {
        divRating.innerHTML += `
          <i class="fa-solid fa-star product__rating-star"></i>
        `;
      }

      div.append(name, image, divRating, divPrice, descripition, button);
      smartphones.append(div);

      image.addEventListener("mouseover", () => {
        image.style.cursor = "pointer";
        image.style.boxShadow = "0px 0px 25px #fff";
        image.style.scale = 1.07;
      });

      image.addEventListener("mouseout", () => {
        image.style.boxShadow = "none";
        image.style.scale = 1;
      });

      image.addEventListener("click", () => {
        productDetails(product);
      });
    });
  } else {
    smartphones.append(template.content.cloneNode(true));
  }
}

function sortProductsByLowestPrice() {
  sortByRating.splice(0, sortByRating.length);
  console.log(sortByRating);
  products.forEach((product) => sortByRating.push(product));
  sortByRating.sort(function (a, b) {
    return a.price - b.price;
  });
}

function sortProductsByHighestPrice() {
  sortByRating.splice(0, sortByRating.length);
  products.forEach((product) => sortByRating.push(product));
  sortByRating.sort(function (a, b) {
    return b.price - a.price;
  });
}

function sortProductsByRatings() {
  sortByRating.splice(0, sortByRating.length);
  products.forEach((product) => sortByRating.push(product));
  sortByRating.sort(function (a, b) {
    return b.rating - a.rating;
  });
}

function rangePrice(price) {
  sortByRating.splice(0, sortByRating.length);
  products.forEach((product) => {
    if (product.price < price) {
      sortByRating.push(product);
    }
  });
  renderProducts(sortByRating);
}

function filterName(name) {
  const resultName = products.filter(
    (product) => product.name.toLowerCase().indexOf(name.toLowerCase()) > -1
  );
  return resultName;
}

function productDetails(product) {
  const container = document.querySelector(".container");
  const div = document.createElement("div");
  const name = document.createElement("h2");
  const image = document.createElement("img");
  const divRating = document.createElement("div");
  const divPrice = document.createElement("div");
  const price = document.createElement("p");
  const priceOld = document.createElement("p");
  const descripition = document.createElement("p");
  const button = document.createElement("button");
  const fade = document.createElement("div");
  const modal = document.createElement("modal");
  const toClose = document.createElement("p");

  div.className = "product";
  image.className = "product__image";
  divPrice.className = "product__div-price";
  price.className = "product__price";
  priceOld.className = "product__price-old";
  descripition.className = "product__text";
  button.className = "button button-gradient";
  fade.setAttribute("id", "fade");
  modal.setAttribute("id", "modal");

  name.innerText = product.name;
  image.src = product.srcImg;

  price.innerText = `${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price)} no PIX`;

  priceOld.innerText = `${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.originalPrice)}`;

  descripition.innerText = product.description;
  button.innerText = "Compre agora";

  divPrice.append(price, priceOld);

  for (let i = 0; i < product.rating; i++) {
    divRating.innerHTML += `
          <i class="fa-solid fa-star product__rating-star"></i>
        `;
  }

  div.style.width = "70%";
  toClose.textContent = "X";
  
  div.append(name, image, divRating, divPrice, descripition, button);
  smartphones.append(div);
  
  modal.append(toClose, div);
  fade.append(modal);
  container.append(fade);

  image.addEventListener("mouseover", () => {
    image.src = product.backImg;
    image.style.boxShadow = "";
    image.style.scale = "";
  });

  image.addEventListener("mouseout", () => {
    image.src = product.srcImg;
  });

  toClose.addEventListener("click", () => {
    container.removeChild(fade);
  });
}

renderProducts(products);
