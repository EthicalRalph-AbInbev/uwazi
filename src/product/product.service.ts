import { Injectable } from '@nestjs/common';
import { FingerprintValidatorService } from 'src/fingerprint-validator/fingerprint-validator.service';
import { FingerprintResponse } from 'src/fingerprint-validator/support';
import { Product } from 'src/interface';
import { ErrorHelper } from 'src/utils/error.utils';
import { FindProductDto, VerifyProductDto } from './dto';
import { dummyProducts } from './product.dummy';

@Injectable()
export class ProductService {
  constructor(
    private fingerprintValidatorService: FingerprintValidatorService,
  ) {}

  async findProduct(payload: FindProductDto): Promise<Readonly<Product>> {
    const dummyProduct = dummyProducts[payload.globalTradeItemNumber];

    if (!dummyProduct) {
      ErrorHelper.NotFound('serialized global trade number not found');
    }

    return dummyProduct;
  }

  async verifyProduct(
    payload: VerifyProductDto,
  ): Promise<Readonly<FingerprintResponse>> {
    return this.fingerprintValidatorService.validate(payload.image);
  }
}
