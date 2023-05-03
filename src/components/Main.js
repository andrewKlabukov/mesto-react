import React, { useEffect } from 'react';
import avatarImg from '../images/kusto.jpg';
import api from '../utils/Api';
import Card from './Card';

function Main(props) { 
  
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  useEffect(()=>{
    api.getUserInfo()
    .then(res => {
      console.log(res)
      setUserName(res.name)
      setUserDescription(res.about)
      setUserAvatar(res.avatar)
    
    })
    api.getInitialCards()
    .then(res=>{
      console.log(res)
      setCards(res)
    })
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img src={userAvatar} alt="Аватар" className="profile__avatar" id="profile__avatar" />
        </div>
        <div className="profile-desc">
          <div className="profile-desc__wrap">
            <h2 className="profile-desc__title">{userName}</h2>
            <p className="profile-desc__intro">{userDescription}</p>
          </div>
          <button onClick={props.onEditProfile} className="profile__edit-buton" type="button" aria-label="Редактировать профиль"></button>
        </div>
        <button onClick={props.onAddPlace} className="profile__add-button" type="button" aria-label="Добавить фото">
        </button>
      </section>
      <section className="elements">
        {cards.map((card)=>{
          return <Card onCardClick={props.onCardClick} card={card} key={card._id}/>   
          
        })}
      </section>
    </main>
  )
}

export default Main