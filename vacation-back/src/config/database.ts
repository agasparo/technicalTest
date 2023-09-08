import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import { DB_NAME, HOST, PASSWORD, PORT, USERNAME } from './constants'

export const DB_CONFIG: MysqlConnectionOptions = {
  type: 'mysql',
  host: HOST,
  port: PORT,
  username: USERNAME,
  password: PASSWORD,
  database: DB_NAME,
  entities: ['dist/**/*.entity*{.js,.ts}'],
  migrations: ['dist/src/db/migrations/*.js'],
  synchronize: true,
}
