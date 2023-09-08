export type User = {
  userId: string
  firstname: string
  lastname: string
  isOnVacation: boolean
}

export type UserContextType = {
  userList: User[]
  selectedUser: User | null
  setUserList: (users: User[]) => void
  setSelectedUser: (user: User) => void
}
