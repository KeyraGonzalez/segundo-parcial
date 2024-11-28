import { IsString, IsOptional, IsDate, IsNumber, IsInt } from 'class-validator';

export class CreateTransaccionInput {
  @IsString()
  cajas: number;

  @IsString()
  conceptos: number;

  @IsString()
  fecha: string;

  @IsNumber()
  ingreso: number;

  @IsNumber()
  egreso: number;

  @IsOptional()
  observacion?: string;
}
