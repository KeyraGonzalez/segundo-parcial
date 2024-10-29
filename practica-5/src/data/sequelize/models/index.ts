import sequelize from '../index';
import Caja from './Caja';
import Concepto from './Concepto';
import Transaccion from './Transaccion';

export const initModels = async () => {
  await sequelize.sync({ alter: false }); 
};

initModels()
  .then(() => console.log('Los modelos se han sincronizado correctamente con la base de datos'))
  .catch((error) => console.error('Ocurrió un error al intentar sincronizar los modelos con la base de datos:', error));

export { Transaccion, Concepto, Caja };
