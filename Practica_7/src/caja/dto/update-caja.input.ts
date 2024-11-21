import { IsUUID } from 'class-validator';
import { CreateCajaInput } from './create-caja.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCajaInput extends PartialType(CreateCajaInput) {
  
  @Field(() => ID)
  @IsUUID()
  id: string;
}
