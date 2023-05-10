import PopupWithForm from "./PopupWithForm";
import React, { useContext, useEffect} from "react";
import { CurrentUserContext } from "../contexts/currentUserContext";

function EditProfilePopup(props) {

  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');  

  function handleChangeName(event) {
    setName(event.target.value)
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value)
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [name, description]);

  function handleSubmit(event) {    
    event.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description
    });    
  }

  return(
    <PopupWithForm 
      onSubmit={handleSubmit} 
      onClose={props.closeAllPopups}
      isOpen={props.isEditProfilePopupOpen}
      name={`profile`}
      title={'Редактировать профиль'}
      action={'Сохранить'}
    >
      <input onChange={handleChangeName} defaultValue={currentUser.name} id="input-name" type="text" name="name" className="popup__input popup__input_type_name" placeholder="Укажите имя" minLength="2" maxLength="40" required />
      <span id="input-name-error" className="popup__error"></span>
      <input onChange={handleChangeDescription} defaultValue={currentUser.about} id="input-job" type="text" name="about" className="popup__input popup__input_type_job" placeholder="Укажите професcию" minLength="2" maxLength="200" required />
      <span id="input-job-error" className="popup__error"></span>
      
    </PopupWithForm>
  )
}

export default EditProfilePopup