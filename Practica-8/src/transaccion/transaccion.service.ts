import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaccion } from './entities/transaccion.entity';
import { CreateTransaccionInput } from './dto/create-transaccion.dto';
import { UpdateTransaccionDto } from './dto/update-transaccion.dto';
import { Caja } from '../caja/entities/caja.entity';
import { Concepto } from '../concepto/entities/concepto.entity';

@Injectable()
export class TransaccionService {
  constructor(
    @InjectRepository(Transaccion)
    private readonly transaccionRepository: Repository<Transaccion>,

    @InjectRepository(Caja)
    private readonly cajaRepository: Repository<Caja>,

    @InjectRepository(Concepto)
    private readonly conceptoRepository: Repository<Concepto>,
  ) {}

  async create(createTransaccionInput: CreateTransaccionInput): Promise<Transaccion> {
    const { cajas: cajaId, conceptos: conceptoId, fecha, ingreso, egreso, observacion } = createTransaccionInput;

    const caja = await this.cajaRepository.findOne({ where: { id: cajaId } });
    if (!caja) {
      throw new NotFoundException(`Caja con ID ${cajaId} no encontrada`);
    }

    const concepto = await this.conceptoRepository.findOne({ where: { id: conceptoId } });
    if (!concepto) {
      throw new NotFoundException(`Concepto con ID ${conceptoId} no encontrado`);
    }

    const transaccion = this.transaccionRepository.create({
      caja,
      concepto,
      fecha,
      ingreso,
      egreso,
      observacion,
    });

    return await this.transaccionRepository.save(transaccion);
  }

  async findAll(): Promise<Transaccion[]> {
    return await this.transaccionRepository.find({ relations: ['caja', 'concepto'] });
  }

  async findOne(id: number): Promise<Transaccion> {
    const transaccion = await this.transaccionRepository.findOne({
      where: { id },
      relations: ['caja', 'concepto'],
    });
    if (!transaccion) {
      throw new NotFoundException(`Transacción con ID ${id} no encontrada`);
    }
    return transaccion;
  }

  async update(id: number, updateTransaccionInput: UpdateTransaccionDto): Promise<Transaccion> {
    const transaccion = await this.findOne(id);
    if (!transaccion) {
      throw new NotFoundException(`Transacción con ID ${id} no encontrada`);
    }

    Object.assign(transaccion, updateTransaccionInput);

    return await this.transaccionRepository.save(transaccion);
  }

  async remove(id: number): Promise<Transaccion> {
    const transaccion = await this.findOne(id);
    if (!transaccion) {
      throw new NotFoundException(`Transacción con ID ${id} no encontrada`);
    }

    await this.transaccionRepository.remove(transaccion);
    return { ...transaccion, id };
  }
}
