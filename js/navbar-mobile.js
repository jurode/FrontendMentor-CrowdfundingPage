// == set variables
let navOpen = document.getElementById("navOpen");
let navClose = document.getElementById("navClose");

let hamburger = "images/icon-hamburger.svg";
let noHamburger = "images/icon-close-menu.svg";

let navUl = document.querySelector("nav ul");

// == event listener for OPEN



// # open modal for navbar
navOpen.addEventListener("click", function () {
    // navOpen.setAttribute("src", noHamburger);
    navUl.style.display = "grid";
    navClose.style.display = "block";
    navOpen.style.display = "none";
});


// when click outside of navUl - modal closes
// not yet found a working solution for navClose.addEventListener
window.onclick = function (event) {
    if (event.target == navUl) {
        navUl.style.display = "none";
        navClose.style.display = "none";
        navOpen.style.display = "block";
    }
}