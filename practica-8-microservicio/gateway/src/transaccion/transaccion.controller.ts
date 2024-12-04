import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateTransaccionDto } from './dto/create-transaccion.dto';
import { UpdateTransaccionDto } from './dto/update-transaccion.dto';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { NATS_SERVICE } from 'src/config';

@Controller('transacciones')
export class TransaccionesController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy
  ) {}

  @Post()
  async create(@Body() createTransaccionesDto: CreateTransaccionDto) {
    try {
      const transaccion = await firstValueFrom(
        this.client.send({ cmd: 'create-transaccion' }, createTransaccionesDto)
      );
      return transaccion;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const transacciones = await firstValueFrom(
        this.client.send({ cmd: 'get-transacciones' }, {})
      );
      return transacciones;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const transaccion = await firstValueFrom(
        this.client.send({ cmd: 'get-transaccion' }, id)
      );
      return transaccion;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateTransaccionesDto: UpdateTransaccionDto) {
    try {
      const updatedTransacciones = await firstValueFrom(
        this.client.send({ cmd: 'update-transaccion' }, { id, ...updateTransaccionesDto })
      );
      return updatedTransacciones;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      const result = await firstValueFrom(
        this.client.send({ cmd: 'delete-transaccion' }, id)
      );
      return result;
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
