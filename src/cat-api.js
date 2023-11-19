import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_MEcNzYSdpsKoJ9wiqLl3XxnOe5JuJrttYwn170ZQJ7TFI8KmJTbEfFZhNhn88xWb';

axios.defaults.headers.common['x-api-key'] =
  'live_MEcNzYSdpsKoJ9wiqLl3XxnOe5JuJrttYwn170ZQJ7TFI8KmJTbEfFZhNhn88xWb';

export function fetchBreeds() {
  const END_POINT = 'breeds';
  const params = new URLSearchParams({
    api_key: API_KEY
  });

  return axios
    .get(`${BASE_URL}/${END_POINT}?${params}`)
    .then(({ data }) => data);
}

export function fetchCatByBreed(breedId) {
    const END_POINT = 'images/search';
    const params = new URLSearchParams({
      api_key: API_KEY,
      breed_ids: breedId
    });
  return axios
  .get(`${BASE_URL}/${END_POINT}?${params}`)
  .then (({ data }) => data);
}