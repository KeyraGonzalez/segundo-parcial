import { IsString, IsNotEmpty } from 'class-validator';

export class CreateConceptoDto {
  @IsString()
  @IsNotEmpty()
  concepto: string;

  @IsString()
  @IsNotEmpty()
  detalle: string;
}
