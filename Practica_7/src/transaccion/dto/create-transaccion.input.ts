import { InputType, Field, ID, Int } from '@nestjs/graphql';
import { IsString, IsOptional, IsDate, IsNumber, IsInt } from 'class-validator';

@InputType()
export class CreateTransaccionInput {
  @IsString()
  @Field(() => ID)  
  cajas: string;

  @IsString()
  @Field(() => ID)  
  conceptos: string;

  @IsString()
  @Field(() => String) 
  fecha: string;

  @IsNumber()
  @Field(() => Number)
  ingreso: number;

  @IsNumber()
  @Field(() => Number)
  egreso: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  observacion?: string;
}
