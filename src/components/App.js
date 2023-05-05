import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from '../utils/Api';
import { CurrentUserContext } from "../contexts/currentUserContext";

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]); 

  useEffect(()=>{
    api.getUserInfo()
    .then(res => {
      setCurrentUser(res)
    })
    api.getInitialCards()
    .then(res => {
      setCards(res)
    })
  }, [])
  

  const handleCardClick = (card)=> {
    setImagePopupOpen(true)
    setSelectedCard(card);    
  }
  const handleEditAvatarClick = ()=> {
    setEditAvatarPopupOpen(true)    
  }
  const handleEditProfileClick = ()=> {
    setEditProfilePopupOpen(true)
  }
  const handleAddPlaceClick = ()=> {
    setAddPlacePopupOpen(true)
  }

  const closeAllPopups = ()=> {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);   ;
    setImagePopupOpen(false);   ;
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    console.log(123)
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.likeCard(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }  
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onCardLike={handleCardLike} onCardClick={handleCardClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} cards={cards} />
        <Footer />
        <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name={`profile`} title={'Редактировать профиль'} action={'Сохранить'} Создать children={
          <>
            <input id="input-name" type="text" name="name" className="popup__input popup__input_type_name" placeholder="Укажите имя" minLength="2" maxLength="40" required />
            <span id="input-name-error" className="popup__error"></span>
            <input id="input-job" type="text" name="about" className="popup__input popup__input_type_job" placeholder="Укажите професcию" minLength="2" maxLength="200" required />
            <span id="input-job-error" className="popup__error"></span>
          </>
        } />
        <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name={`place`} title={'Добавить место'} action={'Создать'} children={
          <>
            <input id="input-title" type="text" name="title" className="popup__input popup__input_type_title" placeholder="Название" minLength="2" maxLength="30" required />
            <span id="input-title-error" className="popup__error"></span>
            <input id="input-link" type="url" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required />
            <span id="input-link-error" className="popup__error"></span>
          </>
        } />
        <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name={`avatar`} title={'Изменить аватар'} action={'Сохранить'} children={
          <>
            <input id="input-avatar" type="url" name="avatar" className="popup__input popup__input_type_avatar" placeholder="Ссылка на картинку" required />
            <span id="input-avatar-error" className="popup__error"></span>
          </>
        } />
        <div className="popup popup_type_delete-card">
          <div className="popup__container">
            <button aria-label="Закрыть" className="popup__button-close" type="button"></button>
            <h2 className="popup__title">Вы уверены</h2>
            <form className="popup__form popup__form_type_place" name="form-place" noValidate>
              <button className="popup__button popup__button-submit" type="submit">Да</button>
            </form>
          </div>
        </div>
        <ImagePopup onCardClick={handleCardClick} card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} title={`image`} />

        <template className="template-card">
          <article className="element">
            <button className="element__basket" aria-label="Удалить фото"></button>
            <img alt="#" className="element__img" />
            <div className="element__wrap">
              <h2 className="element__title"></h2>
              <div className="element__wrap-like">
                <button className="element__button" aria-label="Поставить лайк"></button>
                <span className="element__button-counter"></span>
              </div>
            </div>
          </article>
        </template>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
