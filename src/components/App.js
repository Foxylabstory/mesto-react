//import logo from './logo.svg';
import { useEffect, useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
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
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
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

  function handleUpdateAvatar(link) {
    api
      .setUserPicToApi(link)
      .then((data) => {
        setCurrentUser(data);
      })
      .then(closeAllPopup())
      .catch((error) => console.log(error));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (isLiked) {
      api
        .deleteLike(card.cardId)
        .then((data) => {
          setCards((state) =>
            state.map((c) => (c._id === card.cardId ? data : c))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      api
        .putLike(card.cardId)
        .then((data) => {
          setCards((state) =>
            state.map((item) => (item._id === card.cardId ? data : item))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card.cardId)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card.cardId));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleAddPlaceSubmit(card) {
    api
      .setNewCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
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
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopup}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopup}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopup}
          onAddPlace={handleAddPlaceSubmit}
        />

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
