import { useState, useEffect } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import { crudService } from './assets/services/crudServices'
import Contact from './components/Contact'
import ContactForm from './components/ContactForm'
import Filter from './components/Filter'
import style from './app.module.css'

function App() {
  const [allContacts, setAllContacts] = useState([])
  const [searchedContacts, setSearchedContacts] = useState([])

  useEffect(() => {
    crudService
      .getContacts()
      .then((contactsData) => setAllContacts(contactsData))
  }, [])

  const contactsToShow =
    searchedContacts.length > 0 ? searchedContacts : allContacts

  return (
    <>
      <header className={style.header}>
        <Filter
          allContacts={allContacts}
          setSearchedContacts={setSearchedContacts}
        />
        <button className={style.showButton}>
          <IoMdAddCircle size={40} color='#00BC35' />
        </button>
      </header>

      <ContactForm />
      <Contact contactsToShow={contactsToShow} />
    </>
  )
}

export default App
