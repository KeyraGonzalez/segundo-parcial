import { CreateConceptoDto } from '../../dtos';
import { ConceptoEntity } from '../../entities/concepto.entity';
import { ConceptoRepository } from '../../repositories/concepto.repository';

export interface CreateConceptoUseCase {
    execute(dto: CreateConceptoDto): Promise<ConceptoEntity>;
    }

    export class CreateConcepto implements CreateConceptoUseCase {
    constructor(private readonly repository: ConceptoRepository) {}

    execute(dto: CreateConceptoDto): Promise<ConceptoEntity> {
        return this.repository.create(dto);
    }
    }
