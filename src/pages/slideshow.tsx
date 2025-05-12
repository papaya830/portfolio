let slideIndex = 1;

export function plusSlides(n: number) {
  console.log("Navigating slide by:", n);
  showSlides(slideIndex += n);
}

export function showSlides(n: number) {
  const slides = document.getElementsByClassName("images") as HTMLCollectionOf<HTMLElement>;

  if (slides.length === 0) {
    console.error("No slides found!");
    return;
  }

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
