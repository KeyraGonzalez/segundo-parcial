import { Sequelize } from 'sequelize';
import { envs } from '../../config/envs';

const sequelize = new Sequelize(envs.DB_NAME, envs.DB_USER, envs.DB_PASSWORD, {
  host: envs.DB_HOST,
  port: envs.DB_PORT,
  dialect: 'postgres',
});

export default sequelize;
