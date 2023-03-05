import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox'


const galeryEl = galleryItems.map(imgOptions => `<div class="gallery__item">
  <a class="gallery__link" href="${imgOptions.original}">
    <img
      class="gallery__image"
      src="${imgOptions.preview}"
      data-source="${imgOptions.original}"
      alt="${imgOptions.description}"
    />
  </a>
</div>`
)

const divElement = document.querySelector(".gallery");
divElement.insertAdjacentHTML("afterbegin", galeryEl.join(""))

divElement.addEventListener("click", openImg);

function openImg(event) {
    event.preventDefault();

   

    const instance = basicLightbox.create(`
        <div class="modal">
            <img src=${event.target.dataset.source} alt=${event.target.alt} >
        </div>
    `)

    instance.show()
    
    window.addEventListener("keydown", close);
    
    function close (event) {
            if (event.key === "Escape") {
                instance.close();
                window.removeEventListener("keydown", close);
            }
        }
}


console.log(" ");
