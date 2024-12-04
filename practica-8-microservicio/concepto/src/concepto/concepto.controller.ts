import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ConceptoService } from './concepto.service';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';

@Controller()
export class ConceptoController {
  constructor(private readonly conceptoService: ConceptoService) {}

  @MessagePattern({ cmd: 'create-concepto' })
  create(@Payload() data: CreateConceptoDto) {
    return this.conceptoService.create(data);
  }

  @MessagePattern({ cmd: 'get-conceptos' })
  findAll() {
    return this.conceptoService.findAll();
  }

  @MessagePattern({ cmd: 'get-concepto' })
  findOne(@Payload() id: number) {
    return this.conceptoService.findOne(id);
  }

  @MessagePattern({ cmd: 'update-concepto' })
  update(@Payload() payload: { id: number; data: UpdateConceptoDto }) {
    const { id, data } = payload;
    return this.conceptoService.update(id, data);
  }

  @MessagePattern({ cmd: 'delete-concepto' })
  remove(@Payload() id: number) {
    return this.conceptoService.remove(id);
  }
}
