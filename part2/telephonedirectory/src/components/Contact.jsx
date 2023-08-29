import React from 'react'
import style from './contact.module.css'

const Contact = ({ contactsToShow }) => {
  return (
    <div className={style.contactsSection}>
      <h2>Contactos</h2>
      <div className={style.contactsContainer}>
        {contactsToShow.map((contact) => (
          <div key={contact.id} className={style.contact}>
            <p>
              <b>Nombre:</b> {contact.name}
            </p>
            <p>
              <b>Teléfono</b> {contact.number}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact
