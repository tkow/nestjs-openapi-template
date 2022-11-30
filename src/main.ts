import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as jsYaml from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api Example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('user')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  fs.writeFileSync(
    path.resolve(process.cwd(), 'api-v1-from-nest.yaml'),
    jsYaml.dump(document),
  );

  if (process.argv[2] !== '--generate-only') {
    await app.listen(3000);
  }
}

bootstrap();
