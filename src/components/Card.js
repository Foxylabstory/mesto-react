export default function Card(props) {
  function handleClick() {
    props.onCardClick({name: props.name, link: props.src});
  }

  return (
    <div className="element" key={props.keyId}>
      <div className="element__ordering">
        <img className="element__image" src={props.src} alt={props.name} onClick={handleClick} />
        <button className="element__delete"></button>
        <div className="element__caption-group">
          <h2 className="element__caption">{props.name}</h2>
          <div className="element__like-container">
            <button className="element__like" type="button"></button>
            <span className="element__like-quantity" id="like-quantity">
              {props.likes > 0 ? props.likes : null}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
