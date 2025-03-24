import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('healty')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealty() : string {
    return this.appService.getHealty();
  }
}
