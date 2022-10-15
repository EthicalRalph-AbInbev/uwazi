import { Body, Controller, Post } from '@nestjs/common';
import { FindProductDto } from './dto/get-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('find')
  async findProduct(@Body() payload: FindProductDto) {
    const data = await this.productService.findProduct(payload);

    return {
      data,
      sucess: true,
      message: 'Product fetched successfully',
    };
  }
}
