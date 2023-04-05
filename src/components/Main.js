function Main() {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar">
          <img src="<%=require('./images/kusto.jpg')%>" alt="Аватар" className="profile__avatar" id="profile__avatar" />
        </div>
        <div className="profile-desc">
          <div className="profile-desc__wrap">
            <h2 className="profile-desc__title">Juaque</h2>
            <p className="profile-desc__intro">resercher</p>
          </div>
          <button className="profile__edit-buton" type="button" aria-label="Редактировать профиль"></button>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить фото">
        </button>
      </section>
      <section className="elements">
      </section>
    </main>
  )
}

export default Main