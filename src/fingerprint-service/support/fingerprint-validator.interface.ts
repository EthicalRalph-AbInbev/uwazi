export interface FingerprintResponse {
  errorCode: number;
  errorMessage: string;
}

export interface VerifyFingerprintResponse extends FingerprintResponse {
  decodedCode: string;
  isItemGenuine: boolean;
  confidenceFactor: number;
}

export interface GetFingerprintResponse extends FingerprintResponse {
  fingerprint: string;
}
