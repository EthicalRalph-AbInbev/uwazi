import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class FindProductDto {
  @IsNumberString()
  @IsNotEmpty()
  globalTradeItemNumber: string;

  @IsNumberString()
  @IsNotEmpty()
  serialNumber: string;

  @IsString()
  @IsNotEmpty()
  destinationCountry: string;
}
