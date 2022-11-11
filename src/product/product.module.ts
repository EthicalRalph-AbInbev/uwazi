import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { FingerprintModule } from 'src/fingerprint-service/fingerprint-service.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [FingerprintModule],
})
export class ProductModule {}
