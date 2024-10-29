import { Model, DataTypes } from 'sequelize';
import sequelize from '../index';

class Concepto extends Model {
  public id!: number;
  public concepto!: string;
  public detalle!: string;
}

Concepto.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  concepto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  detalle: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Concepto',
  tableName: 'conceptos',
  timestamps: false,
});

export default Concepto;
