import { UpdateCajaDto } from '../../dtos';
import { CajaEntity } from '../../entities/caja.entity';
import { CajaRepository } from '../../repositories/caja.repository';

export interface UpdateCajaUseCase {
  execute(dto: UpdateCajaDto): Promise<CajaEntity>;
}

export class UpdateCaja implements UpdateCajaUseCase {
  constructor(private readonly repository: CajaRepository) {}

  execute(dto: UpdateCajaDto): Promise<CajaEntity> {
    return this.repository.updateById(dto);
  }
}
