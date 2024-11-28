import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ConceptoService } from './concepto.service';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';

@WebSocketGateway({ cors: true })
export class ConceptoGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly conceptoService: ConceptoService) {}

  @SubscribeMessage('createConcepto')
  async create(@MessageBody() createConceptoDto: CreateConceptoDto) {
    try {
      const createdConcepto = await this.conceptoService.create(createConceptoDto);
      if (!createdConcepto) {
        return { estado: 'error', mensaje: 'No se pudo crear el concepto' };
      }
      this.server.emit('conceptoCreado', createdConcepto);
      return { estado: 'éxito', datos: createdConcepto };
    } catch (error) {
      console.error('Error al crear el concepto:', error);
      return { estado: 'error', mensaje: 'No se pudo crear el concepto' };
    }
  }

  @SubscribeMessage('findAllConcepto')
  async findAll() {
    try {
      const conceptos = await this.conceptoService.findAll();
      return { estado: 'éxito', datos: conceptos };
    } catch (error) {
      console.error('Error al obtener los conceptos:', error);
      return { estado: 'error', mensaje: 'No se pudieron obtener los conceptos' };
    }
  }

  @SubscribeMessage('findOneConcepto')
  async findOne(@MessageBody() id: number) {
    try {
      const concepto = await this.conceptoService.findOne(id);
      if (!concepto) {
        return { estado: 'error', mensaje: 'Concepto no encontrado' };
      }
      return { estado: 'éxito', datos: concepto };
    } catch (error) {
      console.error('Error al obtener el concepto:', error);
      return { estado: 'error', mensaje: 'No se pudo obtener el concepto' };
    }
  }

  @SubscribeMessage('updateConcepto')
  async update(@MessageBody() updateConceptoDto: UpdateConceptoDto) {
    try {
      const updatedConcepto = await this.conceptoService.update(updateConceptoDto.id, updateConceptoDto);
      if (!updatedConcepto) {
        return { estado: 'error', mensaje: 'Concepto no encontrado o no se pudo actualizar' };
      }
      this.server.emit('conceptoActualizado', updatedConcepto);
      return { estado: 'éxito', datos: updatedConcepto };
    } catch (error) {
      console.error('Error al actualizar el concepto:', error);
      return { estado: 'error', mensaje: 'No se pudo actualizar el concepto' };
    }
  }

  @SubscribeMessage('removeConcepto')
  async remove(@MessageBody() id: number) {
    try {
      const result = await this.conceptoService.remove(id);
      if (!result) {
        return { estado: 'error', mensaje: 'Concepto no encontrado o no se pudo eliminar' };
      }
      this.server.emit('conceptoEliminado', { id });
      return { estado: 'éxito', mensaje: 'Concepto eliminado correctamente' };
    } catch (error) {
      console.error('Error al eliminar el concepto:', error);
      return { estado: 'error', mensaje: 'No se pudo eliminar el concepto' };
    }
  }
}
