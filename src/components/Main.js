export default function Main(props) {


  return (
    <>
      <main className="main">
        <section className="profile" aria-label="секция описывающая профиль">
          <button className="profile__avatar" id="profileAvatar" onClick={props.onEditAvatar}></button>
          <div className="profile__info">
            <div className="profile__name-block">
              <h1 className="profile__name">Загрузка</h1>
              <button className="profile__edit-button" id="profile-edit-button" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__description">информации</p>
          </div>
          <button className="profile__add-button" id="profile-add-button" type="button" onClick={props.onAddPlace}></button>
        </section>

        <section className="elements" aria-label="секция описывающая места"></section>
      </main>
    </>
  );
}
