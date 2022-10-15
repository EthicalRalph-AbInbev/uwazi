import { Injectable } from '@nestjs/common';
import { ErrorHelper } from 'src/utils/error.utils';
import { FindProductDto } from './dto/get-product.dto';
import { dummyProduct } from './product.dummy';

@Injectable()
export class ProductService {
  async findProduct(payload: FindProductDto) {
    const {
      stockKeepingUnit: { globalTradeItemNumber },
    } = dummyProduct;

    if (payload.globalTradeItemNumber !== globalTradeItemNumber) {
      ErrorHelper.NotFound('serialized global trade number not found');
    }

    return dummyProduct;
  }
}
