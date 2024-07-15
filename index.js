'use strict';
// // DROPDOWN HEADER & MENU // //
// const $whatsOnHeader = document.querySelectorAll(".navbar-link-header")[0]
// const $communityHeader = document.querySelectorAll(".navbar-link-header")[1]
// const $aboutUsHeader = document.querySelectorAll(".navbar-link-header")[2]

// // dropdown menus
// const $whatsOnDropdown = document.querySelectorAll(".dropdown")[0]
// const $communityDropdown = document.querySelectorAll(".dropdown")[1]
// const $aboutUsDropdown = document.querySelectorAll(".dropdown")[2]

// // toggle menu dropdown
// $whatsOnHeader.addEventListener("click", function() {
//     $whatsOnDropdown.classList.toggle("dropdown")
// })

// $communityHeader.addEventListener("click", function() {
//     $communityDropdown.classList.toggle("dropdown")
// })

// $aboutUsHeader.addEventListener("click", function() {
//     $aboutUsDropdown.classList.toggle("dropdown")
// })

        // // NAVBAR< MENUS & DROPDOWNS // //
// constant variables
const headers = document.querySelectorAll(".navbar-link-header");
const dropdowns = document.querySelectorAll(".dropdown");
const openIcons = document.querySelectorAll(".material-symbols-outlined.open");
const closeIcons = document.querySelectorAll(".material-symbols-outlined.close");
const openMenuBtn = document.querySelector(".nav-open-btn");
const navbar = document.querySelector("[data-navbar]");
const closeMenuBtn = document.querySelector(".nav-close-btn")

// open nav menu dropdown - ChatGPT simplification of above method, very handy
headers.forEach((header, index) => {
    header.addEventListener("click", () => {
        dropdowns[index].classList.toggle("dropdown");
        openIcons[index].classList.toggle("inactive");
        closeIcons[index].classList.toggle("active");
    });
});

// open nav menu on click
openMenuBtn.addEventListener("click", function(){
    navbar.classList.add("active");
});

// close nav menu on click
closeMenuBtn.addEventListener("click", function(){
    navbar.classList.remove("active");
});
