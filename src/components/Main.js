import React, { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/currentUserContext';

function Main(props) {
    
  const currentUser = useContext(CurrentUserContext);


  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" id="profile__avatar" />
        </div>
        <div className="profile-desc">
          <div className="profile-desc__wrap">
            <h2 className="profile-desc__title">{currentUser.name}</h2>
            <p className="profile-desc__intro">{currentUser.about}</p>
          </div>
          <button onClick={props.onEditProfile} className="profile__edit-buton" type="button" aria-label="Редактировать профиль"></button>
        </div>
        <button onClick={props.onAddPlace} className="profile__add-button" type="button" aria-label="Добавить фото">
        </button>
      </section>
      <section className="elements">
        {props.cards.map((card)=>{
          return <Card onCardDelete={props.onCardDelete} onCardLike={props.onCardLike} onCardClick={props.onCardClick} card={card} key={card._id}/>   
          
        })}
      </section>
    </main>
  )
}

export default Main