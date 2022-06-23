import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = currentUser._id === props.owner._id;
  const isLiked = props.likes.some(i => i._id === currentUser._id);
  function handleClick() {
    props.onCardClick({name: props.name, link: props.src});
  }

  function handleLikeClick() {
    props.onCardLike(props);
  }

  return (
    <div className="element" key={props.keyId}>
      <div className="element__ordering">
        <img className="element__image" src={props.src} alt={props.name} onClick={handleClick} />
        {isOwn && <button className="element__delete"></button>}
        <div className="element__caption-group">
          <h2 className="element__caption">{props.name}</h2>
          <div className="element__like-container">
            <button className={`element__like ${isLiked && 'element__like_active'}`} type="button" onClick={handleLikeClick}></button>
            <span className="element__like-quantity" id="like-quantity">
              {props.likes.length > 0 ? props.likes.length : null}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
