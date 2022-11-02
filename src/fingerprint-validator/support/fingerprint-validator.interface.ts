export interface FingerprintResponse {
  decodedCode: string;
  isItemGenuine: boolean;
  confidenceFactor: number;
}

export interface FingerprintServerResponse extends FingerprintResponse {
  errorCode: number;
  errorMessage: string;
}
