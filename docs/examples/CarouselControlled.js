/** @jsx React.DOM */

var index = 0;

function renderCarousel () {
  var carouselInstance = (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <CarouselItem>Slide 1</CarouselItem>
      <CarouselItem>Slide 2</CarouselItem>
    </Carousel>
  );
  React.renderComponent(carouselInstance, mountNode);
}

function handleSelect (selectedIndex) {
  //alert('selected ' + selectedIndex);
  index = selectedIndex;
  renderCarousel();
}

renderCarousel();