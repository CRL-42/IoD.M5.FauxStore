let allProducts = [];

async function loadProducts() {
    try {
        const response = await axios.get("/api/products");
        allProducts = response.data;
        displayProducts(allProducts);
    }
    catch (err) {
        console.error('Failed to load products:', err);
    }
}

async function loadCategories() {
    try {
        const response = await axios.get("/api/categories");
        response.data.forEach((category) => addDrop(category));
    }
    catch (err) {
        console.error('Failed to load categories:', err);
    }
}

async function filterProducts(category) {
  if (category === "all") {
    document.getElementById("dropdown-btn").innerText = "All products";
    displayProducts(allProducts);
    return;
  } else {
    try {
        const response = await axios.get(`/api/filter?category=${encodeURIComponent(category)}`);
        const filtered = response.data;
    
        const formatted = category.charAt(0).toUpperCase() + category.slice(1);
        document.getElementById("dropdown-btn").innerText = formatted;
    
        displayProducts(filtered);
    }
    catch (err) {
        console.error('Failed to filter products:', err);
    }
  }
}

function displayProducts(products) {
  document.querySelector("#card-list").innerHTML = "";
  products.forEach((product) => addCard(product));
}

function addCard(product) {
  const template = document.getElementById("card-template").content.cloneNode(true);

  template.querySelector(".card-img-top").src = product.image;
  template.querySelector(".card-img-top").alt = product.title;
  template.querySelector(".card-title").innerText = product.title;
  template.querySelector(".card-text").innerText = product.description;
  template.querySelector(".btn-primary").innerText = `Add to cart: ${product.price}`;

  document.querySelector("#card-list").appendChild(template);
}

function addDrop(category) {
  const template = document.getElementById("drop-template").content.cloneNode(true);

  const item = template.querySelector(".dropdown-item");
  const formatItem = category.charAt(0).toUpperCase() + category.slice(1);
  item.innerText = formatItem;

  item.addEventListener("click", (e) => {
    e.preventDefault();
    // document.getElementById("dropdown-btn").innerText = formatItem;
    filterProducts(category);
  });

  document.querySelector("#drop-list").appendChild(template);
}

loadProducts();
loadCategories();