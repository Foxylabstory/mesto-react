export const BASE_URL = "https://auth.nomoreparties.co";

const isOk = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(`Произошла ошибка: ${response.status}`);
};

export const register = (password, email) => {
    console.log(`Регистрация: ${JSON.stringify({password, email})}`);
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({password, email})
  }).then(isOk);
};

export const authorization = (password, email) => {
  console.log(`Авторизация: ${JSON.stringify({password, email})}`);
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({password, email})
  }).then(isOk);
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  }).then(isOk);
};
