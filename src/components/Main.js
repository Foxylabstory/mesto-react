import { api } from "../utils/Api";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = useState("Загрузка");
  const [userDescription, setUserDescription] = useState("информации");
  const [userAvatar, setUserAvatar] = useState(
    "http://localhost:3000/static/media/spinner.07a3b34f019158f7439b.gif"
  );
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(
          data.map((item) => ({
            src: item.link,
            name: item.name,
            likes: item.likes.length,
            keyId: item._id,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          style={{ backgroundImage: `url(${userAvatar})` }}
        ></button>
        <div className="profile__info">
          <div className="profile__name-block">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              id="profile-edit-button"
              type="button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
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
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}
