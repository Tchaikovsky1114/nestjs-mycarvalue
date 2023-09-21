import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {

  @Get('/asdf')
  getRootRoute() {
    return 'Hi there!';
  }

  @Get('/asdf2')
  getByeThere() {
    return 'Bye there!';
  }
}