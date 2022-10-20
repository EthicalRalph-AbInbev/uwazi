import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { HttpExceptionFilter } from './filter/http-exception.filter';
import { AppModule } from './app.module';

const logger = new Logger('UWAZI');

const bootstrap = async () => {
  const app = await NestFactory.create<INestApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('UWAZI Orchestrator API')
    .setDescription('The UWAZI Orchestrator API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.enableCors();
  app.setGlobalPrefix('/api');

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  const port = app.get(ConfigService).get('PORT');

  await app.listen(port);
  logger.log(`Application is running on: ${await app.getUrl()}`);
};

bootstrap();
