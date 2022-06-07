//import logo from './logo.svg';
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  //const [isPopupClose, setIsPopupClose] = React.useState(false);

  function handleEditAvatarClick() {
    console.log(`before: ${isEditAvatarPopupOpen}`);
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    console.log(`after: ${isEditAvatarPopupOpen}`);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopup() {
    //setIsPopupClose(!isPopupClose);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }
  
  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" containerType="popup__container_input_double" isOpen={isEditProfilePopupOpen} onClose={closeAllPopup}>
        <label className="popup__hidden-label" htmlFor="name-profile">
          Ваше имя
        </label>
        <input className="popup__input" id="name-profile" name="popupInputName" type="text" required maxLength="40" minLength="2" placeholder="Введите ваше имя" />
        <span id="name-profile-error" className="popup__input-error"></span>
        <label className="popup__hidden-label" htmlFor="description-profile">
          О себе
        </label>
        <input className="popup__input" id="description-profile" name="popupInputDescription" type="text" required maxLength="200" minLength="2" placeholder="Расскажите о себе" />
        <span id="description-profile-error" className="popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" containerType="popup__container_input_single" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup}>
        <label className="popup__hidden-label" htmlFor="link-avatar">
          Ссылка на аватар
        </label>
        <input className="popup__input" id="link-avatar" name="popupInputLinkAvatar" type="url" required placeholder="Ссылка на аватар" />
        <span id="link-avatar-error" className="popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="card" title="Новое место" buttonText="Создать" containerType="popup__container_input_noinputs" isOpen={isAddPlacePopupOpen} onClose={closeAllPopup}>
        <label className="popup__hidden-label" htmlFor="name-card">
          Название
        </label>
        <input className="popup__input" id="name-card" name="popupInputCard" type="text" required maxLength="30" minLength="2" placeholder="Название" />
        <span id="name-card-error" className="popup__input-error"></span>
        <label className="popup__hidden-label" htmlFor="link-card">
          Ссылка на картинку
        </label>
        <input className="popup__input" id="link-card" name="popupInputLink" type="url" required placeholder="Ссылка на картинку" />
        <span id="link-card-error" className="popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" containerType="popup__container_input_noinputs" isOpen={false} onClose={closeAllPopup}></PopupWithForm>

      <ImagePopup />

      
      <template className="element" id="element-template">
        <div className="element">
          <div className="element__ordering">
            <img className="element__image" src="#" alt="" />
            <button className="element__delete"></button>
            <div className="element__caption-group">
              <h2 className="element__caption"> </h2>
              <div className="element__like-container">
                <button className="element__like" type="button"></button>
                <span className="element__like-quantity" id="like-quantity"></span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}
