//lightbox init
const lightbox = GLightbox({
    selector:  '.glightbox1',
    loop: true,
});

//set gallery height according to the right page part content
let mqlist = window.matchMedia("(min-width: 600px)");

mqlist.addEventListener('change', (event) => adjustGallery(event.target));

window.addEventListener('load', (event) => adjustGallery(mqlist));

window.addEventListener('resize', (event) => adjustGallery(mqlist));

function adjustGallery(mqlist){
  let gallery = document.getElementById('gallery');
  if (mqlist.matches) {
    let rheight = document.getElementById('wrapper').offsetHeight;
    gallery.style.height = rheight+'px';
  } else {
    gallery.style.height = 'auto';
  }
}