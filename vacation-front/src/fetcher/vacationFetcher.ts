import { API } from 'constants/api'
import { API_URL } from 'constants/routing'
import { VacationForm } from 'types/form'

export const addVacationByUserId = (vacationForm: VacationForm, userId: string) => {
  return API.post(API_URL.ADD_VACATION, {
    user: userId,
    startDate: vacationForm.start,
    endDate: vacationForm.end,
    comment: vacationForm.comment,
  })
}

export const getUserFuturVacation = (userId: string) => {
  return API.get(replaceInUrl(':id', userId, API_URL.GET_FUTUR_VACATION))
}

export const getUserPastVacation = (userId: string) => {
  return API.get(replaceInUrl(':id', userId, API_URL.GET_PAST_VACATION))
}

export const getUserPresentVacation = (userId: string) => {
  return API.get(replaceInUrl(':id', userId, API_URL.GET_PRESENT_VACATION))
}

const replaceInUrl = (replace: string, toReplace: string, str: string) =>
  str.replace(replace, toReplace)
