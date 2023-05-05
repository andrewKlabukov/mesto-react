import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup(props) {

  function handleSubmit(event) {
    event.preventDefault();
      props.onUpdateAvatar({
      
    })
  }

  return(    
    <PopupWithForm 
    onClose={props.closeAllPopups}
    isOpen={props.isEditAvatarPopupOpen}
    name={`avatar`}
    title={'Изменить аватар'}
    action={'Сохранить'}
    onUpdateUser={handleSubmit} 
    >
        <input id="input-avatar" type="url" name="avatar" className="popup__input popup__input_type_avatar" placeholder="Ссылка на картинку" required />
        <span id="input-avatar-error" className="popup__error"></span>
    </PopupWithForm>  

  )



}

export default EditAvatarPopup