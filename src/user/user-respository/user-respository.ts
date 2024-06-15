import { Injectable } from '@nestjs/common';
import { Connection } from '../connection/connection';

export class UserRespository {
  connection: Connection;

  save() {
    console.info(`save user with connection ${this.connection.getName()}`);
  }
}

export function createUserRepository(connection: Connection): UserRespository {
  const repository = new UserRespository();
  repository.connection = connection;

  return repository;
}
