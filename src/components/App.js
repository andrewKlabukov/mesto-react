import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Register from "./Register";
import Login from "./Login";
import InfoTooltip from "./InfoTooltip";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import DeletedCardPopup from "./DeleteCardPopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import * as apiAuth from "../utils/apiAuth";
import ProtectedRoute from "./ProtectedRoute";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [imagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [isRenderLoading, setIsRenderLoading] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isInfoTooltipPopup, setIsInfoTooltipPopup] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isSignIn, setIsSignIn] = React.useState(true);

  const navigate = useNavigate();


  useEffect(() => {
    if (loggedIn) {
      api.getUserInfo()
        .then(res => {
        setCurrentUser(res)
      })
      api.getInitialCards()
        .then(res => {
        setCards(res)
      })
    }
  }, [loggedIn]);


  function handleCardClick(card) {
    setImagePopupOpen(true)
    setSelectedCard(card);
  }

  function renderLoading() {
    setIsRenderLoading((isRenderLoading) => !isRenderLoading);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }
  function handleDeleteCardClick(card) {
    setSelectedCard(card);
    setIsDeleteCardPopupOpen(true);
  }

  function openInfoTooltipPopup(isSignIn) {
    setIsInfoTooltipPopup(true);
    setIsSignIn(isSignIn);
  }

  function closePopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setIsInfoTooltipPopup(false);
    setSelectedCard({});
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

  function handleCardDelete() {
    api.delCard(selectedCard._id)
      .then(() => {
      setCards((cards) =>
        cards.filter((item) => item._id !== selectedCard._id)
      );
    })
    .then(() => closePopups())
    .catch((err) => {
      console.log(err);
      openInfoTooltipPopup(false);
    })
    .finally(() => renderLoading());
  }

  function handleAddCard(card) {
    api.addNewCard(card)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closePopups();
    })
    .catch((err) => {
      console.log(err);
      openInfoTooltipPopup(false);
    })
    .finally(() => renderLoading());
  }

  function handleUpdateUser(userData) {
    api.updateUserInfo(userData)
      .then((userDataServer) => {
        setCurrentUser({ ...currentUser, ...userDataServer });
        closePopups();
      })
      .catch((err) => {
        console.log(err);
        openInfoTooltipPopup(false);
      })
      .finally(() => renderLoading());
  }

  function handleUpdateAvatar(userAvatar) {
    api.updateAvatar(userAvatar)
      .then((userAvatarServer) => {
        setCurrentUser({ ...currentUser, ...userAvatarServer });
        closePopups();
    })
      .catch((err) => {
        console.log(err);
        openInfoTooltipPopup(false);
    })
      .finally(() => renderLoading());
  }

  function checkToken() {
    const token = localStorage.getItem("jwt");
    if (token) {
      apiAuth
        .checkToken(token)
          .then((res) => {
            if (res && res.data) {
              setLoggedIn(true);
              setCurrentUser({
                ...currentUser,
                email: res.data.email,
        });
          navigate("/");
      }
    })
    .catch((err) => {
      console.log(err);
      openInfoTooltipPopup(false);
    });
    }
  }
  useEffect(() => {
    checkToken();
  }, []);

  function handleRegister(regData) {
    apiAuth
      .register(regData)
      .then((res) => {
        if (res && res.data) {
          openInfoTooltipPopup(true);
          navigate("/sign-in");
        }
      })
    .catch((err) => {
      console.log(err);
      openInfoTooltipPopup(false);
    });
  }

  function handleLogin(loginData) {
    apiAuth
      .login(loginData)
      .then((res) => {
        if (res && res.token) {
          setCurrentUser({ ...currentUser, email: loginData.email });
            localStorage.setItem("jwt", res.token);
              setLoggedIn(true);
              navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        openInfoTooltipPopup(false);
      });
  }

  function logOut() {
    setLoggedIn(false);
    setCurrentUser('');
    localStorage.removeItem("jwt");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header
            loggedIn={loggedIn}
            email={currentUser.email}
            logOut={logOut}
          />

          <Routes>
            <Route
              path="/sign-up"
              element={<Register onRegister={handleRegister} />}
            />
            <Route
              path="/sign-in"
              element={<Login onLogin={handleLogin} />}
            />
            <Route
              path="/"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={Main}
                  onEditAvatar={handleEditAvatarClick}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleDeleteCardClick}
                  cards={cards}
                />
              }
            />
              </Routes>

                <EditProfilePopup
                  isOpen={isEditProfilePopupOpen}
                  onClose={closePopups}
                  onUpdateUser={handleUpdateUser}
                  isRenderLoading={isRenderLoading}
                  renderLoading={renderLoading}
                />

                <AddPlacePopup
                  isOpen={isAddPlacePopupOpen}
                  onClose={closePopups}
                  onAddPlace={handleAddCard}
                  isRenderLoading={isRenderLoading}
                  renderLoading={renderLoading}
                />

                <ImagePopup
                  card={selectedCard}
                  isOpen={imagePopupOpen}
                  onClose={closePopups}
                />

                <DeletedCardPopup
                  isOpen={isDeleteCardPopupOpen}
                  onClose={closePopups}
                  onDeleteCard={handleCardDelete}
                  isRenderLoading={isRenderLoading}
                  renderLoading={renderLoading}
                />

                <EditAvatarPopup
                  isOpen={isEditAvatarPopupOpen}
                  onClose={closePopups}
                  onUpdateAvatar={handleUpdateAvatar}
                  isRenderLoading={isRenderLoading}
                  renderLoading={renderLoading}
                />

                <InfoTooltip
                  name="tooltip"
                  isOpen={isInfoTooltipPopup}
                  onClose={closePopups}
                  isSignIn={isSignIn}
                />

                <Footer loggedIn={loggedIn} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
