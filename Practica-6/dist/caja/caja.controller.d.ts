import { CajaService } from './caja.service';
import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';
export declare class CajaController {
    private readonly cajaService;
    constructor(cajaService: CajaService);
    create(createCajaDto: CreateCajaDto): import("./entities/caja.entity").Caja;
    findAll(): Promise<import("./entities/caja.entity").Caja[]>;
    findOne(id: string): Promise<import("./entities/caja.entity").Caja>;
    update(id: string, updateCajaDto: UpdateCajaDto): Promise<import("./entities/caja.entity").Caja>;
    remove(id: string): Promise<import("./entities/caja.entity").Caja>;
}
