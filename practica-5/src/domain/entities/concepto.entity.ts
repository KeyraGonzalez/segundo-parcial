export class ConceptoEntity {
    constructor(
        public id: number,
        public concepto: string,
        public detalle: string,

        ) {}
    
        public static fromObject(object: { [key: string]: any }): ConceptoEntity {
        const { id, concepto, detalle } = object;
        if (!id) throw 'El ID es obligatorio';
        if (!concepto) throw 'el concepto es obligatoria';
        if (!detalle) throw 'el detalle es obligatoria';

        return new ConceptoEntity(id, concepto, detalle);
        }
    }
    