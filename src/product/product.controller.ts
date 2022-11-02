import { Body, Controller, Post } from '@nestjs/common';
import { APIResponse } from 'src/common';
import { FindProductDto, VerifyProductDto } from './dto';
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

  @Post('verify')
  async verifyProduct(
    @Body() payload: VerifyProductDto,
  ): Promise<Readonly<APIResponse>> {
    const data = await this.productService.verifyProduct(payload);

    return new APIResponse(data, true, 'Product validated successfully');
  }
}
