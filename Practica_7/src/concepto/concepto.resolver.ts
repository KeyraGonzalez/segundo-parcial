import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConceptoService } from './concepto.service';
import { Concepto } from './entities/concepto.entity';
import { CreateConceptoInput } from './dto/create-concepto.input';
import { UpdateConceptoInput } from './dto/update-concepto.input';

@Resolver(() => Concepto)
export class ConceptoResolver {
  constructor(private readonly conceptoService: ConceptoService) {}

  @Mutation(() => Concepto)
  createConcepto(@Args('createConceptoInput') createConceptoInput: CreateConceptoInput) {
    return this.conceptoService.create(createConceptoInput);
  }

  @Query(() => [Concepto], { name: 'conceptos' })
  findAll() {
    return this.conceptoService.findAll();
  }

  @Query(() => Concepto, { name: 'concepto' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.conceptoService.findOne(id);
  }

  @Mutation(() => Concepto)
  updateConcepto(@Args('updateConceptoInput') updateConceptoInput: UpdateConceptoInput) {
    return this.conceptoService.update(updateConceptoInput.id, updateConceptoInput);
  }

  @Mutation(() => Concepto)
  removeConcepto(@Args('id', { type: () => Int }) id: string) {
    return this.conceptoService.remove(id);
  }
}
