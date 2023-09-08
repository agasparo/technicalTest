import { Vacation } from 'src/vacation/entity/vacation.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  firstname: string

  @Column()
  lastname: string

  @OneToMany(() => Vacation, (vacation) => vacation.user, {})
  vacations: Vacation[]
}
