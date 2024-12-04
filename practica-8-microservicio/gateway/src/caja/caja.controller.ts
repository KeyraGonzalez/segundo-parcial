import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { NATS_SERVICE } from 'src/config';

@Controller('cajas')
export class CajasController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy
  ) {}

  @Post()
  async create(@Body() createCajasDto: CreateCajaDto) {
    try {
      const caja = await firstValueFrom(
        this.client.send({ cmd: 'create-caja' }, createCajasDto)
      );
      return caja;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const cajas = await firstValueFrom(
        this.client.send({ cmd: 'get-cajas' }, {})
      );
      return cajas;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const caja = await firstValueFrom(
        this.client.send({ cmd: 'get-caja' }, id)
      );
      return caja;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateCajasDto: UpdateCajaDto) {
    try {
      const updatedCajas = await firstValueFrom(
        this.client.send({ cmd: 'update-caja' }, { id, ...updateCajasDto })
      );
      return updatedCajas;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      const result = await firstValueFrom(
        this.client.send({ cmd: 'delete-caja' }, id)
      );
      return result;
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
