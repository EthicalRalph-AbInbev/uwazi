import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { HttpExceptionFilter } from './filter/http-exception.filter';
import { AppModule } from './app.module';

const logger = new Logger('UWAZI');

class Entrypoint {
  public async start(): Promise<void> {
    const app = await NestFactory.create(AppModule);

    this.setupSwagger(app);

    app.enableCors();
    app.setGlobalPrefix('/api');

    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new HttpExceptionFilter());

    const port = app.get(ConfigService).get('PORT');

    await app.listen(port);
    logger.log(`Application is running on: ${await app.getUrl()}`);
  }

  private setupSwagger(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('UWAZI Orchestrator API')
      .setDescription('The UWAZI Orchestrator API description')
      .setVersion('0.1')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
  }
}

new Entrypoint().start().catch((error) => {
  logger.error(error, null, 'Bootstrap');

  process.exit();
});
