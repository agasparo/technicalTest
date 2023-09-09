import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import {
  DeepPartial,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  Repository,
} from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { VacationDto } from './dto/vacation.dto'
import { Vacation } from './entity/vacation.entity'
import { UserService } from 'src/user/user.service'
import { NOW } from 'src/config/constants'

@Injectable()
export class VacationService {
  constructor(
    @InjectRepository(Vacation)
    private readonly vacationRepository: Repository<Vacation>,
    private readonly userService: UserService,
  ) {}

  createVacationForOneUser = async (vacation: VacationDto): Promise<Vacation> => {
    try {
      const startDate = new Date(new Date(vacation.startDate).toDateString())
      const endDate = new Date(new Date(vacation.endDate).toDateString())

      if (startDate > endDate) throw new Error('startDate > endDate')

      if (!(await this.userService.userExistById(vacation.user)))
        throw new Error('User doesnt exist')

      return await this.vacationRepository.save({
        ...vacation,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      } as DeepPartial<Vacation>)
    } catch (e) {
      console.log(`Error cant create new vacation for user : ${e}`)
      throw new HttpException(
        'Error cant create new vacation for user ',
        HttpStatus.BAD_REQUEST,
      )
    }
  }

  getCurrentVacationByUser = (userId: string): Promise<Vacation[]> => {
    return this.vacationRepository.find({
      where: {
        user: {
          id: userId,
        },
        endDate: MoreThanOrEqual(NOW),
        startDate: LessThanOrEqual(NOW),
      },
    })
  }

  getPastVacationByUser = (userId: string): Promise<Vacation[]> => {
    return this.vacationRepository.find({
      where: {
        user: {
          id: userId,
        },
        endDate: LessThan(NOW),
      },
    })
  }

  getFuturVacationByUser = (userId: string): Promise<Vacation[]> => {
    return this.vacationRepository.find({
      where: {
        user: {
          id: userId,
        },
        startDate: MoreThan(NOW),
      },
    })
  }
}
