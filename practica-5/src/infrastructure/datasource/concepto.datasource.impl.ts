import { CreateConceptoDto, ConceptoDatasource, ConceptoEntity, UpdateConceptoDto } from '../../domain';
import sequelize from '../../data/sequelize/index';
import Concepto from '../../data/sequelize/models/Concepto';

export class ConceptoDatasourceImpl implements ConceptoDatasource {

    async create(createConceptoDto: CreateConceptoDto): Promise<ConceptoEntity> {
        const conceptoData = {
            concepto: createConceptoDto.concepto,
            detalle: createConceptoDto.detalle,
        };
        const concepto = await Concepto.create(conceptoData);
        return ConceptoEntity.fromObject(concepto.toJSON());
    }

    async getAll(): Promise<ConceptoEntity[]> {
        try {
            const conceptos = await Concepto.findAll();
            return conceptos.map(concepto => ConceptoEntity.fromObject(concepto.toJSON()));
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener los conceptos');
        }
    }

    async findById(id: number): Promise<ConceptoEntity> {
        const concepto = await Concepto.findByPk(id);
        if (!concepto) throw `Concepto con id ${id} no encontrado`;
        return ConceptoEntity.fromObject(concepto.toJSON());
    }

    async updateById(updateConceptoDto: UpdateConceptoDto): Promise<ConceptoEntity> {
        await this.findById(updateConceptoDto.id);
        
        const [_, updatedConcepto] = await Concepto.update(updateConceptoDto.values, {
            where: { id: updateConceptoDto.id },
            returning: true,
        });

        return ConceptoEntity.fromObject(updatedConcepto[0].toJSON());
    }

    async deleteById(id: number): Promise<ConceptoEntity> {
        await this.findById(id);
        const deleted = await Concepto.destroy({
            where: { id }
        });

        if (deleted) {
            return ConceptoEntity.fromObject({ id });
        } else {
            throw `Concepto con id ${id} no pudo ser eliminado`;
        }
    }
}
