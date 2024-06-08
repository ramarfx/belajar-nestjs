import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('api/users')
export class UserController {
  @Get()
  get() {
    return 'ini dari users';
  }
}
