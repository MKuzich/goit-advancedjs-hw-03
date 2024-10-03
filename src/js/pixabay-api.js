const API_KEY = '27957885-8dff7fee3c243073fce7c6825';

const fetchImages = (query, page) => {
  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );
};

export default fetchImages;
