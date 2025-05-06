

let arrowIcon = document.getElementById("arrowIcon");
arrowIcon.onclick = function () {
    window.history.back();
}

let logo = document.getElementById("logo");
logo.onclick = function () {
    window.location.reload();
}

let homeLetter = document.getElementById("homeLetter");
homeLetter.onclick = function () {
    window.location.href = "../index.html"
}




let url = "https://fakestoreapi.com/products";

let categories = document.getElementById("categoriesContainer");
let categoriesContainer = document.getElementById("categoriesLetterContainer");

async function getCategories() {

    let category = await fetch(url + "/categories");
    let categoryList = await category.json();

    categoryList.forEach(function (item) {
        let categoryDiv = document.createElement("div");
        categoryDiv.setAttribute("id", "categoryDiv");

        let categoryLetter = document.createElement("p");

        categoryLetter.innerText = item;


        categoryDiv.appendChild(categoryLetter);

        categoryLetter.onclick = function () {
            window.location.href = `../pages/categories.html?categories=${categoryLetter.innerText}`
        }

        categoriesContainer.appendChild(categoryDiv);
    })

}

getCategories();


let productContainer = document.getElementById("productContainer");
let searchInput = document.getElementById("searchInput");


let urlParams = new URLSearchParams(window.location.search);
let searchValue = urlParams.get("value") || "";


if (searchValue === "") {
    productContainer.style.display = "none";
} else {
    productContainer.style.display = "grid";
    loadProducts(searchValue);
}


searchInput.value = searchValue;


let searchIcon = document.getElementById("search-icon");
searchIcon.onclick = function () {
    let searchValue = document.getElementById("searchInput").value;
    window.location.href = `../pages/search.html?value=${searchValue}`;
};


searchInput.oninput = function () {
    let value = searchInput.value;
    window.history.replaceState(null, "", `search.html?value=${value}`);

    if (value !== "") {
        productContainer.style.display = "grid";
        productContainer.innerHTML = ""; 
        loadProducts(value);
    } else {
        productContainer.style.display = "none";
        productContainer.innerHTML = "";
    }
};


async function loadProducts(letters) {

    try {
        let products = await fetch(url);
        let productList = await products.json();

        productContainer.innerHTML = ""; 

        productList.forEach(function (item) {
            if (item.title.toLowerCase().trim().includes(letters.toLowerCase().trim())) {
                getAllProducts(item);
            }
        });

    } catch (error) {
        console.log("Load all products error in search page: " + error);
    }
}






function getAllProducts(item) {

    let product = document.createElement("div");
    product.setAttribute("class", "product");


    let image = document.createElement("img");
    image.setAttribute("src", item.image);
    image.setAttribute("draggable", "false")


    let name = document.createElement("h3");
    name.setAttribute("class", "name");
    name.innerText = item.title;


    let price = document.createElement("h3");
    price.setAttribute("class", "price");
    price.innerText = "₹" + item.price;


    let delivery = document.createElement("span");
    delivery.setAttribute("class", "delivery");
    delivery.innerText = "Free Delivery";


    let ratingAndReviews = document.createElement("div");
    ratingAndReviews.setAttribute("class", "ratingAndReviews");


    let ratingDiv = document.createElement("div");
    ratingDiv.setAttribute("class", "ratingDiv");


    let ratingValue = document.createElement("p");
    ratingValue.setAttribute("class", "rating");
    ratingValue.innerText = item.rating.rate;


    handleRatingColor(ratingValue.innerText, ratingDiv);


    let star = document.createElement("span");
    star.setAttribute("class", "fa fa-star checked");


    ratingDiv.appendChild(ratingValue);
    ratingDiv.appendChild(star);


    let reviews = document.createElement("p");
    reviews.setAttribute("class", "reviews");
    reviews.innerText = item.rating.count + " Reviews";


    ratingAndReviews.appendChild(ratingDiv);
    ratingAndReviews.appendChild(reviews);


    product.appendChild(image);
    product.appendChild(name);
    product.appendChild(price);
    product.appendChild(delivery);
    product.appendChild(ratingAndReviews);

    productContainer.appendChild(product);

    product.onclick = function () {
        let productId = item.id;
        window.location.href = `../pages/product.html?id=${productId}`;
    }

}




function handleRatingColor(rate, div) {

    if (rate <= 2) {
        div.style.backgroundColor = "red";
    }
    else if (rate > 2 && rate <= 4) {
        div.style.backgroundColor = "#f2b611";
    }
    else {
        div.style.backgroundColor = "rgb(9, 141, 9)"
    }
}