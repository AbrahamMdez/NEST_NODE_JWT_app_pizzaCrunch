import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let productController: ProductsController;

  const mockProductService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService]
    })
      .overrideProvider(ProductsService)
      .useValue(mockProductService)
      .compile();

    productController = module.get<ProductsController>(ProductsController);
  
  });

  it('should be defined', () => {
      expect(productController).toBeDefined();
  });

  const products = ['test'];

  it('should GET all products', async () => {
    expect( await productController.getAllProducts()).toBe(products);
  });
});
