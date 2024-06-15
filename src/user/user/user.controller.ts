import { Controller, Get, Header, HttpCode, HttpRedirectResponse, Param, Post, Query, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('api/users')
export class UserController {

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

  @Get('/udang')
  @Redirect()
  udang(): HttpRedirectResponse {
    return {
      url: '/api/users/sample',
      statusCode: 301
    }
  }

  @Get('/hello')
  sayHello(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string
  ): string {
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
