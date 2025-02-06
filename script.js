import { products } from "./data.js";

const smartphones = document.querySelector("#products");
const sortOrder = document.querySelector("#sortOrder");
const sortByRating = [];


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

function renderProducts(listProducts) {
  smartphones.innerHTML = "";

  listProducts.forEach((product) => {
    const div = document.createElement("div");
    const name = document.createElement("h2");
    const image = document.createElement("img");
    const rating = document.createElement("i");
    const divPrice = document.createElement("div");
    const price = document.createElement("p");
    const priceOld = document.createElement("p");
    const descripition = document.createElement("p");
    const button = document.createElement("button");

    div.className = "product";
    image.className = "product__image";
    rating.className = "fa-solid fa-star product__rating-star";
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
    div.append(name, image, rating, divPrice, descripition, button);
    smartphones.append(div);
  });
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
    return a.rating - b.rating;
  });
}

renderProducts(products);
