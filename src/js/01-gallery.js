import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
      </a>
    </div>
  `;
  })
  .join('');

const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML('beforeend', gallery);

galleryList.addEventListener('click', onGalleryClick);
let activeIndex;

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  activeIndex = galleryItems.findIndex(
    item => item.original === event.target.dataset.source
  );

  const instance = new SimpleLightbox(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  instance.open();
}
