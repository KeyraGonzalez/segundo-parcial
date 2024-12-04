import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CajaService } from './caja.service';
import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';

@Controller()
export class CajaController {
  constructor(private readonly cajaService: CajaService) {}

  @MessagePattern({ cmd: 'create-caja' })
  create(@Payload() data: CreateCajaDto) {
    return this.cajaService.create(data);
  }

  @MessagePattern({ cmd: 'get-cajas' })
  findAll() {
    return this.cajaService.findAll();
  }

  @MessagePattern({ cmd: 'get-caja' })
  findOne(@Payload() id: number) {
    return this.cajaService.findOne(id);
  }

  @MessagePattern({ cmd: 'update-caja' })
  update(@Payload() payload: { id: number; data: UpdateCajaDto }) {
    const { id, data } = payload;
    return this.cajaService.update(id, data);
  }

  @MessagePattern({ cmd: 'delete-caja' })
  remove(@Payload() id: number) {
    return this.cajaService.remove(id);
  }
}
