export class CreateConceptoDto {
    private constructor(
        public readonly concepto: string,
        public readonly detalle: string
        ) {}
    
        static create(props: { [key: string]: any }): [string?, CreateConceptoDto?] {
        const { concepto, detalle } = props;
    
        if (!concepto) return ['concepto property is required', undefined];
        if (!detalle) return ['detalle property is required', undefined];
    
        return [undefined, new CreateConceptoDto(concepto, detalle)];
        }
    }
    