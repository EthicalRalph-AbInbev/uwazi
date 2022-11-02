import { Product } from 'src/interface';

export const dummyProducts: {
  [key: string]: Product;
} = {
  '5010162000164': {
    serializedGlobalTradeItemNumber: 'S9MH4MSRYQ4S5010162000164',
    signature: 'Ci3JHf...qh0Nxrsn3EK==',
    producer: '182ee7b8f685138616949',
    producerName: 'Inbev Belgium',
    destinationCountry: 'TZ',
    productionDate: '2022-08-29',
    factory: {
      globalLocationNumber: '0123456789123',
      factoryName: 'Big Factory',
      factoryAddress: {
        streetName: 'Long Street',
        postalCode: '1234AB',
        townName: 'Towny',
        country: 'TZ',
      },
      factoryCoordinates: '67.9821 -134.4933',
      productionLine: ['Line11'],
    },
    stockKeepingUnit: {
      stockKeepingUnit: 'string',
      stockKeepingUnitName: 'string',
      packaging: [
        {
          order: 1,
          material: 'bottle',
          quantity: 35.5,
          quantityUnitOfMeasure: 'cl',
        },
      ],
      globalTradeItemNumber: '5010162000164',
      productName: 'string',
      industry: 'Beer',
      alcoholContent: 4.5,
      infoText1: 'string',
      infoText2: 'string',
      infoText3: 'string',
      infoText4: 'string',
    },
    serviceProvider: '182ee7c7dba1694373e7c',
    serviceProviderName: 'my Service Provider',
    serviceProviderBatchId: 'intNo9928',
    bestBeforeDate: '2023-09-23',
  },
};
