let current = 0;
const pages = [
  document.getElementById("p1"),
  document.getElementById("p2"),
  document.getElementById("p3"),
];

function nextPage() {
  if (current < pages.length) {
    pages[current].classList.add("flipped");
    current++;
  }
}

function prevPage() {
  if (current > 0) {
    current--;
    pages[current].classList.remove("flipped");
  }
}
