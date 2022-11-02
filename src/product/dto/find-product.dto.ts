import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class FindProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Global trade item number of the item',
    example: '5010162000164',
  })
  globalTradeItemNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Item serial number',
    example: 'S9MH4MSRYQ4S',
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
