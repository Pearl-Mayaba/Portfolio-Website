const sections = document.querySelectorAll(".section-page");
let currentIndex = 0;
let isScrolling = false;

function showSectionByIndex(index) {
  sections.forEach((section, i) => {
    section.classList.remove("active");

    if (i === index) {
      section.classList.add("active");
    }
  });
}

showSectionByIndex(currentIndex);

window.addEventListener("wheel", (e) => {
  if (isScrolling) return;
  isScrolling = true;

  if (e.deltaY > 0 && currentIndex < sections.length - 1) {
    currentIndex++;
  } else if (e.deltaY < 0 && currentIndex > 0) {
    currentIndex--;
  }

  showSectionByIndex(currentIndex);

  setTimeout(() => {
    isScrolling = false;
  }, 800);
});

function showSection(id) {
  sections.forEach((section, index) => {
    if (section.id === id) {
      currentIndex = index;
      showSectionByIndex(currentIndex);
    }
  });
}
function resetForm() {
  setTimeout(() => {
    document.getElementById("contactForm").reset();
  }, 100);
}
