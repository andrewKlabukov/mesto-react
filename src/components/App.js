import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from '../utils/Api';
import { CurrentUserContext } from "../contexts/currentUserContext";
import  EditProfilePopup from "./EditProfilePopup"
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

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
    .catch((err) => console.log(err));
    api.getInitialCards()
    .then(res => {
      setCards(res)
    })
    .catch((err) => console.log(err));
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
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.likeCard(card._id, isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))    
    })
    .catch((err) => console.log(err));
} 

  function handleCardDelete(card) {    
    api.delCard(card._id)
    .then(()=> {      
      setCards(cards.filter((item) => item._id !== card._id));      
    })
    .catch((err) => console.log(err));
  }

  function handleUpdateUser(updateUser) {    
    api.updateUserInfo(updateUser)
    .then(res => {      
      setCurrentUser(res);
      closeAllPopups();      
    })
    .catch((err) => console.log(err))    
  }

  function handleUpdateAvatar(updateAvatar) {
    api.updateAvatar(updateAvatar)
    .then(res => {      
      setCurrentUser(res)
      closeAllPopups();      
    })
    .catch((err) => console.log(err));
  }

  function handleAddNewCard(newCard) {
    api.addNewCard(newCard)
    .then(res => {
      setCards([res, ...cards]);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }  

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
        <Header />
        <Main 
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
          onCardClick={handleCardClick}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}                 
          cards={cards}
        />
        <Footer />
        <EditProfilePopup
          closeAllPopups={closeAllPopups}
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          onUpdateUser={handleUpdateUser}
          currentUser={currentUser}             
        />
        < AddPlacePopup
          closeAllPopups={closeAllPopups}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          onAddNewCard={handleAddNewCard}
        />
        <EditAvatarPopup
          closeAllPopups={closeAllPopups}
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}          
          onUpdateAvatar={handleUpdateAvatar}      
        />
      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <button aria-label="Закрыть" className="popup__button-close" type="button"></button>
          <h2 className="popup__title">Вы уверены</h2>
          <form className="popup__form popup__form_type_place" name="form-place" noValidate>
            <button className="popup__button popup__button-submit" type="submit">Да</button>
          </form>
        </div>
      </div>
        <ImagePopup
          onCardClick={handleCardClick}
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
          title={`image`}
        />
</div>
    </CurrentUserContext.Provider>
  );
}

export default App;
