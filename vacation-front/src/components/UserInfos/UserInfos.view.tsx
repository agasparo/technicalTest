import { useContext } from 'react'
import { UserContext } from 'constants/context'
import { UserVacationContainer } from 'components/UserVacation'

export const UserInfosView = () => {
  const { selectedUser } = useContext(UserContext)

  return (
    <>
      {selectedUser ? (
        <UserVacationContainer selectedUser={selectedUser} />
      ) : (
        <div className="flex flex-col justify-center items-center w-5/6 h-full text-gray-400">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-sleep-3656077-3048465.png?f=webp"
            alt="ok"
            className="h-24"
          />
          No User Selected
        </div>
      )}
    </>
  )
}
