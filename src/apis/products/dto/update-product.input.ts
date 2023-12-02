import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  //  Inheriting the following contents below
  // name?: string;
  // description?: string;
  // price?: number;
}
