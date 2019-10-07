import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'


// equal to '/' path, this could also contain a subroute like /user
@Controller()
export class AppController {
  constructor(private readonly AppService: AppService) {}

  // this could contain a subroute like '/profile' which would result in /user/profile
  @Get()
  getHello(): string {
    return this.AppService.getHello()
  }

}