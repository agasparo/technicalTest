import { useCallback, useState } from 'react'
import { UserMenuView } from './UserMenu.view'

export const UserMenuContainer = () => {
  const [onlyVacation, setOnlyVacation] = useState<boolean>(false)

  const setVacationFilter = useCallback(() => {
    setOnlyVacation(!onlyVacation)
  }, [onlyVacation])

  return <UserMenuView setOnlyVacation={setVacationFilter} onlyVacation={onlyVacation} />
}
