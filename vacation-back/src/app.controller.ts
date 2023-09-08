import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { ApiOkResponse } from '@nestjs/swagger'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({
    description: 'Health check',
  })
  @Get('/health-check')
  getHealthCheck(): { success: boolean } {
    return this.appService.getHealthCheck()
  }
}
