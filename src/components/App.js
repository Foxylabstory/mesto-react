//import logo from './logo.svg';
import { useEffect, useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";

import { api } from "../utils/Api";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [currentUser, setCurrentUser] = useState({
    name: "Загрузка",
    about: "информации",
    avatar: " ",
    _id: " ",
  });

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser({
          name: data.name,
          about: data.about,
          avatar: data.avatar,
          _id: data._id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard({ name: card.name, link: card.link });
  }

  function closeAllPopup() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  function handleUpdateUser(user) {
    console.log(user);
    api
      .setUserInfoToApi(user)
      .then((data) => {
        setCurrentUser({
          name: data.name,
          about: data.about,
          avatar: data.avatar,
          _id: data._id,
        });
      })
      .then(closeAllPopup())
      .catch((error) => console.log(error));
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopup}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          containerType="popup__container_input_single"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopup}
        >
          <label className="popup__hidden-label" htmlFor="link-avatar">
            Ссылка на аватар
          </label>
          <input
            className="popup__input"
            id="link-avatar"
            name="popupInputLinkAvatar"
            type="url"
            required
            placeholder="Ссылка на аватар"
          />
          <span id="link-avatar-error" className="popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="card"
          title="Новое место"
          buttonText="Создать"
          containerType="popup__container_input_noinputs"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopup}
        >
          <label className="popup__hidden-label" htmlFor="name-card">
            Название
          </label>
          <input
            className="popup__input"
            id="name-card"
            name="popupInputCard"
            type="text"
            required
            maxLength="30"
            minLength="2"
            placeholder="Название"
          />
          <span id="name-card-error" className="popup__input-error"></span>
          <label className="popup__hidden-label" htmlFor="link-card">
            Ссылка на картинку
          </label>
          <input
            className="popup__input"
            id="link-card"
            name="popupInputLink"
            type="url"
            required
            placeholder="Ссылка на картинку"
          />
          <span id="link-card-error" className="popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          buttonText="Да"
          containerType="popup__container_input_noinputs"
          isOpen={false}
          onClose={closeAllPopup}
        ></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopup} />
      </CurrentUserContext.Provider>
    </div>
  );
}
