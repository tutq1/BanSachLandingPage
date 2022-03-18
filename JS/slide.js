window.addEventListener('load', function () {
  const sliderMain = document.querySelector('.slider-main');
  const sliderItems = document.querySelectorAll('.slider-item');
  const sliderItemWight = sliderItems[0].offsetWidth;
  const sliderLength = sliderItems.length;
  let positionX = 0;
  let index = 0;
  function handleChangeSlide(direction = 1) {
    if (direction === 1) {
      if (index >= sliderLength - 1) index = -1;
      index++;
      positionX = -index * sliderItemWight;
      sliderMain.style = `transform: translateX(${positionX}px)`;
    } else if (direction === -1) {
      if (index <= 0) index = sliderLength;
      index--;
      positionX = -index * sliderItemWight;
      sliderMain.style = `transform: translateX(${positionX}px)`;
    }
  }
  this.setInterval(handleChangeSlide, 3000);
});
