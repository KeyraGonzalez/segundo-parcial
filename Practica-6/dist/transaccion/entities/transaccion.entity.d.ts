import { Caja } from 'src/caja/entities/caja.entity';
import { Concepto } from 'src/concepto/entities/concepto.entity';
export declare class Transaccion {
    id: number;
    caja: Caja;
    concepto: Concepto;
    fecha: Date;
    ingreso: number;
    egreso: number;
    observacion: string;
    status: boolean;
}
