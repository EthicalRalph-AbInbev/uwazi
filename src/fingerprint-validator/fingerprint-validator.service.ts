import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { ErrorHelper } from 'src/utils/error.utils';
import { FingerprintResponse, FingerprintServerResponse } from './support';

@Injectable()
export class FingerprintValidatorService {
  private logger = new Logger(FingerprintValidatorService.name);

  private readonly fingerPrintValidateEndpoint: string =
    'inexto/api/fingerprint/Beverage/Dotcode/Check';

  constructor(private httpService: HttpService) {}

  async validate(
    sampleBase64Image: string,
  ): Promise<Readonly<FingerprintResponse>> {
    let response: AxiosResponse<FingerprintServerResponse>;

    try {
      response = await firstValueFrom<AxiosResponse<FingerprintServerResponse>>(
        this.httpService.post<FingerprintServerResponse>(
          this.fingerPrintValidateEndpoint,
          {
            originalFingerprint: '',
            sampleBase64Image,
            testMode: true,
          },
        ),
      );
    } catch (error) {
      this.logger.error(error);

      throw new Error('An error occurred during fingerprint validation');
    }

    if (!response.data.isItemGenuine) {
      ErrorHelper.BadRequest(response.data.errorMessage);
    }

    return {
      decodedCode: response.data?.decodedCode,
      isItemGenuine: response.data?.isItemGenuine,
      confidenceFactor: response.data?.confidenceFactor,
    };
  }
}
