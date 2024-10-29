export class UpdateConceptoDto {
    private constructor(
        public readonly id: number,
        public readonly concepto?: string,
        public readonly detalle?: string
        ) {}
    
        get values() {
        const returnObj: { [key: string]: any } = {};
        if (this.concepto) returnObj.concepto = this.concepto;
        if (this.detalle) returnObj.detalle = this.detalle;
        return returnObj;
        }
    
        static create(props: { [key: string]: any }): [string?, UpdateConceptoDto?] {
        const { id, concepto, detalle } = props;
    
        if (!id || isNaN(Number(id))) return ['id must be a valid number', undefined];
    
        return [undefined, new UpdateConceptoDto(id, concepto, detalle)];
        }
    }