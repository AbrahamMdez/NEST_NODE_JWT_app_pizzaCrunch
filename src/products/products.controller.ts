import { Controller, Get, Post, Put, Delete, Res } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Post('/create')
    createProduct(@Res() res) {
        return 'Product created'
    }
}
