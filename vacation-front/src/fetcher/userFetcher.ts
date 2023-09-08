import { API } from 'constants/api'
import { API_URL } from 'constants/routing'

export const getUserListFetcher = () => {
  return API.get(API_URL.GET_ALL_USERS)
}

export const addNewUserFetcher = (firstname: string, lastname: string) => {
  return API.post(API_URL.ADD_USERS, {
    firstname,
    lastname,
  })
}
