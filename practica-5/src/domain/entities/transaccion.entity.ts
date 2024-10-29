export class TransaccionEntity {
    constructor(
        public id: number,
        public idCaja: number,
        public idConcepto: number,
        public ingreso: number,
        public egreso: number,
        public observacion?: string,

        ) {}
    
        public static fromObject(object: { [key: string]: any }): TransaccionEntity {
        const { id, idCaja, idConcepto, ingreso, egreso, observacion } = object;
        if (!id) throw 'El ID es obligatorio';
        if (!idCaja || isNaN(Number(idCaja))) throw 'El ID de la caja es obligatorio y debe ser un número';
        if (!idConcepto || isNaN(Number(idConcepto))) throw 'El ID de la concepto es obligatorio y debe ser un número';
        if (!ingreso) throw 'La fecha es obligatoria';
        if (!egreso) throw 'el egreso es obligatoria';

        return new TransaccionEntity(id, idCaja, idConcepto, ingreso, egreso, observacion);
        }
    }
    