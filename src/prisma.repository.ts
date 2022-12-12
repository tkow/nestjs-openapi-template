import {
  Module,
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Global,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaRepository
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}

@Global()
@Module({
  providers: [PrismaRepository],
  exports: [PrismaRepository],
})
export class PrismaModule {}
