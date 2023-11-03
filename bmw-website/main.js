var nav = document.getElementById('myNav');
var menu = document.getElementById('mobile-menu')

menu.addEventListener('click', function(e) {
    // Toggle the 'hide-mobile' class on the navigation to show/hide it
    nav.classList.toggle('hide-mobile');
    
    e.preventDefault(); // Prevent the default behavior (e.g., navigation or following a link)
});

function myFunction(x) {
     x.classList.toggle("change");
}

 
let slideIndex = 1;
let autoAdvance = true; // A flag to track automatic advancement
let toggleIcon = document.getElementById("toggleIcon");
let autoAdvanceTimeout;

showSlides(slideIndex);

// Function to toggle between "Pause" and "Play" and control the slideshow
function toggleSlides() {
    autoAdvance = !autoAdvance; // Toggle the flag between true and false
  
    if (autoAdvance) {
      toggleIcon.textContent = "❚❚"; // Set the pause icon (Unicode)
      autoAdvanceSlides();
    } else {
      toggleIcon.textContent = "▶"; // Set the play icon (Unicode)
      clearTimeout(autoAdvanceTimeout);
    }
}
function autoAdvanceSlides() {
    if (autoAdvance) {
      autoAdvanceTimeout = setTimeout(() => plusSlides(1), 3000);
    }
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}



function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let squares = document.getElementsByClassName("square");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < squares.length; i++) {
      squares[i].className = squares[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    squares[slideIndex - 1].className += " active";

    // Automatically advance to the next slide after 3 seconds (adjust as needed)
    autoAdvanceSlides();
}