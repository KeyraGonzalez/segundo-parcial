import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TransaccionService } from './transaccion.service';
import { CreateTransaccionDto } from './dto/create-transaccion.dto';
import { UpdateTransaccionDto } from './dto/update-transaccion.dto';

@Controller()
export class TransaccionController {
  constructor(private readonly transaccionService: TransaccionService) {}

  @MessagePattern({ cmd: 'create-transaccion' })
  create(@Payload() data: CreateTransaccionDto) {
    return this.transaccionService.create(data);
  }

  @MessagePattern({ cmd: 'get-transacciones' })
  findAll() {
    return this.transaccionService.findAll();
  }

  @MessagePattern({ cmd: 'get-transaccion' })
  findOne(@Payload() id: number) {
    return this.transaccionService.findOne(id);
  }

  @MessagePattern({ cmd: 'update-transaccion' })
  update(@Payload() payload: { id: number; data: UpdateTransaccionDto }) {
    const { id, data } = payload;
    return this.transaccionService.update(id, data);
  }

  @MessagePattern({ cmd: 'delete-transaccion' })
  remove(@Payload() id: number) {
    return this.transaccionService.remove(id);
  }
}
