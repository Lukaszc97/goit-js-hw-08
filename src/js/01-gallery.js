import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const gallery = galleryItems.map(({ preview, original, description }) => `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
    </a>
  </div>
`).join('');

const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML('beforeend', gallery);

galleryList.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  
  const instance = new SimpleLightbox(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  instance.open();
});
