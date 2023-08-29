import { useState, useEffect } from 'react'
import style from './filter.module.css'
import { BiSearchAlt } from 'react-icons/bi'

const Filter = ({ allContacts, setSearchedContacts }) => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setSearchedContacts(
      allContacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.trim().toLowerCase())
      )
    )
  }, [search])

  return (
    <div className={style.browserContainer}>
      <input
        type='text'
        className={style.browser}
        placeholder='Buscar un contacto...'
        onChange={handleSearch}
        value={search}
      />
      <BiSearchAlt className={style.searchIcon} />
    </div>
  )
}

export default Filter
