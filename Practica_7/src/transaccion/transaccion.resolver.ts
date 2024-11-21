import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TransaccionService } from './transaccion.service';
import { Transaccion } from './entities/transaccion.entity';
import { CreateTransaccionInput } from './dto/create-transaccion.input';
import { UpdateTransaccionInput } from './dto/update-transaccion.input';

@Resolver(() => Transaccion)
export class TransaccionResolver {
  constructor(private readonly transaccionService: TransaccionService) {}

  @Mutation(() => Transaccion)
  createTransaccion(@Args('createTransaccionInput') createTransaccionInput: CreateTransaccionInput) {
    return this.transaccionService.create(createTransaccionInput);
  }

  @Query(() => [Transaccion], { name: 'transacciones' })
  findAll() {
    return this.transaccionService.findAll();
  }

  @Query(() => Transaccion, { name: 'transaccion' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.transaccionService.findOne(id);
  }

  @Mutation(() => Transaccion)
  updateTransaccion(@Args('updateTransaccionInput') updateTransaccionInput: UpdateTransaccionInput) {
    return this.transaccionService.update(updateTransaccionInput.id, updateTransaccionInput);
  }

  @Mutation(() => Transaccion)
  removeTransaccion(@Args('id', { type: () => String }) id: string) {
    return this.transaccionService.remove(id);
  }
}
