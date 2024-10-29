export class CajaEntity {
    constructor(
        public id: number,
        public descripcion: string,

        ) {}
    
        public static fromObject(object: { [key: string]: any }): CajaEntity {
        const { id, descripcion } = object;
        if (!id) throw 'El ID es obligatorio';
        if (!descripcion) throw 'La descripcion es obligatoria';

        return new CajaEntity(id, descripcion);
        }
    }
    