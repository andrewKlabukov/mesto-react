import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
    <div className="page">
      <Header/>
      <Main/>
      <Footer/>      
      <div className="popup popup_type_profile">
        <div className="popup__container">
          <button aria-label="Закрыть" className="popup__button-close" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form popup__form_type_profile" name="form-profile" noValidate>
            <input id="input-name" type="text" name="name" className="popup__input popup__input_type_name" placeholder="Укажите имя" minLength="2" maxLength="40" required/>
            <span id="input-name-error" className="popup__error"></span>
            <input id="input-job" type="text" name="about" className="popup__input popup__input_type_job" placeholder="Укажите професcию" minLength="2" maxLength="200" required/>
            <span id="input-job-error" className="popup__error"></span>
            <button className="popup__button popup__button-submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_place">
        <div className="popup__container">
          <button aria-label="Закрыть" className="popup__button-close" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form popup__form_type_place" name="form-place" noValidate>
            <input id="input-title" type="text" name="title" className="popup__input popup__input_type_title" placeholder="Название" minLength="2" maxLength="30" required/>
            <span id="input-title-error" className="popup__error"></span>
            <input id="input-link" type="url" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required/>
            <span id="input-link-error" className="popup__error"></span>
            <button className="popup__button popup__button-submit" type="submit">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button aria-label="Закрыть" className="popup__button-close" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form popup__form_type_avatar" name="form-avatar" noValidate>        
            <input id="input-avatar" type="url" name="avatar" className="popup__input popup__input_type_avatar" placeholder="Ссылка на картинку" required/>
            <span id="input-avatar-error" className="popup__error"></span>
            <button className="popup__button popup__button-submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <button aria-label="Закрыть" className="popup__button-close" type="button"></button>
          <h2 className="popup__title">Вы уверены</h2>
          <form className="popup__form popup__form_type_place" name="form-place" noValidate>
            <button className="popup__button popup__button-submit" type="submit">Да</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_image">
        <div className="popup__container popup__container_type_image">
          <button aria-label="Закрыть" className="popup__button-close" type="button"></button>
          <img alt="#" className="popup__img" src="#"/>
          <h2 className="popup__name"></h2>
        </div>
      </div>
      <template className="template-card">
        <article className="element">
          <button className="element__basket" aria-label="Удалить фото"></button>
          <img alt="#" className="element__img"/>
          <div className="element__wrap">
            <h2 className="element__title"></h2>
            <div className="element__wrap-like">
              <button className="element__button" aria-label="Поставить лайк"></button>
              <span className="element__button-counter"></span>
            </div>
          </div>
        </article>
      </template>
</div>
</>
  );
}

export default App;
