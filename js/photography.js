let currentSlideIndex = 0

function showSlide () {
  debugger;
  let image1 = document.getElementById('image1');
  let image2 = document.getElementById('image2');
  let image3 = document.getElementById('image3');
  let image4 = document.getElementById('image4');
  let image5 = document.getElementById('image5');
  let image6 = document.getElementById('image6');

  //this creates an array of <img> elements
  let slides = [image1, image2, image3, image4, image5, image6];

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    let loopSlide = slides[i];
    if (i != currentSlideIndex) {
      loopSlide.style.display = 'none';
    } else {
      loopSlide.style.display = 'block';
    }
  }
}

  function showNextSlide() {
    currentSlideIndex += 1;
    showSlide();
  }

  function showPreviousSlide() {
    currentSlideIndex -= 1;
    showSlide();
  }

showSlide();
