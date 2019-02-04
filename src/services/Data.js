import axios from 'axios'
const url = '/data'

const getData = async () => {
  const response = await axios.get(url)
  return response.data
}

export default { getData }
