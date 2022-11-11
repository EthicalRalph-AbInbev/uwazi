import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FingerprintValidatorService } from './fingerprint-service.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        baseURL: configService.get('FINGERPRINT_SERVICE_URL'),
      }),
    }),
  ],
  exports: [FingerprintValidatorService],
  providers: [FingerprintValidatorService],
})
export class FingerprintValidatorModule {}
