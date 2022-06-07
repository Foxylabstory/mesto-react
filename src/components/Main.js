import { api } from "../utils/Api";
import React from "react";

export default function Main(props) {

  const [userName, setUserName] = React.useState('Загрузка');
  const [userDescription, setUserDescription] = React.useState('информации');
  const [userAvatar, setUserAvatar] = React.useState('http://localhost:3000/static/media/spinner.07a3b34f019158f7439b.gif');


  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  });

  return (
    <>
      <main className="main">
        <section className="profile" aria-label="секция описывающая профиль" id="userId">
          <button className="profile__avatar" id="profileAvatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></button>
          <div className="profile__info">
            <div className="profile__name-block">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" id="profile-edit-button" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
          <button className="profile__add-button" id="profile-add-button" type="button" onClick={props.onAddPlace}></button>
        </section>

        <section className="elements" aria-label="секция описывающая места"></section>
      </main>
    </>
  );
}
