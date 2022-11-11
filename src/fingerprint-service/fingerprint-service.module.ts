import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FingerprintService } from './fingerprint-service.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        baseURL: configService.get('FINGERPRINT_SERVICE_URL'),
      }),
    }),
  ],
  exports: [FingerprintService],
  providers: [FingerprintService],
})
export class FingerprintModule {}
