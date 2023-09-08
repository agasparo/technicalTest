import clsx from 'clsx'
import { Spinner } from 'components/Spinner'
import { UserContext } from 'constants/context'
import { useContext } from 'react'
import { User } from 'types/user'

type UserMenuListViewProps = {
  onlyVacation: boolean
  isLoading: boolean
}

export const UserMenuListView = ({ onlyVacation, isLoading }: UserMenuListViewProps) => {
  const { userList, setSelectedUser, selectedUser } = useContext(UserContext)

  const UserListFiltred = userList.filter(
    (user: User) => (onlyVacation && user.isOnVacation) || !onlyVacation,
  )

  return (
    <div className="flex flex-col h-[70%] overflow-y-auto">
      {isLoading && <Spinner />}
      {!isLoading &&
        UserListFiltred.map((user: User, key: number) => {
          return (
            <div key={key} onClick={() => setSelectedUser(UserListFiltred[key])}>
              <div
                className={clsx('flex flex-row hover:bg-slate-50 cursor-pointer py-3', {
                  'bg-slate-50': UserListFiltred[key].userId === selectedUser?.userId,
                })}
              >
                <div className="w-1/3 flex items-center justify-center">
                  <img
                    src="https://www.svgrepo.com/download/5125/avatar.svg"
                    alt={user.firstname + user.lastname}
                    className="w-4/5 h-4/5"
                  />
                </div>
                <div className="w-1/3 flex flex-col justify-center">
                  <p>{user.firstname}</p>
                  <p>{user.lastname}</p>
                </div>
                <div className="w-1/3 flex flex-col justify-center items-center">
                  <p>
                    {user.isOnVacation ? (
                      <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                        V
                      </span>
                    ) : (
                      <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                        F
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <hr className="h-px ml-2.5 w-[90%] bg-gray-100 border-0"></hr>
            </div>
          )
        })}
    </div>
  )
}
