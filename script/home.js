
let url = "https://fakestoreapi.com/products";



function getAllData() {
    let data = fetch(url, {
        method: "GET"
    });

    return data;
}




let checkProduct = true;


let productContainer = document.createElement("div");
productContainer.setAttribute("class", "productContainer");


let uniqeProductContainer = document.getElementById("uniqeProductContainer");


let searchProductContainer = document.getElementById("searchProductContainer");
searchProductContainer.style.display = "none";


let searchProduct = document.getElementById("searchProduct");


let categoriesContainer = document.getElementById("categoriesContainer");
categoriesContainer.style.display = "none";



let logo = document.getElementById("logo");
logo.onclick = function () {
    window.location.reload();
}


let arrowIcon = document.getElementById("arrowIcon");
arrowIcon.onclick = function () {
    window.location.reload();
}




async function loadProducts() {

    try {

        let products = await getAllData();
        let productList = await products.json();

        productList.forEach(function (item) {

            getAllProducts(item, productContainer);
        });
    }

    catch (error) {
        console.log("Load all products error in home page" + error);
    }
}

loadProducts();
document.body.appendChild(productContainer);




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





async function handleUniqeProduct(id) {

    try {

        let uniqeproduct = await fetch(url + "/" + id);
        let product = await uniqeproduct.json();


        productContainer.style.display = "none"
        arrowIcon.style.display = "block";
        searchProduct.style.display = "none";
        searchProductContainer.style.display = "none";
        categoriesContainer.style.display = "none";


        uniqeProductContainer.style.display = "block";


        let imgDiv = null;
        let ratingDiv = null;
        let reviews = null;


        if (checkProduct) {
            imgDiv = document.getElementById("uniqeImg");
            imgDiv.innerText = "";

            ratingDiv = document.getElementById("ratingDiv");
            ratingDiv.innerText = "";

            reviews = document.getElementById("reviews");
            reviews.innerText = "";
        }
        else {
            imgDiv = document.createElement("div");
            imgDiv.setAttribute("id", "uniqeImg");

            ratingDiv = document.createElement("div");
            ratingDiv.setAttribute("id", "ratingDiv");

            reviews = document.createElement("p");
            reviews.setAttribute("id", "reviews");
        }


        let image = document.createElement("img");
        image.setAttribute("src", product.image);
        image.setAttribute("draggable", "false");

        imgDiv.appendChild(image);
        uniqeProductContainer.appendChild(imgDiv);


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
        addToCartBtn.onclick = function () {
            storeData(product.id, product.title, product.price, product.rating, product.image);

        }

    }
    catch (error) {
        console.log("Uniqe product error "+error);

    }

}






let productClickCount = 0;

function getAllProducts(item, container) {


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

    container.appendChild(product);


    product.onclick = function () {

        if (!checkProduct) {
            checkProduct = true;
            productClickCount++;
        }
        else if(productClickCount >= 2){
            checkProduct = true;
        }
        else {
            checkProduct = false;
            productClickCount++;
        }

        handleUniqeProduct(item.id)
    }
}





let searchIcon = document.getElementById("search-icon");
let searchInput = document.getElementById("searchInput");

searchIcon.onclick = function () {
    productContainer.style.display = "none";
    uniqeProductContainer.style.display = "none";
    arrowIcon.style.display = "block";
    searchProduct.style.display = "block"
    categoriesContainer.style.display = "none";

    searchProductContainer.style.display = "grid";


}







// Search feature
searchInput.oninput = function () {
    searchProductContainer.innerText = "";
    if (searchInput.value !== "") {
        handleInput(searchInput.value);
    }


}






async function handleInput(letters) {

    try {

        let products = await getAllData();
        let productList = await products.json();


        productList.forEach(function (item) {

            if (item.title.toLowerCase().trim().includes(letters.toLowerCase().trim())) {

                getAllProducts(item, searchProductContainer);
            }
        })

    }
    catch (error) {

        console.log("Search functionality error" + error)
    }
}







async function handleCategories(category) {

    try{

        categoriesContainer.innerText = "";

        let product = await fetch(url + "/category/" + category);
        let productList = await product.json();

        productList.forEach(function(item){

            getAllProducts(item, categoriesContainer);
            console.log(item);
            

        })
    }
    catch(error){
        console.log("Categories error " + error);
        
    }

}



let categoryList = document.querySelectorAll(".categories li");

categoryList.forEach(function(category){

    category.onclick = function(){

        productContainer.style.display = "none";
        uniqeProductContainer.style.display = "none";
        arrowIcon.style.display = "block";
        searchProduct.style.display = "none"
        searchProductContainer.style.display = "none";

        categoriesContainer.style.display = "grid";

        
        
        handleCategories(category.innerText.toLowerCase());
    }
})