import { ApiProperty } from '@nestjs/swagger'
import { IsAscii, IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator'

export class UserDto {
  @ApiProperty()
  @IsString()
  @IsAscii()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(10)
  readonly firstname: string

  @ApiProperty()
  @IsString()
  @IsAscii()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(10)
  readonly lastname: string
}

export class UserListResponse {
  @ApiProperty()
  readonly userId: string

  @ApiProperty()
  readonly firstname: string

  @ApiProperty()
  readonly lastname: string

  @ApiProperty()
  readonly isOnVacation: boolean
}
