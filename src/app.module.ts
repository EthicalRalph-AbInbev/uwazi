import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { FingerprintModule } from './fingerprint-service/fingerprint-service.module';
import { envVarsSchema } from './utils/env.validator';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validationSchema: envVarsSchema,
    }),
    ProductModule,
    FingerprintModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
