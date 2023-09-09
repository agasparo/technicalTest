import { User } from 'types/user'
import { Vacation } from 'types/vacation'
import { Spinner } from 'components/Spinner'
import { UserVacationArray } from './UserVacationArray'
import { UserVacationFormContainer } from './UserVacationForm'

type UserVacationViewProps = {
  isLoading: boolean
  selectedUser: User
  incomingVacations: Vacation[]
  passedVacations: Vacation[]
  presentVacations: Vacation[]
}

export const UserVacationView = ({
  isLoading,
  selectedUser,
  incomingVacations,
  passedVacations,
  presentVacations,
}: UserVacationViewProps) => {
  return (
    <div className="flex flex-col items-center w-5/6 h-screen text-gray-400 overflow-y-auto pb-5">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <p className="text-lg mt-5">
            {(selectedUser.firstname + ' ' + selectedUser.lastname).toUpperCase()}
          </p>
          <UserVacationFormContainer userId={selectedUser.userId} />
          <UserVacationArray title="Incoming vacations" vacations={incomingVacations} />
          <UserVacationArray title="Present vacations" vacations={presentVacations} />
          <UserVacationArray title="Past vacations" vacations={passedVacations} />
        </>
      )}
    </div>
  )
}
