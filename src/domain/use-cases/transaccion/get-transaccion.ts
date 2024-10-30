import { TransaccionEntity } from '../../entities/transaccion.entity';
import { TransaccionRepository } from '../../repositories/transaccion.repository';

export interface GetTransaccionUseCase {
  execute(id: number): Promise<TransaccionEntity>;
}

export class GetTransaccion implements GetTransaccionUseCase {
  constructor(private readonly repository: TransaccionRepository) {}

  execute(id: number): Promise<TransaccionEntity> {
    return this.repository.findById(id);
  }
}
