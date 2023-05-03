const ImagePopup = (props) => {
  
  return (
    <div className={`${props.isOpen ? 'popup_opened': ''} popup popup_type_${props.title}`}>
      <div className="popup__container popup__container_type_image">
        <button onClick={props.onClose} aria-label="Закрыть" className="popup__button-close" type="button"></button>
        <img alt={props.card.name} className="popup__img" src={props.card.link} />
        <h2 className="popup__name">{props.card.name}</h2>
      </div>
    </div>
  )
}
export default ImagePopup