let initSlider = function() {
  let sliderBlock = document.querySelector('.slider');
  let sliderToggles = sliderBlock.querySelectorAll('.slider-toggle');
  let sliderItems = sliderBlock.querySelectorAll('.slider-item');
  let currentSlide = 0;

  sliderToggles.forEach(function(sliderToggle, index) {
    sliderToggle.addEventListener('click', function() {
      sliderItems[currentSlide].classList.remove('slider-item-current');
      sliderToggles[currentSlide].classList.remove('slider-toggle-current');

      sliderItems[index].classList.add('slider-item-current');
      sliderToggle.classList.add('slider-toggle-current');

      currentSlide = index;
    })
  })
};

initSlider();