import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class VerifyProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Global trade item number of the item',
    example: '01234567891234',
  })
  globalTradeItemNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Item serial number',
    example: '12345',
  })
  serialNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product base64 image',
  })
  image: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Signature',
  })
  signature: string;
}
