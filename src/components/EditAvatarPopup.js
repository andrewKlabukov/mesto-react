<<<<<<< HEAD
import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar, isRenderLoading, renderLoading } =
    props;
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef(currentUser.avatar);

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    renderLoading();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      textsubmit="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isRenderLoading={isRenderLoading}
      renderLoadingButtonText="Обновление..."
      children={
        <fieldset className="form__set">
          <label className="form__field">
            <input
              className="form__input form__input_type_avatar"
              ref={avatarRef}
              type="url"
              name="avatar"
              id="avatar"
              placeholder="Ссылка на аватар"
              required
            />
            <span className="form__input-error avatar-error"></span>
          </label>
        </fieldset>
      }
    />
  );
=======
import React, { useRef, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {  

  const refAvatarLink = useRef('')

  function handleSubmit(event) {
    event.preventDefault();
      props.onUpdateAvatar({
      avatar: refAvatarLink.current.value,
    })
    
  }

  React.useEffect(() => {
    refAvatarLink.current.value = ''
  }, [props.isEditAvatarPopupOpen]);

  return(    
    <PopupWithForm
      onSubmit={handleSubmit}
      onClose={props.closeAllPopups}
      isOpen={props.isEditAvatarPopupOpen}
      name={`avatar`}
      title={'Изменить аватар'}
      action={'Сохранить'}
      onUpdateUser={handleSubmit} 
    >
      <input ref={refAvatarLink} id="input-avatar" type="url" name="avatar" className="popup__input popup__input_type_avatar" placeholder="Ссылка на картинку" required />
      <span id="input-avatar-error" className="popup__error"></span>
    </PopupWithForm>  

  )



>>>>>>> b6dfb0901bb5bc2d55476775daa12f4ff40abdbd
}

export default EditAvatarPopup;
