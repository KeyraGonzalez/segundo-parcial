import { UpdateTransaccionDto } from '../../dtos';
import { TransaccionEntity } from '../../entities/transaccion.entity';
import { TransaccionRepository } from '../../repositories/transaccion.repository';

export interface UpdateTransaccionUseCase {
  execute(dto: UpdateTransaccionDto): Promise<TransaccionEntity>;
}

export class UpdateTransaccion implements UpdateTransaccionUseCase {
  constructor(private readonly repository: TransaccionRepository) {}

  execute(dto: UpdateTransaccionDto): Promise<TransaccionEntity> {
    return this.repository.updateById(dto);
  }
}
