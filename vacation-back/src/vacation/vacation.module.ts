import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { VacationService } from './vacation.service'
import { VacationController } from './vacation.controller'
import { Vacation } from './entity/vacation.entity'
import { UserModule } from 'src/user/user.module'

@Module({
  imports: [TypeOrmModule.forFeature([Vacation]), UserModule],
  controllers: [VacationController],
  providers: [VacationService],
})
export class VacationModule {}
