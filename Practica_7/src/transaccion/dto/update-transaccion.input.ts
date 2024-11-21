import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateTransaccionInput } from './create-transaccion.input';

@InputType()
export class UpdateTransaccionInput extends PartialType(CreateTransaccionInput) {
  @Field(() => ID)
  id: string; 
}
