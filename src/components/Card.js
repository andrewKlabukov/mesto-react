import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/currentUserContext';

function Card(props) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `element__button ${isLiked ? 'element__button_active' : ''}` 
  );
  
  function handleCardClick() {
    props.onCardClick(props.card);

  }

  function handleLikeClick() {
    props.onCardLike(props.card);   
  }

  function handleCardDelete() {
    props.onCardDelete(props.card);
  }

  return (
    
      <article className="element">
        {isOwn && 
          <button onClick={handleCardDelete} className="element__basket" aria-label="Удалить фото"></button>
        }
        <img onClick={handleCardClick} alt={props.card.name} src={props.card.link} className="element__img" />
        <div className="element__wrap">
          <h2 className="element__title">{props.card.name}</h2>
          <div className="element__wrap-like">
            <button onClick={handleLikeClick} className={cardLikeButtonClassName} aria-label="Поставить лайк"></button>
            <span className="element__button-counter">{props.card.likes.length}</span>
          </div>
        </div>
      </article>
    
  )
}

export default Card