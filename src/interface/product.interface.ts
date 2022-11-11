export interface Product {
  serializedGlobalTradeItemNumber: string;
  signature: string;
  producerID: string;
  producerName: string;
  destinationCountry: string;
  productionDate: string;
  factory: {
    globalLocationNumber: string;
    factoryName: string;
    factoryAddress: {
      streetName: string;
      postalCode: string;
      townName: string;
      country: string;
    };
    factoryCoordinates: string;
    productionLineID: string;
  };
  stockKeepingUnit: {
    stockKeepingUnit: string;
    stockKeepingUnitName: string;
    packaging: [
      {
        order: number;
        material: string;
        quantity: number;
        quantityUnitOfMeasure: string;
      },
    ];
    globalTradeItemNumber: string;
    productName: string;
    industry: string;
    alcoholContent: number;
    infoText1: string;
    infoText2: string;
    infoText3: string;
    infoText4: string;
  };
  serviceProviderID: string;
  serviceProviderName: string;
  serviceProviderBatchID: string;
  bestBeforeDate: string;
  serviceProviderInfo: {
    signatureVerificationEndpoint: string;
  };
  scanResults: Array<any>;
}
