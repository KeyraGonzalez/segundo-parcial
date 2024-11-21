import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength, MaxLength } from 'class-validator';

@InputType()
export class CreateCajaInput {
  @Field()
  @IsString() 
  @MinLength(3, { message: 'La descripción debe tener al menos 3 caracteres' }) 
  @MaxLength(255, { message: 'La descripción no puede superar los 255 caracteres' }) 
  descripcion: string;
}
