const PopupWithForm = (props)=> {
  
  return (
    <div className={`${props.isOpen ? 'popup_opened': ''} popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button onClick={props.onClose} aria-label="Закрыть" className="popup__button-close" type="button"></button>
        <h2 className={'popup__title'}>{props.title}</h2>
        <form onSubmit={props.onSubmit} className="popup__form popup__form_type_profile" name={`form-${props.name}`} noValidate>
          {props.children}
          <button className="popup__button popup__button-submit" type="submit">{props.action}</button>         
        </form>
        
      </div>
    </div>
  )
}

export default PopupWithForm