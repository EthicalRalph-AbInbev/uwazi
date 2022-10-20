import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class FindProductDto {
  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Global trade item number of the item',
    example: '01234567891234',
  })
  globalTradeItemNumber: string;

  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Item serial number',
    example: '12345',
  })
  serialNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Item destination country',
    example: 'TZ',
  })
  destinationCountry: string;
}
