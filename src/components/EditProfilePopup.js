<<<<<<< HEAD
import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
=======
import PopupWithForm from "./PopupWithForm";
import React, { useContext, useEffect, useState} from "react";
import { CurrentUserContext } from "../contexts/currentUserContext";
>>>>>>> b6dfb0901bb5bc2d55476775daa12f4ff40abdbd

function EditProfilePopup(props) {
  const { isOpen, onClose, isRenderLoading, renderLoading } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

<<<<<<< HEAD
  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    renderLoading();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      textsubmit="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isRenderLoading={isRenderLoading}
      renderLoadingButtonText="Сохранение..."
        children={
          <fieldset className="form__set">
            <label className="form__field">
              <input
                className="form__input form__input_type_user-name"
                value={name}
                onChange={handleChangeName}
                type="text"
                name="name"
                id="username"
                placeholder="Укажите своё имя"
                minLength="2"
                maxLength="40"
                required
               />
            <span className="form__input-error username-error"></span>
              </label>
                <label className="form__field">
                  <input
                    className="form__input form__input_type_vocation"
                    value={description}
                    onChange={handleChangeDescription}
                    type="text"
                    name="about"
                    id="vocation"
                    placeholder="Укажите род деятельности"
                    minLength="2"
                    maxLength="200"
                    required
                  />
                  <span className="form__input-error vocation-error"></span>
                </label>
            </fieldset>
        }
     />
  );
=======
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
>>>>>>> b6dfb0901bb5bc2d55476775daa12f4ff40abdbd
}

export default EditProfilePopup;
