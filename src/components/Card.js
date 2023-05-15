import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const { card, onCardClick, onCardLike, onCardDelete } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardRecycleBinClassName = `card__recycle-bin ${
    isOwn ? "card__recycle-bin_visible" : ""
  }`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardButtonLikeClassName = `card__button-like ${
    isLiked ? "card__button-like_active" : ""
  }`;

  function handleCardClick() {
    onCardClick(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
<<<<<<< HEAD
    <li className="card" aria-label={card.name}>
      <img
        loading="lazy"
        className="card__photo"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="card__container-area">
        <div className="card__container">
          <h2 className="card__title">{card.name}</h2>
            <div className="card__like-container">
              <button
                className={cardButtonLikeClassName}
                  type="button"
                  aria-label="Нравится"
                  onClick={handleCardLike}
              ></button>
                <span className="card__like-counter">
                  {card.likes.length}
                </span>
            </div>
          </div>
        </div>
        <button
          className={cardRecycleBinClassName}
          type="button"
          aria-label="Удалить"
          onClick={handleCardDelete}
        ></button>
    </li>
  );
=======
    
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
>>>>>>> b6dfb0901bb5bc2d55476775daa12f4ff40abdbd
}

export default Card;
