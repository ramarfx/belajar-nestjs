import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpRedirectResponse,
  Inject,
  Optional,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import { Connection } from '../connection/connection';
import { MailService } from '../mail/mail.service';
import { UserRespository } from '../user-respository/user-respository';

@Controller('api/users')
export class UserController {
  constructor(
    private service: UserService,
    private connection: Connection,
    private mailService: MailService,
    @Inject('EmailService') private emailService: MailService,
    private userRepository: UserRespository,
  ) {}

  @Get('/connection')
  async getConnection(): Promise<string> {
    this.userRepository.save();
    this.mailService.send();
    this.emailService.send();
    return this.connection.getName();
  }

  @Get('/hello')
  async sayHello(@Query('name') name: string) {
    return this.service.sayHello(name);
  }

  @Get('/view/hello')
  viewHello(@Query('name') name: string, @Res() response: Response) {
    response.render('index.html', {
      title: 'ini title',
      name: name,
    });
  }

  @Get('/set-cookie')
  setCookie(@Query('name') name: string, @Res() response: Response) {
    response.cookie('name', name);
    response.status(200).send('Success set cookie');
  }

  @Get('/get-cookie')
  getCookie(@Req() request: Request): string {
    return request.cookies['name'];
  }

  @Get('/sample-response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleResponse(): Record<string, string> {
    return {
      data: 'hello json',
    };
  }

  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: 'https://nestjs.com',
      statusCode: 301,
    };
  }

  @Get('/:id')
  getById(@Param('id') id: string): string {
    return `get ${id}`;
  }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/sample')
  get(): string {
    return 'get nestjs';
  }
}
