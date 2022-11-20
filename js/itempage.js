//lightbox init
const lightbox = GLightbox({
    selector:  '.glightbox1',
    loop: true,
});
//set gallery height according to the right page part content
function adjustGallery(mqlist){
  let gallery = document.getElementById('gallery');
  if (mqlist.matches) {
    let rheight = document.getElementById('wrapper').offsetHeight;
    console.log(rheight);
    gallery.style.height = rheight+'px';
  } else {
    gallery.style.height = 'auto';
  }
  console.log(gallery.clientHeight);
}
let mqlist = window.matchMedia("(min-width: 600px)");
adjustGallery(mqlist);
mqlist.addEventListener('change', (event) => adjustGallery(event.target));