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



}

export default EditAvatarPopup