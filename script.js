const images = document.getElementById("img");
const image = document.querySelectorAll("#img img");

let idx = 0;

function carousel() {
  idx++;

  if (idx > image.length - 1) {
    idx = 0;
  }

  images.style.transform = `translateX(${-idx * 414}px)`;
}

setInterval(carousel, 3600);
