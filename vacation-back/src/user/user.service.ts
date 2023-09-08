import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { UserDto, UserListResponse } from './dto/user.dto'
import { Repository } from 'typeorm'
import { User } from './entity/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { createdUserMapper, findedUserMapper } from './user.mapper'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getAllUsers = async (): Promise<UserListResponse[]> => {
    try {
      const users = await this.userRepository.find({
        select: {
          vacations: {
            startDate: true,
            endDate: true,
          },
        },
        relations: {
          vacations: true,
        },
        order: {
          id: 'ASC',
        },
      })

      return users.map((user: User) => findedUserMapper(user))
    } catch (e) {
      console.log(`Cant get Users: ${e}`)
      throw new HttpException('Cant get Users', HttpStatus.BAD_REQUEST)
    }
  }

  insertNewUser = async (user: UserDto): Promise<UserListResponse> => {
    try {
      const userExist = await this.userExistByFirstnameAndLastname(user)

      if (userExist) throw new Error('User exist')

      return createdUserMapper(
        await this.userRepository.save({
          firstname: user.firstname.toLowerCase(),
          lastname: user.lastname.toLowerCase(),
        }),
      )
    } catch (e) {
      console.log(`Error cant create new user : ${e}`)
      throw new HttpException('Cant create new user', HttpStatus.BAD_REQUEST)
    }
  }

  userExistByFirstnameAndLastname = (user: UserDto): Promise<boolean> => {
    return this.userRepository.exist({
      where: {
        firstname: user.firstname.toLowerCase(),
        lastname: user.lastname.toLowerCase(),
      },
    })
  }

  userExistById = (userId: string): Promise<boolean> => {
    return this.userRepository.exist({
      where: {
        id: userId,
      },
    })
  }
}
