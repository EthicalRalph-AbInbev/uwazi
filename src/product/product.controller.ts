import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { APIResponse } from 'src/common';
import { FindProductDto, VerifyProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('product')
@ApiBearerAuth()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('find')
  @HttpCode(200)
  async findProduct(
    @Body() payload: FindProductDto,
  ): Promise<Readonly<APIResponse>> {
    const data = await this.productService.findProduct(payload);

    return new APIResponse(data, true, 'Product fetched successfully');
  }

  @Post('verify')
  @HttpCode(200)
  async verifyProduct(
    @Body() payload: VerifyProductDto,
  ): Promise<Readonly<APIResponse>> {
    const data = await this.productService.verifyProduct(payload);

    return new APIResponse(data, true, 'Product validated successfully');
  }
}
