import { UserMenuContainer } from 'components/UserMenu'
import { UserInfosContainer } from 'components/UserInfos'

export const HomeView = () => {
  return (
    <div className="flex bg-slate-100 h-screen w-screen">
      <UserMenuContainer />
      <UserInfosContainer />
    </div>
  )
}
