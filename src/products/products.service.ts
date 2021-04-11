import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../../dist/products/interfaces/products.interface';
import { CreateProductDTO } from './dto/products.dto';

@Injectable()
export class ProductsService {
    
}
