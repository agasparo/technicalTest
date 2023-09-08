import { Body, Controller, Get, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { UserDto, UserListResponse } from './dto/user.dto'
import { ApiOkResponse } from '@nestjs/swagger'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({
    description: 'List of user',
    type: UserListResponse,
    isArray: true,
  })
  @Get('/all')
  getAllUsers(): Promise<UserListResponse[]> {
    return this.userService.getAllUsers()
  }

  @ApiOkResponse({
    description: 'The new user',
    type: UserListResponse,
  })
  @Post('')
  insertNewUser(@Body() userDto: UserDto): Promise<UserListResponse> {
    return this.userService.insertNewUser(userDto)
  }
}
