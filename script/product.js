let arrowIcon = document.getElementById("arrowIcon");
arrowIcon.onclick = function () {
    window.history.back();
}

let logo = document.getElementById("logo");
logo.onclick = function () {
    window.location.reload();
}

let homeLetter = document.getElementById("homeLetter");
homeLetter.onclick = function(){
    window.location.href = "../index.html"
}


let searchIcon = document.getElementById("search-icon");
searchIcon.onclick = function(){
    window.location.href = "../pages/search.html?value="
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

        categoryLetter.onclick = function(){
            window.location.href = `../pages/categories.html?categories=${categoryLetter.innerText}`
        }
        
        categoryDiv.appendChild(categoryLetter);
        categoriesContainer.appendChild(categoryDiv);
    })

}

getCategories();


let params = new URLSearchParams(window.location.search);
let productId = params.get("id");

handleProduct(productId);

let ProductContainer = document.getElementById("ProductContainer");


async function handleProduct(id) {

    try {

        let uniqeproduct = await fetch(url + "/" + id);
        let product = await uniqeproduct.json();



        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("id", "productImg");

        let ratingDiv = document.createElement("div");
        ratingDiv.setAttribute("id", "ratingDiv");

        let reviews = document.createElement("p");
        reviews.setAttribute("id", "reviews");


        let image = document.createElement("img");
        image.setAttribute("src", product.image);
        image.setAttribute("draggable", "false");

        imgDiv.appendChild(image);
        ProductContainer.appendChild(imgDiv);


        let productName = document.getElementById("productName");
        let productPrice = document.getElementById("productPrice");
        let productRating = document.getElementById("productRating");

        productName.innerText = product.title;
        productPrice.innerText = "₹" + product.price;


        let ratingValue = document.createElement("p");
        ratingValue.setAttribute("class", "rating");
        ratingValue.innerText = product.rating.rate;

        handleRatingColor(ratingValue.innerText, ratingDiv)

        let star = document.createElement("span");
        star.setAttribute("class", "fa fa-star checked");

        ratingDiv.appendChild(ratingValue);
        ratingDiv.appendChild(star);

        reviews.innerText = product.rating.count + " Reviews";

        productRating.appendChild(ratingDiv);
        productRating.appendChild(reviews);


        let productDescription = document.getElementById("productDescription");
        productDescription.innerText = product.description;

        let addToCartBtn = document.getElementById("addToCart");
        

    }
    catch (error) {
        console.log("Product error " + error);

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
