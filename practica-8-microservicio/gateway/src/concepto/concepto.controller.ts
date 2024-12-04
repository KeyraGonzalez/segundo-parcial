import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { NATS_SERVICE } from 'src/config';

@Controller('conceptos')
export class ConceptosController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy
  ) {}

  @Post()
  async create(@Body() createConceptosDto: CreateConceptoDto) {
    try {
      const concepto = await firstValueFrom(
        this.client.send({ cmd: 'create-concepto' }, createConceptosDto)
      );
      return concepto;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const conceptos = await firstValueFrom(
        this.client.send({ cmd: 'get-conceptos' }, {})
      );
      return conceptos;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const concepto = await firstValueFrom(
        this.client.send({ cmd: 'get-concepto' }, id)
      );
      return concepto;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateConceptosDto: UpdateConceptoDto) {
    try {
      const updatedConceptos = await firstValueFrom(
        this.client.send({ cmd: 'update-concepto' }, { id, ...updateConceptosDto })
      );
      return updatedConceptos;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      const result = await firstValueFrom(
        this.client.send({ cmd: 'delete-concepto' }, id)
      );
      return result;
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
