import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() { } //private authService: AuthService,

  //@UseGuards(LocalAuthGuard)
  /*  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  } */

  @Get()
  hello() {
    return 'Hello Darling';
  }
}
