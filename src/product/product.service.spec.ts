import { FindProductDto } from './dto/find-product.dto';
import { ProductService } from './product.service';

describe('Product service', () => {
  describe('findProduct', () => {
    it('should return a product if it exist', async () => {
      const findProductPayload: FindProductDto = {
        globalTradeItemNumber: '01234567891234',
        serialNumber: '12345',
        destinationCountry: 'TZ',
      };

      const productService = new ProductService();

      const product = await productService.findProduct(findProductPayload);

      expect(product).toBeDefined();
      expect(product.stockKeepingUnit.globalTradeItemNumber).toEqual(
        findProductPayload.globalTradeItemNumber,
      );
    });

    it("should throw error if product isn't found", async () => {
      const findProductPayload: FindProductDto = {
        globalTradeItemNumber: 'invalid product',
        serialNumber: 'invalid',
        destinationCountry: 'AA',
      };

      const productService = new ProductService();

      await expect(
        async () => await productService.findProduct(findProductPayload),
      ).rejects.toThrow();
    });
  });
});
