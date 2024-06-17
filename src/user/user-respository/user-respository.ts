import { Injectable } from '@nestjs/common';
import { Connection } from '../connection/connection';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserRespository {
  constructor(private prismaService: PrismaService) {
    console.info('create repository')
  }

   async save(first_name: string, last_name?: string): Promise<User> {
    return this.prismaService.user.create({
      data: {
        first_name: first_name,
        last_name: last_name
      }
    })
  }
}
