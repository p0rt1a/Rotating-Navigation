const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const container = document.querySelector(".container");
const circle = document.querySelector(".circle");
const navbar = document.querySelector("nav");

let rotateObjList = [container, circle, navbar];

openButton.addEventListener("click", () => {
  console.log("Clicked Open");
  for (let i of rotateObjList) {
    i.classList.add("spin");
  }
});

closeButton.addEventListener("click", () => {
  for (let i of rotateObjList) {
    i.classList.remove("spin");
  }
});
