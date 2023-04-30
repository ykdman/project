import { Controller, Get, Req, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  //* cats/hello
  @Get('hello')
  getHello(@Req() req: Request, @Body() body, @Param() param): string {
    console.log(req);
    console.log(body);
    console.log(param);
    return this.appService.getHello();
  }
}
