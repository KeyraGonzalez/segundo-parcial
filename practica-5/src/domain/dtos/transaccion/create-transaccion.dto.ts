export class CreateTransaccionDto {
    private constructor(
        public readonly idCaja: number,
        public readonly idConcepto: number,
        public readonly fecha: Date,
        public readonly ingreso: number,
        public readonly egreso: number,
        public readonly observacion?: string
        ) {}
    
        static create(props: { [key: string]: any }): [string?, CreateTransaccionDto?] {
        const { idCaja, idConcepto, fecha, ingreso, egreso, observacion } = props;
    
        if (!idCaja || isNaN(Number(idCaja))) return ['idCaja must be a valid number', undefined];
        if (!idConcepto || isNaN(Number(idConcepto))) return ['idConcepto must be a valid number', undefined];
        if (!fecha) return ['fecha property is required', undefined];
        if (ingreso == null || isNaN(Number(ingreso))) return ['ingreso must be a valid number', undefined];
        if (egreso == null || isNaN(Number(egreso))) return ['egreso must be a valid number', undefined];
    
        return [undefined, new CreateTransaccionDto(idCaja, idConcepto, fecha, ingreso, egreso, observacion)];
        }
    }