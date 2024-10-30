import { CreateCajaDto } from '../../dtos';
import { CajaEntity } from '../../entities/caja.entity';
import { CajaRepository } from '../../repositories/caja.repository';

export interface CreateCajaUseCase {
  execute(dto: CreateCajaDto): Promise<CajaEntity>;
}

export class CreateCaja implements CreateCajaUseCase {
  constructor(private readonly repository: CajaRepository) {}

  execute(dto: CreateCajaDto): Promise<CajaEntity> {
    return this.repository.create(dto);
  }
}
