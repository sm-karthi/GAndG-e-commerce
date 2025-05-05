let arrowIcon = document.getElementById("arrowIcon");
arrowIcon.onclick = function () {
    window.location.href = "../index.html";
}

let getData = JSON.parse(localStorage.getItem("data"));

console.log(getData.length)