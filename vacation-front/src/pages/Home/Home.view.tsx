import { UserInfosContainer } from 'components/UserInfos'
import { UserMenuContainer } from 'components/UserMenu'

export const HomeView = () => {
  return (
    <div className="flex bg-slate-100 h-screen w-screen">
      <UserMenuContainer />
      <UserInfosContainer />
    </div>
  )
}
