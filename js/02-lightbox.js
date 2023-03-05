import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryEl = galleryItems.map(imgOptions => `   
  <a class="gallery__link" href="${imgOptions.original}">
    <img
      class="gallery__image"
      src="${imgOptions.preview}"
      href="${imgOptions.original}"
      alt="${imgOptions.description}"
    />
  </a>
</li>`
)

const ulElement = document.querySelector(".gallery");
ulElement.insertAdjacentHTML("afterbegin", galeryEl.join(""))

ulElement.addEventListener("click", openImg);
let gallery = new SimpleLightbox('.gallery a');


gallery.defaultOptions.captions = true;
gallery.defaultOptions.captionsData = "alt";
gallery.defaultOptions.captionDelay = 250;



function openImg(event) {
    event.preventDefault();

    gallery.open(event.target);
        
    }

// console.log(galleryItems);
