<<<<<<< HEAD
import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlace, isRenderLoading, renderLoading } =
    props;

  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handlleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    renderLoading();
      onAddPlace({
        name,
        link,
    });
  }

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="new-card"
      title="Новое место"
      textsubmit="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isRenderLoading={isRenderLoading}
      renderLoadingButtonText="Добавление..."
      children={
        <fieldset className="form__set">
          <label className="form__field">
            <input
              className="form__input form__input_type_image-name"
              onChange={handlleNameChange}
              value={name}
              type="text"
              name="name"
              id="imagename"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="form__input-error imagename-error"></span>
          </label>
          <label className="form__field">
            <input
              className="form__input form__input_type_image-link"
              onChange={handleLinkChange}
              value={link}
              type="url"
              name="link"
              id="imagelink"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error imagelink-error"></span>
          </label>
        </fieldset>
      }
    />
  );
}

export default AddPlacePopup;
=======
import PopupWithForm from "./PopupWithForm"
import React, {useState, useEffect} from "react";

function AddPlacePopup(props) {

  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeTitle(event) {
    setTitle(event.target.value)
  }

  function handleChangeLink(event) {
    setLink(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onAddNewCard({
      name: title,
      link: link
    })    
  }

  React.useEffect(() => {
    setTitle('');
    setLink('');
  }, [props.isAddPlacePopupOpen])

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
>>>>>>> b6dfb0901bb5bc2d55476775daa12f4ff40abdbd
