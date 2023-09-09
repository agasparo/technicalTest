import { User } from 'types/user'
import { Vacation } from 'types/vacation'
import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { UserVacationView } from './UserVacation.view'
import {
  getUserFuturVacation,
  getUserPresentVacation,
  getUserPastVacation,
} from 'fetcher/vacationFetcher'

type UserVacationContainerProps = {
  selectedUser: User
}

export const UserVacationContainer = ({ selectedUser }: UserVacationContainerProps) => {
  const [futurVacations, setFuturVacations] = useState<Vacation[]>([])
  const [presentVacations, setPresentVacations] = useState<Vacation[]>([])
  const [pastVacations, setPastVacations] = useState<Vacation[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    getUserVacation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUser])

  const getUserVacation = async () => {
    try {
      setIsLoading(true)
      const [futur, present, past] = await Promise.all([
        getUserFuturVacation(selectedUser.userId),
        getUserPresentVacation(selectedUser.userId),
        getUserPastVacation(selectedUser.userId),
      ])

      setFuturVacations(futur.data)
      setPresentVacations(present.data)
      setPastVacations(past.data)
    } catch (e) {
      toast.error('Impossible to get user vacations')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <ToastContainer pauseOnHover />
      <UserVacationView
        isLoading={isLoading}
        selectedUser={selectedUser}
        incomingVacations={futurVacations}
        passedVacations={pastVacations}
        presentVacations={presentVacations}
      />
    </>
  )
}
