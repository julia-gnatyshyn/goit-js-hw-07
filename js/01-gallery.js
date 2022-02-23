import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector('.gallery');

const markUp = galleryMarkUp(galleryItems);
gallery.innerHTML = markUp;

function galleryMarkUp(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href='${original}'>
        <img
          class="gallery__image"
          src= '${preview}'
          data-source='${original}'
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

gallery.addEventListener('click', onImgClick);

function onImgClick(event) {
  event.preventDefault();

  const clickedImg = event.target;
  if (clickedImg.nodeName !== 'IMG') {
    return;
  }

  clickedImg.src = clickedImg.dataset.source;

  const modal = basicLightbox.create(
    `
		<img src="${clickedImg.src}">
	`,
  );

  modal.show();
  document.addEventListener('keydown', onEscapeClick);
  function onEscapeClick(event) {
    if (event.key === 'Escape') {
      modal.close();
      document.removeEventListener('keydown', onEscapeClick);
    }
  }
}
