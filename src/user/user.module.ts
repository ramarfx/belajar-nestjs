import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import {
  Connection,
  MongoDBConnection,
  MySQLConnection,
  createConnection,
} from './connection/connection';
import { MailService, mailService } from './mail/mail.service';
import { UserRespository } from './user-respository/user-respository';
import { MemberService } from './member/member.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection,
      useFactory: createConnection,
      inject: [ConfigService],
    },
    {
      provide: MailService,
      useValue: mailService,
    },
    {
      provide: 'EmailService',
      useExisting: MailService,
    },
    UserRespository,
    MemberService,
  ],
  exports: [UserService],
})
export class UserModule {}
