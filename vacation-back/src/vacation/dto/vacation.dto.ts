import { ApiProperty } from '@nestjs/swagger'
import {
  IsString,
  IsAscii,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsDateString,
} from 'class-validator'

export class VacationDto {
  @ApiProperty()
  @IsString()
  @IsAscii()
  @IsNotEmpty()
  @IsDateString()
  startDate: string

  @ApiProperty()
  @IsString()
  @IsAscii()
  @IsNotEmpty()
  @IsDateString()
  endDate: string

  @ApiProperty()
  @IsString()
  @IsAscii()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  comment: string

  @ApiProperty()
  @IsString()
  @IsAscii()
  @IsNotEmpty()
  user: string
}

export enum VacationEnumType {
  FUTUR = 'futur',
  PAST = 'past',
  CURRENT = 'current',
}
