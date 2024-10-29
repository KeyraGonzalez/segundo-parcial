import { CajaEntity } from '../../entities/caja.entity';
import { CajaRepository } from '../../repositories/caja.repository';

export interface DeleteCajaUseCase {
  execute(id: number): Promise<CajaEntity>;
}

export class DeleteCaja implements DeleteCajaUseCase {
  constructor(private readonly repository: CajaRepository) {}

  execute(id: number): Promise<CajaEntity> {
    return this.repository.deleteById(id);
  }
}
