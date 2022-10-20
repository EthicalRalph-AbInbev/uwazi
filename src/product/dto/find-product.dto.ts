import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class FindProductDto {
  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Global trade item number of the item',
  })
  globalTradeItemNumber: string;

  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Item serial number',
  })
  serialNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Item destination country',
  })
  destinationCountry: string;
}
