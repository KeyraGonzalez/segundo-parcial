import { ConceptoEntity } from '../../entities/concepto.entity';
import { ConceptoRepository } from '../../repositories/concepto.repository';

export interface DeleteConceptoUseCase {
  execute(id: number): Promise<ConceptoEntity>;
}

export class DeleteConcepto implements DeleteConceptoUseCase {
  constructor(private readonly repository: ConceptoRepository) {}

  execute(id: number): Promise<ConceptoEntity> {
    return this.repository.deleteById(id);
  }
}
