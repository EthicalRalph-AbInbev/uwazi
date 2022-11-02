import { Body, Controller, Post } from '@nestjs/common';
import { APIResponse } from 'src/common';
import { FindProductDto } from './dto/find-product.dto';
import { FindProductDtoV2 } from './dto/find-productv2.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('find')
  async findProduct(
    @Body() payload: FindProductDto,
  ): Promise<Readonly<APIResponse>> {
    const data = await this.productService.findProduct(payload);

    return new APIResponse(data, true, 'Product fetched successfully');
  }

  @Post('find/v2')
  async findProductV2(
    @Body() payload: FindProductDtoV2,
  ): Promise<Readonly<APIResponse>> {
    const data = await this.productService.findProductV2(payload);

    return new APIResponse(data, true, 'Product validated successfully');
  }
}
