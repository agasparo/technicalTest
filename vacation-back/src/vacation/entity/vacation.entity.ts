import { ApiProperty } from '@nestjs/swagger'
import { User } from 'src/user/entity/user.entity'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

@Entity()
export class Vacation {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => User, (user) => user.id, {
    cascade: true,
  })
  user: User

  @ApiProperty()
  @Column()
  startDate: string

  @ApiProperty()
  @Column()
  endDate: string

  @ApiProperty()
  @Column()
  comment: string
}
