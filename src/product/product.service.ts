import { Injectable } from '@nestjs/common';
import { Product } from 'src/interface';
import { ErrorHelper } from 'src/utils/error.utils';
import { FindProductDto } from './dto/find-product.dto';
import { FindProductDtoV2 } from './dto/find-productv2.dto';
import { dummyProducts } from './product.dummy';

@Injectable()
export class ProductService {
  async findProduct(payload: FindProductDto): Promise<Readonly<Product>> {
    const dummyProduct = dummyProducts[payload.globalTradeItemNumber];

    if (!dummyProduct) {
      ErrorHelper.NotFound('serialized global trade number not found');
    }

    return dummyProduct;
  }

  async findProductV2(payload: FindProductDtoV2): Promise<Readonly<Product>> {
    return this.findProduct({
      ...payload,
      destinationCountry: '',
    });
  }
}
