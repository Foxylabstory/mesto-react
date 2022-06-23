import { api } from "../utils/Api";
import { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (isLiked) {
      api.deleteLike(card.cardId).then((data) => {
        setCards((state) => state.map((c) => (c._id === card.cardId ? data : c))
      );
      })
    } else {
      api.putLike(card.cardId).then((data) => {
        setCards((state) => state.map((item) => (item._id === card.cardId ? data : item)));
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card.cardId)
    .then(() => {
      setCards((state) => state.filter((item) => item._id !== card.cardId));
    })
    .catch((error) => {
      console.log(error);
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
            src={card.link}
            name={card.name}
            key={card._id}
            likes={card.likes}
            owner={card.owner}
            cardId={card._id}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
