export default function Main() {
  function handleEditAvatarClick() {
    const popupAvatar = document.querySelector("#avatar");
    popupAvatar.classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    const popupProfile = document.querySelector("#profile");
    popupProfile.classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    const popupCard = document.querySelector("#card");
    popupCard.classList.add("popup_opened");
  }

  return (
    <>
      <main className="main">
        <section className="profile" aria-label="секция описывающая профиль">
          <button className="profile__avatar" id="profileAvatar" onClick={handleEditAvatarClick}></button>
          <div className="profile__info">
            <div className="profile__name-block">
              <h1 className="profile__name">Загрузка</h1>
              <button className="profile__edit-button" id="profile-edit-button" type="button" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__description">информации</p>
          </div>
          <button className="profile__add-button" id="profile-add-button" type="button" onClick={handleAddPlaceClick}></button>
        </section>

        <section className="elements" aria-label="секция описывающая места"></section>
      </main>
    </>
  );
}
