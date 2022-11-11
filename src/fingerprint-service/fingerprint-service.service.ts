import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { ErrorHelper } from 'src/utils/error.utils';
import { VerifyFingerprintResponse, GetFingerprintResponse } from './support';

@Injectable()
export class FingerprintValidatorService {
  private logger = new Logger(FingerprintValidatorService.name);

  private readonly fingerPrintValidateEndpoint: string =
    'inexto/api/fingerprint/Beverage/Dotcode/Check';

  private readonly getFingerPrintEndpoint: string =
    'inexto/api/fingerprint/Beverage/Dotcode/GetFingerprint';

  constructor(private httpService: HttpService) {}

  async getFingerprint(
    countryCode: string,
    code: string,
  ): Promise<Readonly<GetFingerprintResponse>> {
    try {
      const response = await firstValueFrom<
        AxiosResponse<GetFingerprintResponse>
      >(
        this.httpService.get<GetFingerprintResponse>(
          `${this.getFingerPrintEndpoint}?countryCode=${countryCode}&code=${code}`,
        ),
      );

      if (response.data.errorCode !== 0 && response.data.errorMessage !== '') {
        ErrorHelper.BadRequest(response.data.errorMessage);
      }

      return response.data;
    } catch (error: any) {
      this.logger.error(error);

      ErrorHelper.BadRequest(
        error.message || 'An error occurred while getting fingerprint',
      );
    }
  }

  async validate(
    originalFingerprint: string,
    sampleBase64Image: string,
  ): Promise<Readonly<VerifyFingerprintResponse>> {
    try {
      const response = await firstValueFrom<
        AxiosResponse<VerifyFingerprintResponse>
      >(
        this.httpService.post<VerifyFingerprintResponse>(
          this.fingerPrintValidateEndpoint,
          {
            originalFingerprint,
            sampleBase64Image,
            testMode: false,
          },
        ),
      );

      return response.data;
    } catch (error) {
      this.logger.error(error);

      ErrorHelper.BadRequest('An error occurred during fingerprint validation');
    }
  }
}
