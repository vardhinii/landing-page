let slider = document.getElementById("scroll");

function moveLeft() {
  slider.style.scrollBehavior = "smooth";
  if (screen.width < 500) {
    slider.scrollBy(-screen.width, 0);
  } else {
    slider.scrollBy(-900, 0);
  }
}

function moveRight() {
  slider.style.scrollBehavior = "smooth";
  if (screen.width < 500) {
    slider.scrollBy(screen.width, 0);
  } else {
    slider.scrollBy(900, 0);
  }
}
