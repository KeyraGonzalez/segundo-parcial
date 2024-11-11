import { TransaccionService } from './transaccion.service';
import { CreateTransaccionDto } from './dto/create-transaccion.dto';
import { UpdateTransaccionDto } from './dto/update-transaccion.dto';
export declare class TransaccionController {
    private readonly transaccionService;
    constructor(transaccionService: TransaccionService);
    create(createTransaccionDto: CreateTransaccionDto): import("./entities/transaccion.entity").Transaccion;
    findAll(): Promise<import("./entities/transaccion.entity").Transaccion[]>;
    findOne(id: string): Promise<import("./entities/transaccion.entity").Transaccion>;
    update(id: string, updateTransaccionDto: UpdateTransaccionDto): Promise<import("./entities/transaccion.entity").Transaccion>;
    remove(id: string): Promise<import("./entities/transaccion.entity").Transaccion>;
}
