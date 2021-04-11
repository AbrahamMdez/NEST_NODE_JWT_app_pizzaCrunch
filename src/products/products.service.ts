import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interfaces/products.interface';
import { CreateProductDTO } from './dto/products.dto';

@Injectable()
export class ProductsService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    async getProducts(): Promise<Product[]> {
        const getAllProducts = await this.productModel.find();
        return getAllProducts;
    }

    async getProduct(productID: string): Promise<Product> {
        const getOneProduct = await this.productModel.findById(productID);
        return getOneProduct;
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const newProduct = new this.productModel(createProductDTO);
        return await newProduct.save(); 
    }

    async updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<Product> {
        const productToUpdate = await this.productModel.findByIdAndUpdate(productID, createProductDTO,
            { new: true });
        return productToUpdate;
    }

    async deleteProduct(productID: string): Promise<Product> {
        const productToDelete = await this.productModel.findByIdAndDelete(productID);
        return productToDelete;
    }
};
