import { api } from "../utils/Api";
import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(
          data.map((item) => ({
            src: item.link,
            name: item.name,
            likes: item.likes,
            keyId: item._id,
            owner: item.owner
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
} 

  return (
    <main className="main">
      <section
        className="profile"
        aria-label="секция описывающая профиль"
        id="userId"
      >
        <button
          className="profile__avatar"
          id="profileAvatar"
          onClick={props.onEditAvatar}
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        ></button>
        <div className="profile__info">
          <div className="profile__name-block">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              id="profile-edit-button"
              type="button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          id="profile-add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements" aria-label="секция описывающая места">
        {cards.map((card) => (
          <Card
            src={card.src}
            name={card.name}
            key={card.keyId}
            likes={card.likes}
            owner={card.owner}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}
