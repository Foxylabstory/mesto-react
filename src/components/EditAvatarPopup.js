import { createRef } from "react";
import PopupWithForm from "./PopupWithForm";
export default function EditAvatarPopup(props) {
  const linkForAvatar = createRef(null);
 
  /*useEffect(() => {
    linkForAvatar.current.value = '';
  }, [linkForAvatar]);*/

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
        avatar: linkForAvatar.current.value,
    });
    linkForAvatar.current.value = '';
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      containerType="popup__container_input_single"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__hidden-label" htmlFor="link-avatar">
        Ссылка на аватар
      </label>
      <input
        className="popup__input"
        id="link-avatar"
        name="popupInputLinkAvatar"
        type="url"
        required
        placeholder="Ссылка на аватар"
        ref={linkForAvatar}
      />
      <span id="link-avatar-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}
