import { UserMenuBar } from './UserMenuBar'
import { UserMenuFormContainer } from './UserMenuForm'
import { UserMenuListContainer } from './UserMenuList'

type UserMenuViewProps = {
  setOnlyVacation: () => void
  onlyVacation: boolean
}

export const UserMenuView = ({ setOnlyVacation, onlyVacation }: UserMenuViewProps) => {
  return (
    <div className="h-screen bg-white md:w-[30%] lg:w-[27%] xl:w-[18%] flex flex-col">
      <UserMenuBar setOnlyVacation={setOnlyVacation} />
      <UserMenuListContainer onlyVacation={onlyVacation} />
      <UserMenuFormContainer />
    </div>
  )
}
