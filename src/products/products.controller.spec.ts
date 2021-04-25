import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

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

  const productToCreate = { name: "test",
                            description: "description",
                            imageURL: "img",
                            price: 2,
                            createdAt: new Date
                          };

  it('should create a product', async() => {
    expect(await productController.createOneProduct(Res, productToCreate)).toEqual(
      {
        id: expect.any(Number),
        name: "test",
        description: "description",
        imageURL: "img",
        price: 2,
        createdAt: new Date
      });
    });
});
