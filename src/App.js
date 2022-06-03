//import logo from './logo.svg';
import logoPath from './images/header/mesto-russia-logo.svg';

function App() {
  return (
    <div className="page">
    <header className="header">
      <img className="header__logo" alt="Логотип сайта" src={logoPath} />
    </header>

    <main className="main">
      <section className="profile" aria-label="секция описывающая профиль">
        <button className="profile__avatar"></button>
        <div className="profile__info">
          <div className="profile__name-block">
            <h1 className="profile__name">Загрузка</h1>
            <button
              className="profile__edit-button"
              id="profile-edit-button"
              type="button"
            ></button>
          </div>
          <p className="profile__description">информации</p>
        </div>
        <button
          className="profile__add-button"
          id="profile-add-button"
          type="button"
        ></button>
      </section>

      <section className="elements" aria-label="секция описывающая места"></section>
    </main>
    <footer className="footer">
      <p className="footer__copyright">© 2022. Foxylab</p>
    </footer>
    <div className="popup" id="popup-profile">
      <div className="popup__container">
        <h2 className="popup__header">Редактировать профиль</h2>
        <form
          className="popup__form"
          id="form-profile"
          name="popupFormProfile"
          autocomplete="on"
          novalidate
        >
          <fieldset className="popup__fieldset">
            <label className="popup__hidden-label" for="name-profile"
              >Ваше имя</label
            >
            <input
              className="popup__input"
              id="name-profile"
              name="popupInputName"
              type="text"
              required
              maxlength="40"
              minlength="2"
              placeholder="Введите ваше имя"
            />
            <span id="name-profile-error" className="popup__input-error"></span>
            <label className="popup__hidden-label" for="description-profile"
              >О себе</label
            >
            <input
              className="popup__input"
              id="description-profile"
              name="popupInputDescription"
              type="text"
              required
              maxlength="200"
              minlength="2"
              placeholder="Расскажите о себе"
            />
            <span
              id="description-profile-error"
              className="popup__input-error"
            ></span>
            <button className="popup__button" type="submit" disabled>Сохранить</button>
          </fieldset>
        </form>
        <button
          className="popup__form-closer popup__form-closer_profile"
          id="profile-closer"
          type="button"
          aria-label="Закрыть форму"
        ></button>
      </div>
    </div>

    <div className="popup" id="popup-avatar">
      <div className="popup__container popup__container_input_single">
        <h2 className="popup__header">Обновить аватар</h2>
        <form className="popup__form" id="form-avatar" name="popupFormAvatar" autocomplete="on" novalidate>
          <fieldset className="popup__fieldset">
            <label className="popup__hidden-label" for="link-avatar">Ссылка на аватар</label>
            <input className="popup__input" id="link-avatar" name="popupInputLinkAvatar" type="url" required placeholder="Ссылка на аватар"/>
            <span id="link-avatar-error" className="popup__input-error"></span>
            <button className="popup__button popup__button_type_disable popup__button_type_single-input" type="submit" disabled>Сохранить</button>
          </fieldset>
        </form>
        <button className="popup__form-closer popup__form-closer_avatar" id="avatar-closer" type="button" aria-label="Закрыть форму"></button>
      </div>
    </div>

    <div className="popup" id="popup-card">
      <div className="popup__container">
        <h2 className="popup__header">Новое место</h2>
        <form
          className="popup__form"
          id="form-card"
          name="popupFormCard"
          autocomplete="on"
          novalidate
        >
          <fieldset className="popup__fieldset">
            <label className="popup__hidden-label" for="name-card">Название</label>
            <input
              className="popup__input"
              id="name-card"
              name="popupInputCard"
              type="text"
              required
              maxlength="30"
              minlength="2"
              placeholder="Название"
            />
            <span id="name-card-error" className="popup__input-error"></span>
            <label className="popup__hidden-label" for="link-card"
              >Ссылка на картинку</label
            >
            <input
              className="popup__input"
              id="link-card"
              name="popupInputLink"
              type="url"
              required
              placeholder="Ссылка на картинку"
            />
            <span id="link-card-error" className="popup__input-error"></span>
            <button
              className="popup__button popup__button_type_disable"
              type="submit"
              disabled
            >Создать</button>
          </fieldset>
        </form>
        <button
          className="popup__form-closer popup__form-closer_card"
          id="card-closer"
          type="button"
          aria-label="Закрыть форму"
        ></button>
      </div>
    </div>

    <div className="popup" id="popup-image">
      <figure className="popup__figure">
        <button
          className="popup__form-closer popup__form-closer_img"
          id="image-closer"
          type="button"
          aria-label="Закрыть изображение"
        ></button>
        <img className="popup__figure-img" src="#" alt="" />
        <figcaption className="popup__figure-caption"></figcaption>
      </figure>
    </div>

    <div className="popup" id="popup-confirm">
      <div className="popup__container popup__container_input_noinputs">
        <h2 className="popup__header popup__header_input_noinputs">Вы уверены?</h2>
        <form
          className="popup__form"
          id="form-confirm"
          name="popupConfirm"
        >
          <fieldset className="popup__fieldset">
            <button
              className="popup__button popup__button_type_disable"
              type="submit"
              disabled
            >
              Да
            </button>
          </fieldset>
        </form>
        <button
          className="popup__form-closer popup__form-closer_card"
          id="confirm-closer"
          type="button"
          aria-label="Закрыть форму"
        ></button>
      </div>
    </div>

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

export default App;
