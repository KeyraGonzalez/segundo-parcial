export class CreateCajaDto {
    private constructor(
        public readonly descripcion: string
        ) {}
    
        static create(props: { [key: string]: any }): [string?, CreateCajaDto?] {
        const { descripcion } = props;
    
        if (!descripcion) return ['descripcion property is required', undefined];
    
        return [undefined, new CreateCajaDto(descripcion)];
        }
    }