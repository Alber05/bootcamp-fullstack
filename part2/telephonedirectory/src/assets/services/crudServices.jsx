import axios from 'axios'

const baseURL = 'http://localhost:3001/contacts'

const getContacts = () => {
  return axios.get(baseURL).then((response) => response.data)
}

export const crudService = {
  getContacts,
}
