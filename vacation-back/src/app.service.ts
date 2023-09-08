import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHealthCheck(): { success: boolean } {
    return { success: true }
  }
}
