import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { VacationDto, VacationEnumType } from './dto/vacation.dto'
import { VacationService } from './vacation.service'
import { Vacation } from './entity/vacation.entity'
import { ApiOkResponse } from '@nestjs/swagger'

@Controller('vacation')
export class VacationController {
  constructor(private readonly vacationService: VacationService) {}

  @ApiOkResponse({
    description: 'The new vacation for user',
    type: Vacation,
  })
  @Post('')
  createVacationForOneUser(@Body() vacationDto: VacationDto): Promise<Vacation> {
    return this.vacationService.createVacationForOneUser(vacationDto)
  }

  @ApiOkResponse({
    description: 'The futur vacation for user',
    type: Vacation,
    isArray: true,
  })
  @Get('/user/:id/futur')
  getFuturVacationByUserId(@Param('id') userId: string): Promise<Vacation[]> {
    return this.vacationService.getVacationsByUserId(userId, VacationEnumType.FUTUR)
  }

  @ApiOkResponse({
    description: 'The past vacation for user',
    type: Vacation,
    isArray: true,
  })
  @Get('/user/:id/past')
  getPastVacationByUserId(@Param('id') userId: string): Promise<Vacation[]> {
    return this.vacationService.getVacationsByUserId(userId, VacationEnumType.PAST)
  }

  @ApiOkResponse({
    description: 'The current vacation for user',
    type: Vacation,
    isArray: true,
  })
  @Get('/user/:id/current')
  getCurrentVacationByUserId(@Param('id') userId: string): Promise<Vacation[]> {
    return this.vacationService.getVacationsByUserId(userId, VacationEnumType.CURRENT)
  }
}
