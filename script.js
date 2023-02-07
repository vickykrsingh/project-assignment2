const bar = document.getElementById("bar");
const contactBtn = document.getElementById("contactBtn");
const menu = document.getElementById("menu");

const toggleMenu = () => {
  if (menu.style.left == "0%" && contactBtn.style.visibility == "visible") {
    menu.style.left = "-100%";
    contactBtn.style.visibility = "hidden";
  } else {
    menu.style.left = "0%";
    contactBtn.style.visibility = "visible";
  }
};

bar.addEventListener("click", toggleMenu);
