function openGmail() {
    var subject = encodeURIComponent("");
    var body = encodeURIComponent("");

    // Construct the mailto link
    var mailtoLink = "mailto:chweyamark@gmail.com?subject=" + subject + "&body=" + body;

    // Open the user's default email client
    window.location.href = mailtoLink;
  }


var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Run the slideshow when the page loads
window.onload = function () {
    showSlides();
};
