export default function ImagePopup() {
  return(
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
  )
}