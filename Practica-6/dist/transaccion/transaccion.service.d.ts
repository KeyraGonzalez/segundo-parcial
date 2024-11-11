import { CreateTransaccionDto } from './dto/create-transaccion.dto';
import { UpdateTransaccionDto } from './dto/update-transaccion.dto';
import { Transaccion } from './entities/transaccion.entity';
import { Repository } from 'typeorm';
export declare class TransaccionService {
    private readonly trasacionRepository;
    constructor(trasacionRepository: Repository<Transaccion>);
    create(createTransaccionDto: CreateTransaccionDto): Transaccion;
    findAll(): Promise<Transaccion[]>;
    findOne(id: number): Promise<Transaccion>;
    update(id: number, updateTransaccionDto: UpdateTransaccionDto): Promise<Transaccion>;
    remove(id: number): Promise<Transaccion>;
}
