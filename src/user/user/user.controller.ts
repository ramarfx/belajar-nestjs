import { Controller, Get, Header, HttpCode, HttpRedirectResponse, Param, Post, Query, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { title } from 'process';

@Controller('api/users')
export class UserController {

  @Get('/view/hello')
  viewHello(@Query('name') name: string, @Res() response: Response){
    response.render('index.html', {
      title: 'ini title',
      name: name
    })
  }

  @Get('/set-cookie')
  setCookie(@Query('name') name: string, @Res() response: Response){
    response.cookie('name', name);
    response.status(200).send('Success set cookie')
  }

  @Get('/get-cookie')
  getCookie(@Req() request: Request): string {
    return request.cookies['name']
  }

  @Get('/sample-response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleResponse(): Record<string, string>{
    return {
      'data': 'hello json'
    }
  }

  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return  {
      url: 'https://nestjs.com',
      statusCode: 301
    }
  }

  @Get('/hello')
   async sayHello(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string
  ): Promise<string> {
    return `get ${firstName} ${lastName}`
  }

  @Get('/:id')
  getById(@Param('id') id: string): string {
    return `get ${id}`
  }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/sample')
  get(): string {
    return 'get nestjs  ';
  }
}
