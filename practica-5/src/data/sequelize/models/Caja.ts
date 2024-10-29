import { Model, DataTypes } from 'sequelize';
import sequelize from '../index';

class Caja extends Model {
  public id!: number;
  public descripcion!: string;
}

Caja.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Caja',
  tableName: 'cajas',
  timestamps: false,
});

export default Caja;
