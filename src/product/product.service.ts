import { Injectable } from '@nestjs/common';
import { Product } from 'src/interface';
import { ErrorHelper } from 'src/utils/error.utils';
import { FindProductDto } from './dto/find-product.dto';
import { dummyProduct } from './product.dummy';

@Injectable()
export class ProductService {
  async findProduct(payload: FindProductDto): Promise<Readonly<Product>> {
    const {
      stockKeepingUnit: { globalTradeItemNumber },
    } = dummyProduct;

    if (payload.globalTradeItemNumber !== globalTradeItemNumber) {
      ErrorHelper.NotFound('serialized global trade number not found');
    }

    return dummyProduct;
  }
}
