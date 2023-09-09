import { UserContext } from 'constants/context'
import { toast, ToastContainer } from 'react-toastify'
import { UserMenuListView } from './UserMenuList.view'
import { useContext, useEffect, useState } from 'react'
import { getUserListFetcher } from 'fetcher/userFetcher'

type UserMenuListContainerProps = {
  onlyVacation: boolean
}

export const UserMenuListContainer = ({ onlyVacation }: UserMenuListContainerProps) => {
  const { setUserList } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getUsers = async () => {
    try {
      setIsLoading(true)
      const response = await getUserListFetcher()
      setUserList(response.data)
    } catch (e) {
      toast.error('Impossible to get user list')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <ToastContainer pauseOnHover />
      <UserMenuListView onlyVacation={onlyVacation} isLoading={isLoading} />
    </>
  )
}
