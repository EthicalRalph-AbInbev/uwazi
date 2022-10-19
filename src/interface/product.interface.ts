export interface Product {
  serializedGlobalTradeItemNumber: string;
  signature: string;
  producer: string;
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
    productionLine: Array<string>;
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
  serviceProvider: string;
  serviceProviderName: string;
  serviceProviderBatchId: string;
  bestBeforeDate: string;
}
