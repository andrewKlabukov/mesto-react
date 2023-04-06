import React from 'react';
import avatarImg from '../images/kusto.jpg'

function Main(props) {  
  
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img src={avatarImg} alt="Аватар" className="profile__avatar" id="profile__avatar" />
        </div>
        <div className="profile-desc">
          <div className="profile-desc__wrap">
            <h2 className="profile-desc__title">Juaque</h2>
            <p className="profile-desc__intro">resercher</p>
          </div>
          <button onClick={props.onEditProfile} className="profile__edit-buton" type="button" aria-label="Редактировать профиль"></button>
        </div>
        <button onClick={props.onAddPlace} className="profile__add-button" type="button" aria-label="Добавить фото">
        </button>
      </section>
      <section className="elements">
      </section>
    </main>
  )
}

export default Main