import { PartialType } from '@nestjs/mapped-types';
import { CreateTransaccionInput } from './create-transaccion.dto';

export class UpdateTransaccionDto extends PartialType(CreateTransaccionInput) {
  id: number;
}
