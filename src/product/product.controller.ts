import { Body, Controller, Post } from '@nestjs/common';
import { HttpResponse, Product } from 'src/interface';
import { FindProductDto } from './dto/find-product.dto';
import { FindProductDtoV2 } from './dto/find-productv2.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('find')
  async findProduct(
    @Body() payload: FindProductDto,
  ): Promise<Readonly<HttpResponse<Product>>> {
    const data = await this.productService.findProduct(payload);

    return {
      data,
      success: true,
      message: 'Product fetched successfully',
    };
  }

  @Post('find/v2')
  async findProductV2(
    @Body() payload: FindProductDtoV2,
  ): Promise<Readonly<HttpResponse<Product>>> {
    const data = await this.productService.findProductV2(payload);

    return {
      data,
      success: true,
      message: 'Product fetched successfully',
    };
  }
}
