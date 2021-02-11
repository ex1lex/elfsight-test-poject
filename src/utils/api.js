const _baseUrl = "https://jsonplaceholder.typicode.com";

export const _handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`));
};

export const errors = (error) => {
  console.log(error);
};

export const getUsers = () => {
  return fetch(`${_baseUrl}/users`).then(_handleResponse);
};

export const getAlbums = () => {
  return fetch(`${_baseUrl}/albums`).then(_handleResponse);
};

export const getPhotos = () => {
  return fetch(`${_baseUrl}/photos`).then(_handleResponse);
};
