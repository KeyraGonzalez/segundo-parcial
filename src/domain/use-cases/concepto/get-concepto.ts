import { ConceptoEntity } from '../../entities/concepto.entity';
import { ConceptoRepository } from '../../repositories/concepto.repository';

export interface GetConceptoUseCase {
  execute(id: number): Promise<ConceptoEntity>;
}

export class GetConcepto implements GetConceptoUseCase {
  constructor(private readonly repository: ConceptoRepository) {}

  execute(id: number): Promise<ConceptoEntity> {
    return this.repository.findById(id);
  }
}
