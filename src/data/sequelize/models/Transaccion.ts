import { Model, DataTypes } from 'sequelize';
import sequelize from '../index';
import Caja from './Caja';
import Concepto from './Concepto';

class Transaccion extends Model {
  public id!: number;
  public idCaja!: number;
  public idConcepto!: number;
  public fecha!: Date;
  public ingreso!: number;
  public egreso!: number;
  public observacion?: string;
}

Transaccion.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idCaja: {
    type: DataTypes.INTEGER,
    references: {
      model: Caja,
      key: 'id',
    },
    allowNull: false,
  },
  idConcepto: {
    type: DataTypes.INTEGER,
    references: {
      model: Concepto,
      key: 'id',
    },
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  ingreso: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  egreso: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  observacion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Transaccion',
  tableName: 'transacciones',
  timestamps: false,
});

Caja.hasMany(Transaccion, { foreignKey: 'idCaja' });
Concepto.hasMany(Transaccion, { foreignKey: 'idConcepto' });
Transaccion.belongsTo(Caja, { foreignKey: 'idCaja' });
Transaccion.belongsTo(Concepto, { foreignKey: 'idConcepto' });

export default Transaccion;
