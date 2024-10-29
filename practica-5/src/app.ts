import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';
import sequelize from './data/sequelize';
import { initModels } from './data/sequelize/models/index';


initModels();

(async()=> {
  main();

  await sequelize.authenticate();

})();


function main() {
  

  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });

  server.start();
}