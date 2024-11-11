import { Transaccion } from 'src/transaccion/entities/transaccion.entity';
export declare class Concepto {
    id: number;
    concepto: string;
    detalle: string;
    transacciones: Transaccion[];
    status: boolean;
}
