import { Module } from '@nestjs/common';
import { ApiExampleController } from './api-example.controller';

@Module({
  controllers: [ApiExampleController]
})
export class ApiExampleModule {}
