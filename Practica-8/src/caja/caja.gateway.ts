import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CajaService } from './caja.service';
import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';

@WebSocketGateway({ cors: true })
export class CajaGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly cajaService: CajaService) {}

  handleConnection(client: Socket) {
    const token = client.handshake.headers.authentication as string;

    if (!token) {
      console.log('Cliente desconectado por falta de token.');
      return;
    }

    console.log(`Cliente conectado: ${client.id}, Token: ${token}`);
    client.emit('mensaje', { estado: 'conectado', clienteId: client.id });
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
    this.server.emit('mensaje', { estado: 'desconectado', clienteId: client.id });
  }

  @SubscribeMessage('crearCaja')
  async create(@MessageBody() createCajaDto: CreateCajaDto) {
    try {
      console.log('Datos para crear Caja:', createCajaDto);
      const createdCaja = await this.cajaService.create(createCajaDto); 
            if (!createdCaja) {
        return { estado: 'error', mensaje: 'No se pudo crear la Caja' };
      }

      this.server.emit('cajaCreada', createdCaja);
      return { estado: 'éxito', datos: createdCaja };
    } catch (error) {
      console.error('Error al crear la Caja:', error);
      return { estado: 'error', mensaje: 'No se pudo crear la Caja' };
    }
  }

  @SubscribeMessage('buscarTodasCajas')
  async findAll() {
    try {
      const cajas = await this.cajaService.findAll();
      return { estado: 'éxito', datos: cajas };
    } catch (error) {
      console.error('Error al obtener las Cajas:', error);
      return { estado: 'error', mensaje: 'No se pudieron obtener las Cajas' };
    }
  }

  @SubscribeMessage('buscarCaja')
  async findOne(@MessageBody() id: number) {
    try {
      const caja = await this.cajaService.findOne(id);
      if (!caja) {
        return { estado: 'error', mensaje: 'Caja no encontrada' };
      }
      return { estado: 'éxito', datos: caja };
    } catch (error) {
      console.error('Error al obtener la Caja:', error);
      return { estado: 'error', mensaje: 'No se pudo obtener la Caja' };
    }
  }

  @SubscribeMessage('actualizarCaja')
  async update(@MessageBody() updateCajaDto: UpdateCajaDto) {
    try {
      const updatedCaja = await this.cajaService.update(updateCajaDto.id, updateCajaDto);
      if (!updatedCaja) {
        return { estado: 'error', mensaje: 'Caja no encontrada o no se pudo actualizar' };
      }
      this.server.emit('cajaActualizada', updatedCaja);
      return { estado: 'éxito', datos: updatedCaja };
    } catch (error) {
      console.error('Error al actualizar la Caja:', error);
      return { estado: 'error', mensaje: 'No se pudo actualizar la Caja' };
    }
  }

  @SubscribeMessage('eliminarCaja')
  async remove(@MessageBody() id: number) {
    try {
      const result = await this.cajaService.remove(id);
      if (!result) {
        return { estado: 'error', mensaje: 'Caja no encontrada o no se pudo eliminar' };
      }
      this.server.emit('cajaEliminada', { id });
      return { estado: 'éxito', mensaje: 'Caja eliminada correctamente' };
    } catch (error) {
      console.error('Error al eliminar la Caja:', error);
      return { estado: 'error', mensaje: 'No se pudo eliminar la Caja' };
    }
  }
}
