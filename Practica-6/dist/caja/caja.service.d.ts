import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';
import { Caja } from './entities/caja.entity';
import { Repository } from 'typeorm';
export declare class CajaService {
    private cajaRepository;
    constructor(cajaRepository: Repository<Caja>);
    create(createCajaDto: CreateCajaDto): Caja;
    findAll(): Promise<Caja[]>;
    findOne(id: number): Promise<Caja>;
    update(id: number, updateCajaDto: UpdateCajaDto): Promise<Caja>;
    remove(id: number): Promise<Caja>;
}
