export default function ImagePopup({card, onClose}) {
  return(
    <div className={`popup ${(card.link === '') ? '' : 'popup_opened'}`} id="popup-image">
    <figure className="popup__figure">
      <button
        className="popup__form-closer popup__form-closer_img"
        id="image-closer"
        type="button"
        aria-label="Закрыть изображение"
        onClick={onClose}
      ></button>
      <img className="popup__figure-img" src={card.link} alt={card.name} />
      <figcaption className="popup__figure-caption">{card.name}</figcaption>
    </figure>
  </div>
  )
}