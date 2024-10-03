const gallery = document.querySelector('.gallery');

export const renderLoading = () => {
  gallery.innerHTML = '<span class="loader"></span>';
};

const createImageCard = ({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => `
<li>
  <a href="${largeImageURL}">
    <div class="image-container">
      <img class="image-preview" src="${webformatURL}" alt="${tags}" />
    </div>
    <div class="card-description">
      <span class="attribute"><span>Likes</span> ${likes}</span>
      <span class="attribute"><span>Views</span> ${views}</span>
      <span class="attribute"><span>Comments</span> ${comments}</span>
      <span class="attribute"><span>Downloads</span> ${downloads}</span>
    </div>
  </a>
</li>
  `;

export const renderImages = images => {
  const cards = images.map(createImageCard).join('');

  gallery.innerHTML = `<ul class="gallery-list">${cards}</ul>`;
};

export const renderError = () => {
  gallery.innerHTML = '';
};
