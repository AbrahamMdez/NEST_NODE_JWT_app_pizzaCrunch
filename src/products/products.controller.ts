import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';

import { CreateProductDTO } from './dto/products.dto';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {}

    @Get('/')
    async getAllProducts(@Res() res) {
        const getAllProducts = await this.productsService.getProducts();
        if (!getAllProducts) throw new NotFoundException('Was an error, products not found');
        return res.status(HttpStatus.OK).json({
            msg: 'Got all products correctly',
            getAllProducts
        });
    };

    @Get('/:productID')
    async getOneProduct(@Res() res, @Param('productID') productID) {
        const getOneProduct = await this.productsService.getProduct(productID);
        if (!getOneProduct) throw new NotFoundException('Product does not exists');
        return res.status(HttpStatus.OK).json({
            msg: 'Got product correctly',
            getOneProduct
        });
    };

    @Post('/create')
    async createOneProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        const productToCreate = await this.productsService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            msg: 'Product created',
            productToCreate
        });
    };

    @Put('/update/:productID')
    async updateOneProdcut(@Res() res, @Body() createProductDTO: CreateProductDTO, @Param('productID') productID) {
        const productToUpdate = await this.productsService.updateProduct(productID, createProductDTO);
        if (!productToUpdate) throw new NotFoundException('Imposible update product');
        return res.status(HttpStatus.OK).json({
            msg: 'Product updated',
            productToUpdate
        });
    };

    @Delete('/delete/:productID')
    async deleteOneProduct(@Res() res, @Param('productID') productID) {
        const productToDelete = await this.productsService.deleteProduct(productID);
        if (!productToDelete) throw new NotFoundException('Product does not exists');
        return res.status(HttpStatus.OK).json({
            msg: 'Deleted product correctly',
            productToDelete
        });
    };
};
