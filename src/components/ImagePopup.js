const ImagePopup = () => {
  return (
    <div className="popup popup_type_image">
      <div className="popup__container popup__container_type_image">
        <button aria-label="Закрыть" className="popup__button-close" type="button"></button>
        <img alt="#" className="popup__img" src="#" />
        <h2 className="popup__name"></h2>
      </div>
    </div>
  )
}
export default ImagePopup