import { Injectable } from '@nestjs/common';
import { CreateConceptoInput } from './dto/create-concepto.input';
import { UpdateConceptoInput } from './dto/update-concepto.input';
import { Repository } from 'typeorm';
import { Concepto } from './entities/concepto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConceptoService {
  constructor(
    @InjectRepository(Concepto)
    private readonly conceptoRepository: Repository<Concepto>,
  ) {}

  async create(createConceptoInput: CreateConceptoInput): Promise<Concepto> {
    const concepto = this.conceptoRepository.create(createConceptoInput);
    return await this.conceptoRepository.save(concepto);
  }

  async findAll(): Promise<Concepto[]> {
    return await this.conceptoRepository.find();
  }

  async findOne(id: string): Promise<Concepto> {
    const concepto = await this.conceptoRepository.findOneBy({ id });
    if (!concepto) {
      throw new Error(`Concepto con id ${id} no encontrado`);
    }
    return concepto;
  }

  async update(id: string, updateConceptoInput: UpdateConceptoInput): Promise<Concepto> {
    const concepto = await this.findOne(id);
    if (!concepto) {
      throw new Error(`Concepto con id ${id} no encontrado`);
    }
    Object.assign(concepto, updateConceptoInput);
    return await this.conceptoRepository.save(concepto);
  }

  async remove(id: string): Promise<Concepto> {
    const concepto = await this.findOne(id);
    if (!concepto) {
      throw new Error(`Concepto con id ${id} no encontrado`);
    }
    await this.conceptoRepository.remove(concepto);
    return { ...concepto, id };
  }
}
