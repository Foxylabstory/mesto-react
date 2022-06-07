export default function Card({ src, name, likes, keyId}) {
  return (
    <div className="element" key={keyId}>
      <div className="element__ordering">
        <img className="element__image" src={src} alt={name} />
        <button className="element__delete"></button>
        <div className="element__caption-group">
          <h2 className="element__caption">{name}</h2>
          <div className="element__like-container">
            <button className="element__like" type="button"></button>
            <span className="element__like-quantity" id="like-quantity">{(likes > 0) ? likes : null}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
