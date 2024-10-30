export class UpdateTransaccionDto {
    private constructor(
        public readonly id: number,
        public readonly idCaja?: number,
        public readonly idConcepto?: number,
        public readonly fecha?: Date,
        public readonly ingreso?: number,
        public readonly egreso?: number,
        public readonly observacion?: string
        ) {}
    
        get values() {
        const returnObj: { [key: string]: any } = {};
        if (this.idCaja) returnObj.idCaja = this.idCaja;
        if (this.idConcepto) returnObj.idConcepto = this.idConcepto;
        if (this.fecha) returnObj.fecha = this.fecha;
        if (this.ingreso != null) returnObj.ingreso = this.ingreso;
        if (this.egreso != null) returnObj.egreso = this.egreso;
        if (this.observacion) returnObj.observacion = this.observacion;
        return returnObj;
        }
    
        static create(props: { [key: string]: any }): [string?, UpdateTransaccionDto?] {
        const { id, idCaja, idConcepto, fecha, ingreso, egreso, observacion } = props;
    
        if (!id || isNaN(Number(id))) return ['id must be a valid number', undefined];
    
        return [undefined, new UpdateTransaccionDto(id, idCaja, idConcepto, fecha, ingreso, egreso, observacion)];
        }
    }