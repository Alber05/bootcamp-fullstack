import React from 'react'
import style from './contactForm.module.css'

const ContactForm = () => {
  return (
    <section className={style.formSection}>
      <h2 className={style.formSectionTitle}>Añadir un contacto</h2>
      <form className={style.form}>
        <div className={style.inputsContainer}>
          <input
            type='text'
            id='name'
            className={style.input}
            placeholder='Nombre'
            required
          />
          <input
            type='text'
            id='number'
            className={style.input}
            placeholder='Teléfono'
            required
          />
        </div>
        <div className={style.submitContainer}>
          <button>Enviar</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
