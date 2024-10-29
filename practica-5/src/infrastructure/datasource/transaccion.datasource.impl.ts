import { CreateTransaccionDto, TransaccionDatasource, TransaccionEntity, UpdateTransaccionDto } from '../../domain';
import sequelize from '../../data/sequelize/index';
import Transaccion from '../../data/sequelize/models/Transaccion';

export class TransaccionDatasourceImpl implements TransaccionDatasource {

    async create(createTransaccionDto: CreateTransaccionDto): Promise<TransaccionEntity> {
        const transaccionData = {
            idCaja: createTransaccionDto.idCaja,
            idConcepto: createTransaccionDto.idConcepto,
            fecha: createTransaccionDto.fecha,
            ingreso: createTransaccionDto.ingreso,
            egreso: createTransaccionDto.egreso,
            observacion: createTransaccionDto.observacion,
        };
        const transaccion = await Transaccion.create(transaccionData);
        return TransaccionEntity.fromObject(transaccion.toJSON());
    }

    async getAll(): Promise<TransaccionEntity[]> {
        try {
            const transacciones = await Transaccion.findAll();
            return transacciones.map(transaccion => TransaccionEntity.fromObject(transaccion.toJSON()));
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener las transacciones');
        }
    }

    async findById(id: number): Promise<TransaccionEntity> {
        const transaccion = await Transaccion.findByPk(id);
        if (!transaccion) throw `Transacción con id ${id} no encontrada`;
        return TransaccionEntity.fromObject(transaccion.toJSON());
    }

    async updateById(updateTransaccionDto: UpdateTransaccionDto): Promise<TransaccionEntity> {
        await this.findById(updateTransaccionDto.id);
        
        const [_, updatedTransaccion] = await Transaccion.update(updateTransaccionDto.values, {
            where: { id: updateTransaccionDto.id },
            returning: true,
        });

        return TransaccionEntity.fromObject(updatedTransaccion[0].toJSON());
    }

    async deleteById(id: number): Promise<TransaccionEntity> {
        await this.findById(id);
        const deleted = await sequelize.models.Transaccion.destroy({
            where: { id }
        });

        if (deleted) {
            return TransaccionEntity.fromObject({ id });
        } else {
            throw `Transacción con id ${id} no pudo ser eliminada`;
        }
    }
}
