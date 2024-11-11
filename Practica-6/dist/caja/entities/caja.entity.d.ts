import { Transaccion } from 'src/transaccion/entities/transaccion.entity';
export declare class Caja {
    id: number;
    descripcion: string;
    transacciones: Transaccion[];
    status: boolean;
}
