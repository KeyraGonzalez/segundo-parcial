import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { TransaccionService } from './transaccion.service';
import { CreateTransaccionInput } from './dto/create-transaccion.dto';
import { UpdateTransaccionDto } from './dto/update-transaccion.dto';

@WebSocketGateway({ cors: true })
export class TransaccionGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly transaccionService: TransaccionService) {}

  @SubscribeMessage('createTransaccion')
  async create(@MessageBody() createTransaccionDto: CreateTransaccionInput) {
    try {
      const createdTransaccion = await this.transaccionService.create(createTransaccionDto);
      if (!createdTransaccion) {
        return { estado: 'error', mensaje: 'No se pudo crear la transacción' };
      }
      this.server.emit('transaccionCreada', createdTransaccion);
      return { estado: 'éxito', datos: createdTransaccion };
    } catch (error) {
      console.error('Error al crear la transacción:', error);
      return { estado: 'error', mensaje: 'No se pudo crear la transacción' };
    }
  }

  @SubscribeMessage('findAllTransaccion')
  async findAll() {
    try {
      const transacciones = await this.transaccionService.findAll();
      return { estado: 'éxito', datos: transacciones };
    } catch (error) {
      console.error('Error al obtener las transacciones:', error);
      return { estado: 'error', mensaje: 'No se pudieron obtener las transacciones' };
    }
  }

  @SubscribeMessage('findOneTransaccion')
  async findOne(@MessageBody() id: number) {
    try {
      const transaccion = await this.transaccionService.findOne(id);
      if (!transaccion) {
        return { estado: 'error', mensaje: 'Transacción no encontrada' };
      }
      return { estado: 'éxito', datos: transaccion };
    } catch (error) {
      console.error('Error al obtener la transacción:', error);
      return { estado: 'error', mensaje: 'No se pudo obtener la transacción' };
    }
  }

  @SubscribeMessage('updateTransaccion')
  async update(@MessageBody() updateTransaccionDto: UpdateTransaccionDto) {
    try {
      const updatedTransaccion = await this.transaccionService.update(updateTransaccionDto.id, updateTransaccionDto);
      if (!updatedTransaccion) {
        return { estado: 'error', mensaje: 'Transacción no encontrada o no se pudo actualizar' };
      }
      this.server.emit('transaccionActualizada', updatedTransaccion);
      return { estado: 'éxito', datos: updatedTransaccion };
    } catch (error) {
      console.error('Error al actualizar la transacción:', error);
      return { estado: 'error', mensaje: 'No se pudo actualizar la transacción' };
    }
  }

  @SubscribeMessage('removeTransaccion')
  async remove(@MessageBody() id: number) {
    try {
      const result = await this.transaccionService.remove(id);
      if (!result) {
        return { estado: 'error', mensaje: 'Transacción no encontrada o no se pudo eliminar' };
      }
      this.server.emit('transaccionEliminada', { id });
      return { estado: 'éxito', mensaje: 'Transacción eliminada correctamente' };
    } catch (error) {
      console.error('Error al eliminar la transacción:', error);
      return { estado: 'error', mensaje: 'No se pudo eliminar la transacción' };
    }
  }
}
