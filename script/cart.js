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


let searchIcon = document.getElementById("search-icon");
searchIcon.onclick = function () {
    window.location.href = "../pages/search.html?value="
}

let addToCartIcon = document.getElementById("add-to-cart-icon");
addToCartIcon.onclick = function () {
    window.location.reload();
}

let cartProductCount = document.getElementById("cartProductCount");
cartProductCount.onclick = function () {
    window.location.reload()
}

let cartCount = JSON.parse(localStorage.getItem("data"));
cartProductCount.innerText = cartCount.length;

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

        categoryLetter.onclick = function () {
            window.location.href = `../pages/categories.html?categories=${categoryLetter.innerText}`
        }

        categoryDiv.appendChild(categoryLetter);
        categoriesContainer.appendChild(categoryDiv);
    })

}

getCategories();

let container = document.getElementById("cartContainer");
let emptyCartletter = document.getElementById("emptyCartletter");
let totalPrice = 0;

let localData = JSON.parse(localStorage.getItem("data")) || [];

localData.forEach(function (item) {

    if (item) {

        emptyCartletter.style.display = "none";


        let product = document.createElement("div");
        product.setAttribute("class", "product");

        let image = document.createElement("img");
        image.setAttribute("src", item.image);
        image.setAttribute("draggable", "false")

        let details = document.createElement("div");
        details.setAttribute("class", "details");

        let title = document.createElement("h3");
        title.setAttribute("class", "title");
        title.innerText = item.title;

        let price = document.createElement("h2");
        price.setAttribute("class", "price");
        price.innerText = "₹" + item.price;



        let ratingAndReviews = document.createElement("div");
        ratingAndReviews.setAttribute("class", "ratingAndReviews");


        let ratingDiv = document.createElement("div");
        ratingDiv.setAttribute("class", "ratingDiv");


        let ratingValue = document.createElement("p");
        ratingValue.setAttribute("class", "rating");
        ratingValue.innerText = item.rating;


        handleRatingColor(ratingValue.innerText, ratingDiv);


        let star = document.createElement("span");
        star.setAttribute("class", "fa fa-star checked");


        ratingDiv.appendChild(ratingValue);
        ratingDiv.appendChild(star);


        let reviews = document.createElement("p");
        reviews.setAttribute("class", "reviews");
        reviews.innerText = item.reviews + " Reviews";


        ratingAndReviews.appendChild(ratingDiv);
        ratingAndReviews.appendChild(reviews);

        details.appendChild(title);
        details.appendChild(price);
        details.appendChild(ratingAndReviews);

        let countOfProduct = document.createElement("div");
        countOfProduct.setAttribute("class", "countOfProduct");

        let decrease = document.createElement("span");
        decrease.setAttribute("class", "decrease");
        decrease.innerText = "-";

        let count = document.createElement("span");
        count.setAttribute("id", "count");
        count.innerText = item.countOfProduct;

        let increase = document.createElement("span");
        increase.setAttribute("class", "increase");
        increase.innerText = "+";

        countOfProduct.appendChild(decrease);
        countOfProduct.appendChild(count);
        countOfProduct.appendChild(increase);

        let updatedPrice = document.createElement("span");
        updatedPrice.setAttribute("id", "updatedPrice");
        let updatedPriceTotal = item.price * item.countOfProduct;
        updatedPrice.innerText = "₹" + updatedPriceTotal.toFixed(2);

        totalPrice += updatedPriceTotal;

        let closeBtn = document.createElement("span");
        closeBtn.setAttribute("id", "closeBtn");
        closeBtn.innerText = "X";

        product.appendChild(image)
        product.appendChild(details);
        product.appendChild(countOfProduct);
        product.appendChild(updatedPrice);
        product.appendChild(closeBtn);


        container.appendChild(product);

        decrease.onclick = function () {
            UpdateCart(item.id, "decrease", count);
            window.location.reload()
        }

        increase.onclick = function () {
            UpdateCart(item.id, "increase", count);
            window.location.reload()
        }

        closeBtn.onclick = function () {

            localData = localData.filter(function (dataItem) {
                return dataItem.id !== item.id;
            });

            localStorage.setItem("data", JSON.stringify(localData));

            window.location.reload();
            product.remove();

            if (localData.length === 0) {
                emptyCartletter.style.display = "block";
            }
        };


    }
    else {
        emptyCartletter.style.display = "block"
    }


});

let totalPriceDiv = document.getElementById("totalPrice");
totalPriceDiv.innerText = "Total price: ₹" + totalPrice.toFixed(2);


function UpdateCart(id, letter, count) {

    let findProduct = localData.find(function (item) {
        return item.id === id;
    });

    if (findProduct) {
        if (letter === "increase") {
            count.innerText++;


        }
        else {
            if (count.innerText > 1) {
                count.innerText--;
            }

        }
    }

    findProduct.countOfProduct = count.innerText


    localStorage.setItem("data", JSON.stringify(localData));
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