import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiExampleModule } from './api-example/api-example.module';

@Module({
  imports: [ApiExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
