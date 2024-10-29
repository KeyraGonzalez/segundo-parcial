import { CajaEntity } from '../../entities/caja.entity';
import { CajaRepository } from '../../repositories/caja.repository';

export interface GetCajasUseCase {
  execute(): Promise<CajaEntity[]>;
}

export class GetCajas implements GetCajasUseCase {
  constructor(private readonly repository: CajaRepository) {}

  execute(): Promise<CajaEntity[]> {
    return this.repository.getAll();
  }
}
