let hambar = document.getElementById("ham-bar");
console.log(hambar);
let navList = document.getElementById("nav-list");
console.log(navList);
let liEles = document.querySelectorAll("li");
console.log(liEles);

hambar.addEventListener("click", () => {
  navList.classList.toggle("active");
  hambar.classList.toggle("fa-circle-xmark");
});

liEles.forEach((liEle) => {
  liEle.addEventListener("click", function () {
    navBar.classList.toggle("active");
    hambar.classList.toggle("fa-circle-xmark");
  });
});

/* const hambar = document.querySelector("#ham-bar");
const navList = document.querySelector("#nav-list");
const listEles = document.querySelectorAll("li");

hambar.addEventListener("click", function () {
  navList.classList.toggle("menu-list");
});
*/
