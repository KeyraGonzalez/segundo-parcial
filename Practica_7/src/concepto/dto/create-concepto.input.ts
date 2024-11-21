import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateConceptoInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  concepto: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  detalle: string;
}
