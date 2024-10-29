import { TransaccionEntity } from '../../entities/transaccion.entity';
import { TransaccionRepository } from '../../repositories/transaccion.repository';

export interface DeleteTransaccionUseCase {
  execute(id: number): Promise<TransaccionEntity>;
}

export class DeleteTransaccion implements DeleteTransaccionUseCase {
  constructor(private readonly repository: TransaccionRepository) {}

  execute(id: number): Promise<TransaccionEntity> {
    return this.repository.deleteById(id);
  }
}
