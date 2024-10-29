// useCases/getConceptos.useCase.ts
import { ConceptoEntity } from '../../entities/concepto.entity';
import { ConceptoRepository } from '../../repositories/concepto.repository';

export interface GetConceptosUseCase {
  execute(): Promise<ConceptoEntity[]>;
}

export class GetConceptos implements GetConceptosUseCase {
  constructor(private readonly repository: ConceptoRepository) {}

  execute(): Promise<ConceptoEntity[]> {
    return this.repository.getAll();
  }
}
