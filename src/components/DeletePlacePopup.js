import PopupWithForm from "./PopupWithForm"

const DeletePlacePopup = (props) => {

  return (
    <PopupWithForm      
      onClose={props.closeAllPopups}
      isOpen={props.isDeleteCard}      
      title={'Удалить?'}
      action={'Ok'}
      name={`delete`}

    >
      <div className="popup popup_type_delete-card">
        
      </div>
    </PopupWithForm>
  )
}

export default DeletePlacePopup