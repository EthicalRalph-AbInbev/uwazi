import { Injectable } from '@nestjs/common';
import { FingerprintValidatorService } from 'src/fingerprint-service/fingerprint-service.service';
import { Product } from 'src/interface';
import { ErrorHelper } from 'src/utils/error.utils';
import { FindProductDto, VerifyProductDto } from './dto';
import { dummyProducts } from './product.dummy';

@Injectable()
export class ProductService {
  constructor(private fingerprintService: FingerprintValidatorService) {}

  async findProduct(payload: FindProductDto): Promise<Readonly<Product>> {
    const dummyProduct = dummyProducts[payload.globalTradeItemNumber];

    if (!dummyProduct) {
      ErrorHelper.NotFound('serialized global trade number not found');
    }

    return dummyProduct;
  }

  async verifyProduct(payload: VerifyProductDto): Promise<Readonly<any>> {
    const fingerprintData = await this.fingerprintService.getFingerprint(
      'TZA',
      payload.serialNumber,
    );

    const validationData = await this.fingerprintService.validate(
      fingerprintData.fingerprint,
      payload.image,
    );

    let isValid = true;

    if (
      (validationData.errorCode !== 0 && validationData.errorMessage !== '') ||
      !validationData.isItemGenuine
    ) {
      isValid = false;
    }

    return {
      serializedGlobalTradeItemNumber: `(01)${payload.serialNumber}(10)${payload.globalTradeItemNumber}`,
      scanDateTime: new Date(),
      coordinates: '67.7121 -134.9233',
      status: `digital signature verified ${!isValid && 'NOT'} authentic`,
      results: `${validationData.confidenceFactor}% authentic`,
      governmentID: 'tz-government',
      producerID: '182ee7b8f685138616949',
      serviceProviderID: '182ee7c7dba1694373e7c',
      id: '182a647ba1e5138616949',
      objectType: 'scanResult',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
