function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }
  return (
    <article className="element">
      <button className="element__basket" aria-label="Удалить фото"></button>
      <img onClick={handleCardClick} alt={props.card.name} src={props.card.link} className="element__img" />
      <div className="element__wrap">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__wrap-like">
          <button className="element__button" aria-label="Поставить лайк"></button>
          <span className="element__button-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  )
}

export default Card