import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CajaService } from './caja.service';
import { Caja } from './entities/caja.entity';
import { CreateCajaInput } from './dto/create-caja.input';
import { UpdateCajaInput } from './dto/update-caja.input';

@Resolver(() => Caja)
export class CajaResolver {
  constructor(private readonly cajaService: CajaService) {}

  @Mutation(() => Caja)
  createCaja(@Args('createCajaInput') createCajaInput: CreateCajaInput) {
    return this.cajaService.create(createCajaInput);
  }

  @Query(() => [Caja], { name: 'cajas' })  
  findAll() {
    return this.cajaService.findAll();
  }

  @Query(() => Caja, { name: 'caja' }) 
  findOne(@Args('id', { type: () => String }) id: string) {  
    return this.cajaService.findOne(id);
  }

  @Mutation(() => Caja)
  updateCaja(@Args('updateCajaInput') updateCajaInput: UpdateCajaInput) {
    return this.cajaService.update(updateCajaInput.id, updateCajaInput);
  }

  @Mutation(() => Caja)
  removeCaja(@Args('id', { type: () => String }) id: string) { 
    return this.cajaService.remove(id);
  }
}
