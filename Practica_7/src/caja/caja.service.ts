import { Injectable } from '@nestjs/common';
import { CreateCajaInput } from './dto/create-caja.input';
import { UpdateCajaInput } from './dto/update-caja.input';
import { Repository } from 'typeorm';
import { Caja } from './entities/caja.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CajaService {
  constructor(
    @InjectRepository(Caja)
    private readonly cajaRepository: Repository<Caja>,
  ) {}

  async create(createCajaInput: CreateCajaInput): Promise<Caja> {
    const caja = this.cajaRepository.create(createCajaInput);
    return await this.cajaRepository.save(caja);
  }

  async findAll(): Promise<Caja[]> {
    return await this.cajaRepository.find();
  }

  async findOne(id: string): Promise<Caja> {
    const caja = await this.cajaRepository.findOneBy({id});
    if (!caja) {
      throw new Error(`Caja con id ${id} no encontrada`);
    }
    return caja;
  }

  async update(id: string, updateCajaInput: UpdateCajaInput): Promise<Caja> {
    const caja = await this.findOne(id);
    if (!caja) {
      throw new Error(`Caja con id ${id} no encontrada`);
    }
    Object.assign(caja, updateCajaInput);
    return await this.cajaRepository.save(caja);
  }

  async remove(id: string): Promise<Caja> {
    const caja = await this.findOne(id);
    if (!caja) {
      throw new Error(`Caja con id ${id} no encontrada`);
    }
    await this.cajaRepository.remove(caja);
    return {...caja, id};
  }
}
