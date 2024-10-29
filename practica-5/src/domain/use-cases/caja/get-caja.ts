import { CajaEntity } from '../../entities/caja.entity';
import { CajaRepository } from '../../repositories/caja.repository';

export interface GetCajaUseCase {
  execute(id: number): Promise<CajaEntity>;
}

export class GetCaja implements GetCajaUseCase {
  constructor(private readonly repository: CajaRepository) {}

  execute(id: number): Promise<CajaEntity> {
    return this.repository.findById(id);
  }
}
