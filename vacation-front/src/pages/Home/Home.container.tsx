import { UserContext } from 'constants/context'
import { useState } from 'react'
import { User, UserContextType } from 'types/user'
import { HomeView } from './Home.view'

export const HomeContainer = () => {
  const setUserList = (users: User[]) => {
    setUsersContext((prevContext: UserContextType) => {
      return {
        ...prevContext,
        userList: users,
      }
    })
  }

  const setSelectedUser = (user: User) => {
    setUsersContext((prevContext: UserContextType) => {
      return {
        ...prevContext,
        selectedUser: user,
      }
    })
  }

  const [usersContext, setUsersContext] = useState<UserContextType>({
    userList: [],
    selectedUser: null,
    setUserList,
    setSelectedUser,
  })

  return (
    <UserContext.Provider value={usersContext}>
      <HomeView />
    </UserContext.Provider>
  )
}
