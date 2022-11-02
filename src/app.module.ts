import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { FingerprintValidatorModule } from './fingerprint-validator/fingerprint-validator.module';
import { envVarsSchema } from './utils/env.validator';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validationSchema: envVarsSchema,
    }),
    ProductModule,
    FingerprintValidatorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
