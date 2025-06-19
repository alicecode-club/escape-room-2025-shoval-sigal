let current = 0;
const pages = [
  document.getElementById("p1"),
  document.getElementById("p2"),
  document.getElementById("p3"),
  document.getElementById("p4"),
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

function nextPage() {
  if (current < pages.length) {
    pages[current].classList.add("flipped");
    current++;

    // ברגע שהגענו לעמוד האחרון
    if (current === pages.length) {
      setTimeout(() => moveOn(), 1000);
    }
  }
}


function moveOn() {
      window.location.href = "../first room/code/room1.html";
}
