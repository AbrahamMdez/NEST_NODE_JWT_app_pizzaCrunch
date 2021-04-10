import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { CreateProductDTO } from './dto/products.dto';

@Controller('products')
export class ProductsController {

    @Post('/create')
    createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        console.log(createProductDTO);
        return res.status(HttpStatus.OK).json({
            msg: 'received'
        })
    }
}
