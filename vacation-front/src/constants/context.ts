import { createContext } from 'react'
import { UserContextType } from 'types/user'

export const UserContext = createContext<UserContextType>({
  userList: [],
  selectedUser: null,
  setUserList: () => {},
  setSelectedUser: () => {},
})
