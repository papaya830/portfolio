let slideIndex = 1;

export function plusSlides(n: number) {
    showSlides(slideIndex += n);
}

function showSlides(n: number) {
    let slides = document.getElementsByClassName("images") as HTMLCollectionOf<HTMLElement>;

    // Add check to ensure slides exist
    if (slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Initialize the slideshow when the DOM is ready
export function initSlideshow() {
    showSlides(slideIndex);
}