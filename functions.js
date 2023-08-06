var typed = new Typed('.typing', {
    strings: ["s","The easier way", "The smarter way",],
    typeSpeed: 50,
    backSpeed: 90,
    loop: true,
  });

const button = document.getElementById("course-1-button");
button.addEventListener("click", function() {
  button.innerHTML= "Course Successfully enrolled";
});