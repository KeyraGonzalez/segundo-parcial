import { Router } from 'express';
import { CajasController } from './controller';
import { CajaDatasourceImpl } from '../../infrastructure/datasource/caja.datasource.impl';
import { CajaRepositoryImpl } from '../../infrastructure/repositories/caja.repository.impl';

export class CajasRoutes {
    static get routes(): Router {
        const router = Router();

        const cajaDatasource = new CajaDatasourceImpl();
        const cajaRepository = new CajaRepositoryImpl(cajaDatasource);
        const cajasController = new CajasController(cajaRepository);

        router.get('/', cajasController.getCajas);
        router.get('/:id', cajasController.getCajaById);
        router.post('/', cajasController.createCaja);
        router.put('/:id', cajasController.updateCaja);
        router.delete('/:id', cajasController.deleteCaja);

        return router;
    }
}