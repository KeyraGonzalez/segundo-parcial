import { CreateCajaDto, CajaDatasource, CajaEntity, UpdateCajaDto } from '../../domain';
import sequelize from '../../data/sequelize/index';
import Caja from '../../data/sequelize/models/Caja';

export class CajaDatasourceImpl implements CajaDatasource {

    async create(createCajaDto: CreateCajaDto): Promise<CajaEntity> {
        const cajaData = {
            descripcion: createCajaDto.descripcion,
        };
        const caja = await Caja.create(cajaData);
        return CajaEntity.fromObject(caja.toJSON());
    }

    async getAll(): Promise<CajaEntity[]> {
        try {
            const cajas = await Caja.findAll();
            return cajas.map(caja => CajaEntity.fromObject(caja.toJSON()));
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener las cajas');
        }
    }

    async findById(id: number): Promise<CajaEntity> {
        const caja = await Caja.findByPk(id);
        if (!caja) throw `Caja con id ${id} no encontrada`;
        return CajaEntity.fromObject(caja.toJSON());
    }

    async updateById(updateCajaDto: UpdateCajaDto): Promise<CajaEntity> {
        await this.findById(updateCajaDto.id);
        
        const [_, updatedCaja] = await Caja.update(updateCajaDto.values, {
            where: { id: updateCajaDto.id },
            returning: true,
        });

        return CajaEntity.fromObject(updatedCaja[0].toJSON());
    }

    async deleteById(id: number): Promise<CajaEntity> {
        await this.findById(id);
        const deleted = await Caja.destroy({
            where: { id }
        });

        if (deleted) {
            return CajaEntity.fromObject({ id });
        } else {
            throw `Caja con id ${id} no pudo ser eliminada`;
        }
    }
}
