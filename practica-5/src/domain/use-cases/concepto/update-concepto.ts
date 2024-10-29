import { UpdateConceptoDto } from '../../dtos';
import { ConceptoEntity } from '../../entities/concepto.entity';
import { ConceptoRepository } from '../../repositories/concepto.repository';

export interface UpdateConceptoUseCase {
  execute(dto: UpdateConceptoDto): Promise<ConceptoEntity>;
}

export class UpdateConcepto implements UpdateConceptoUseCase {
  constructor(private readonly repository: ConceptoRepository) {}

  execute(dto: UpdateConceptoDto): Promise<ConceptoEntity> {
    return this.repository.updateById(dto);
  }
}
