import PopupWithForm from "./PopupWithForm"
import React, {useState} from "react";

function AddPlacePopup(props) {

  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeTitle(event) {
    setTitle(event.target.value)
  }

  function handleChangeLink(event) {
    setLink(event.target.value)
  }

  function clearForm() {
    setTitle('');
    setLink('')
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onAddNewCard({
      name: title,
      link: link
    })
    clearForm();
  }

  return(
    <PopupWithForm
      onSubmit={handleSubmit}
      onClose={props.closeAllPopups} 
      isOpen={props.isAddPlacePopupOpen} 
      name={`place`} 
      title={'Добавить место'} 
      action={'Создать'} 
    >
      <>
        <input onChange={handleChangeTitle} value={title} id="input-title" type="text" name="title" className="popup__input popup__input_type_title" placeholder="Название" minLength="2" maxLength="30" required />
        <span id="input-title-error" className="popup__error"></span>
        <input onChange={handleChangeLink} value={link} id="input-link" type="url" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required />
        <span id="input-link-error" className="popup__error"></span>
      </>
    </PopupWithForm>
  )



}

export default AddPlacePopup