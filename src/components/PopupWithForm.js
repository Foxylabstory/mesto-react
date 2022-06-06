export default function PopupWithForm(props) {

  return (
    <>
      <div className={`popup popup_type_${props.name}`} id={props.name}>
        <div className={`popup__container ${props.containerType}`}>
          <h2 className="popup__header">{props.title}</h2>
          <form
            className="popup__form"
            id={`form-${props.name}`}
            name={props.name}
            autoComplete="on"
            noValidate
          >
            <fieldset className="popup__fieldset">
              {props.children}
              <button className="popup__button" type="submit" disabled>
                {props.buttonText}
              </button>
            </fieldset>
          </form>
          <button
            className={`popup__form-closer popup__form-closer_${props.name}`}
            id={`${props.name}-closer`}
            type="button"
            aria-label="Закрыть форму"
          ></button>
        </div>
      </div>
    </>
  );
}