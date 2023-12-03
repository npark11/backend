import {
  // HttpException,
  // HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import {
  IProductsServiceCheckSoldout,
  IProductsServiceCreate,
  IProductsServiceDelete,
  IProductsServiceFindOne,
  IProductsServiceUpdate,
} from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({ where: { id: productId } });
  }

  create({ createProductInput }: IProductsServiceCreate): Promise<Product> {
    const result = this.productsRepository.save({
      ...createProductInput,
    });
    return result;
  }

  async update({
    productId,
    updateProductInput,
  }: IProductsServiceUpdate): Promise<Product> {
    const product = await this.findOne({ productId });
    // const product = await this.productsRepository.findOne({
    //   where: { id: productId },
    // });

    this.checkSoldout({ product });

    const result = this.productsRepository.save({
      ...product,
      ...updateProductInput,
    });

    return result;
  }

  checkSoldout({ product }: IProductsServiceCheckSoldout): void {
    if (product.isSoldout) {
      throw new UnprocessableEntityException(
        'This product has been out of stock',
      );
    }

    // if (product.isSoldout) {
    //   throw new HttpException(
    //     'This product has been out of stock',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
  }

  async delete({ productId }: IProductsServiceDelete): Promise<boolean> {
    const result = await this.productsRepository.softDelete({ id: productId });
    return result.affected ? true : false;
  }
}
