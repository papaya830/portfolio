// Global variable to track current slide
let slideIndex = 1;

// Function to navigate to next/previous slide
export function plusSlides(n: number) {
  showSlides(slideIndex += n);
}

// Function to directly navigate to a specific slide
export function currentSlide(n: number) {
  showSlides(slideIndex = n);
}

// Main function to display slides and update indicators
export function showSlides(n: number) {
  let i;
  const slides = document.getElementsByClassName("images") as HTMLCollectionOf<HTMLElement>;
  const dots = document.getElementsByClassName("slideshow-dot") as HTMLCollectionOf<HTMLElement>;

  if (slides.length === 0) {
    console.error("No slides found!");
    return;
  }

  // Handle wrap-around navigation
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    if (slides[i]) {
      slides[i].style.display = "none";
    }
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    if (dots[i]) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  }

  // Show the current slide and update dot indicator
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
    
    // Force a browser reflow to ensure display changes are applied
    void slides[slideIndex - 1].offsetHeight;
  }
  
  // Update the active dot indicator
  if (dots.length > 0 && dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }
}