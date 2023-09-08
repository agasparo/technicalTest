import { Vacation } from 'src/vacation/entity/vacation.entity'
import { UserListResponse } from './dto/user.dto'
import { User } from './entity/user.entity'

export const createdUserMapper = (user: User): UserListResponse => {
  return {
    userId: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    isOnVacation: false,
  }
}

export const findedUserMapper = (user: User): UserListResponse => {
  const today = new Date(new Date().toDateString())

  return {
    userId: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    isOnVacation: !!user.vacations.find(
      (vacation: Vacation) =>
        new Date(vacation.startDate) <= today && new Date(vacation.endDate) >= today,
    ),
  }
}
