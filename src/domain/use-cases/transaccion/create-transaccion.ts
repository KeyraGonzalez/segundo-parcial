import { CreateTransaccionDto } from '../../dtos';
import { TransaccionEntity } from '../../entities/transaccion.entity';
import { TransaccionRepository } from '../../repositories/transaccion.repository';

export interface CreateTransaccionUseCase {
  execute(dto: CreateTransaccionDto): Promise<TransaccionEntity>;
}

export class CreateTransaccion implements CreateTransaccionUseCase {
  constructor(private readonly repository: TransaccionRepository) {}

  execute(dto: CreateTransaccionDto): Promise<TransaccionEntity> {
    return this.repository.create(dto);
  }
}
