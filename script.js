var scrollToTopButton = document.getElementById("scroll-to-top-button");

window.onscroll = function() {
  if (window.scrollY > (window.innerHeight * 0.1)) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

scrollToTopButton.onclick = function() {
  window.scrollTo(0, 0);
};
