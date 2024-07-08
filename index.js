let input = document.querySelector("input");
let button = document.querySelector("button");
let products = document.querySelector(".products");

fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
  .then((res) => res.json())
  .then((data) => {
    for (let product of data) {
      let box = document.createElement("div");
      let img = document.createElement("img");
      let name = document.createElement("h2");
      let price = document.createElement("p");

      img.src = product.pic;
      name.textContent = product.name;
      price.textContent = product.price;

      box.appendChild(img);
      box.appendChild(name);
      box.appendChild(price);

      products.appendChild(box);
    }
  });

button.addEventListener("click", (event) => {
  event.preventDefault();

  let seach = input.value;

  fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
    .then((res) => res.json())
    .then((data) => {
      let filteredData = data.filter((product) => product.name === seach)[0];
      products.innerHTML = " ";

      let box = document.createElement("div");
      let img = document.createElement("img");
      let name = document.createElement("h2");
      let price = document.createElement("p");

      img.src = filteredData.pic;
      name.textContent = filteredData.name;
      price.textContent = filteredData.price;

      box.appendChild(img);
      box.appendChild(name);
      box.appendChild(price);

      products.appendChild(box);

    });
});
