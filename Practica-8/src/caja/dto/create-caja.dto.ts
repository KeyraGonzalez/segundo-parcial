import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateCajaDto {
  @IsString()
  @MinLength(3, { message: 'La descripción debe tener al menos 3 caracteres' })
  @MaxLength(255, { message: 'La descripción no puede superar los 255 caracteres' })
  descripcion: string;
}
