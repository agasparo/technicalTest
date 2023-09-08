import { configurationsService } from './configuration'

export const HOST = configurationsService.HOST
export const PORT = configurationsService.PORT
export const USERNAME = configurationsService.USERNAME
export const PASSWORD = configurationsService.PASSWORD
export const DB_NAME = configurationsService.DB_NAME

export const NOW = new Date(new Date().toDateString()).toISOString()
