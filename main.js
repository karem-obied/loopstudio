let image = document.querySelectorAll(".box");
let counter = 1;
image.forEach((e) => {
  e.style.cssText = `background-image: url(images/desktop/image-${counter}.jpg);`;
  counter++;
});
let close = document.querySelector(".close");
let menu = document.querySelector(".hi");
let ul = document.querySelector("header ul");
menu.onclick = () => {
  ul.classList.add("show");
  close.style.display = "block";
  menu.style.display = "none";
  close.onclick = () => {
    ul.classList.remove("show");
    close.style.display = "none";
    menu.style.display = "block";
  };
};
