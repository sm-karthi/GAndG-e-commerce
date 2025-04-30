
let products = [
    {
        id: 1,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 320,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259
        }
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 320,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259
        }
    },
    {
        id: 3,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 320,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259
        }
    },
    {
        id: 4,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 320,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259
        }
    },
    {
        id: 5,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 320,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259
        }
    },
    {
        id: 6,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 320,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259
        }
    },
    {
        id: 7,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 320,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259
        }
    },
    {
        id: 8,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 330,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259
        }
    }
];

let productContainer = document.createElement("div");
productContainer.setAttribute("class", "productContainer");

let uniqeProductContainer = document.getElementById("uniqeProductContainer");


let arrowIcon = document.getElementById("arrowIcon");
arrowIcon.onclick = function () {
    window.location.reload();
}


products.forEach(function (item) {

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

        productContainer.style.display = "none"
        arrowIcon.style.display = "block";


        uniqeProductContainer.style.display = "block";

        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("id", "uniqeImg");

        let image = document.createElement("img");
        image.setAttribute("src", item.image);
        image.setAttribute("draggable", "false");

        imgDiv.appendChild(image);
        uniqeProductContainer.appendChild(imgDiv);


        let productName = document.getElementById("productName");
        let productPrice = document.getElementById("productPrice");
        let productRating = document.getElementById("productRating");

        productName.innerText = item.title;
        productPrice.innerText = "₹" + item.price;

        let ratingDiv = document.createElement("div");
        ratingDiv.setAttribute("class", "ratingDiv");

        let ratingValue = document.createElement("p");
        ratingValue.setAttribute("class", "rating");
        ratingValue.innerText = item.rating.rate;

        let star = document.createElement("span");
        star.setAttribute("class", "fa fa-star checked");

        ratingDiv.appendChild(ratingValue);
        ratingDiv.appendChild(star);

        let reviews = document.createElement("p");
        reviews.setAttribute("class", "reviews");
        reviews.innerText = item.rating.count + " Reviews";

        productRating.appendChild(ratingDiv);
        productRating.appendChild(reviews);


        let productDescription = document.getElementById("productDescription");
        productDescription.innerText = item.description;
        let addToCartBtn = document.getElementById("addToCart");


    }
});

let searchIcon = document.getElementById("search-icon");
let searchProduct = document.getElementById("searchProduct");

searchIcon.onclick = function(){
    productContainer.style.display = "none";
    uniqeProductContainer.style.display = "none";
    arrowIcon.style.display = "block";
    searchProduct.style.display = "block"
}

document.body.appendChild(productContainer);


