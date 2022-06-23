class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _isOk(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Произошла ошибка: ${res.status}`);
  };

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me/`, {
      method: 'GET',
      headers: this._headers
    }).then(this._isOk);
  }

  setUserInfoToApi(data) {
    return fetch(`${this._baseUrl}users/me/`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(this._isOk);
  }

  setUserPicToApi(url) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(url)
    }).then(this._isOk);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      method: 'GET',
      headers: this._headers
    }).then(this._isOk);
  }

  setNewCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(this._isOk);
  }
  
  deleteCard(id) {
    return fetch(`${this._baseUrl}cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._isOk);
  }

  putLike(card) {
    return fetch(`${this._baseUrl}cards/${card}/likes`, {
      method: 'PUT',
      headers: this._headers
    }).then(this._isOk);
  }

  deleteLike(card) {
    return fetch(`${this._baseUrl}cards/${card}/likes`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._isOk);
  }

  changeLikeCardStatus(card, isLiked){
    isLiked ? this.deleteLike(card) : this.putLike(card);
  }
}



const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-41/",
  headers: {
    authorization: "05f5ca8c-a3fe-4352-832f-702af14f0f21",
    "Content-Type": "application/json",
  },
});

export {api};