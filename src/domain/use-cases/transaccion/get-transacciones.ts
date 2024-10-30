import { TransaccionEntity } from '../../entities/transaccion.entity';
import { TransaccionRepository } from '../../repositories/transaccion.repository';

export interface GetTransaccionesUseCase {
  execute(): Promise<TransaccionEntity[]>;
}

export class GetTransacciones implements GetTransaccionesUseCase {
  constructor(private readonly repository: TransaccionRepository) {}

  execute(): Promise<TransaccionEntity[]> {
    return this.repository.getAll();
  }
}
