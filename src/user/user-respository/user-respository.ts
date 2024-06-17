import { Inject, Injectable } from '@nestjs/common';
import { Connection } from '../connection/connection';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { User } from '@prisma/client';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Injectable()
export class UserRespository {
  constructor(
    private prismaService: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
  ) {
    this.logger.info('create user repository');
  }

  async save(first_name: string, last_name?: string): Promise<User> {
    this.logger.info(
      `create user with firstname ${first_name} and lastname ${last_name}`,
    );
    return this.prismaService.user.create({
      data: {
        first_name: first_name,
        last_name: last_name,
      },
    });
  }
}
