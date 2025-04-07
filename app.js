const header = document.getElementById("header");
// const menuBtn = document.getElementById("hamburger");
// const closeBtn = document.getElementById("close");


function openMenu() {
    console.log("menu opened")
    header.classList.add("open")
}
function closeMenu() {
    console.log("menu closed")
    header.classList.remove("open")
}