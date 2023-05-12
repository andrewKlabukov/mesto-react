import PopupWithForm from "./PopupWithForm";
import React, { useContext, useEffect, useState} from "react";
import { CurrentUserContext } from "../contexts/currentUserContext";

function EditProfilePopup(props) {

  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')  

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeDesc(e) {
    setDesc(e.target.value)
  }

  useEffect(()=>{
    setName(currentUser.name)
    setDesc(currentUser.about)    
  }, [currentUser, props.isEditProfilePopupOpen])  

  function handleSubmit(event) {    
    event.preventDefault();
    props.onUpdateUser({
      name: name,
      about: desc
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
      <input value={name} onChange={handleChangeName} id="input-name" type="text" name="name" className="popup__input popup__input_type_name" placeholder="Укажите имя" minLength="2" maxLength="40" required />
      <span id="input-name-error" className="popup__error"></span>
      <input value={desc} onChange={handleChangeDesc} id="input-job" type="text" name="about" className="popup__input popup__input_type_job" placeholder="Укажите професcию" minLength="2" maxLength="200" required />
      <span id="input-job-error" className="popup__error"></span>
      
    </PopupWithForm>
  )
}

export default EditProfilePopup