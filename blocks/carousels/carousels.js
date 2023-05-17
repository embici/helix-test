export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`main-carousel`);

  // setup image columns
  [...block.children].forEach((row) => {
      row.classList.add(`carousel-cell`);
  });
    
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true,
    imagesLoaded: true
  });

  flkty.reloadCells(); 
  flkty.resize();

}
