const contactMenu = document.getElementById("contact-menu");
contactMenu.style.display = "none";
let isVisible = false;

function toggleDisplay() {
  if (isVisible) {
    isVisible = false;
    contactMenu.style.display = "none";
  } else {
    isVisible = true;
    contactMenu.style.display = "block";
  }
}
