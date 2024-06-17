import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super()
        console.info('create prisma service')
    }

    onModuleInit() {
        console.info('Connect prisma')
        this.$connect()
    }

    onModuleDestroy() {
        console.info('disconnect prisma')
        this.$disconnect()
    }
}
