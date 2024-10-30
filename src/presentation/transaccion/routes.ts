import { Router } from 'express';
import { TransaccionesController } from './controller';
import { TransaccionDatasourceImpl } from '../../infrastructure/datasource/transaccion.datasource.impl';
import { TransaccionRepositoryImpl } from '../../infrastructure/repositories/transaccion.repository.impl';

export class TransaccionesRoutes {
    static get routes(): Router {
        const router = Router();

        const transaccionDatasource = new TransaccionDatasourceImpl();
        const transaccionRepository = new TransaccionRepositoryImpl(transaccionDatasource);
        const transaccionesController = new TransaccionesController(transaccionRepository);

        router.get('/', transaccionesController.getTransacciones);
        router.get('/:id', transaccionesController.getTransaccionById);
        router.post('/', transaccionesController.createTransaccion);
        router.put('/:id', transaccionesController.updateTransaccion);
        router.delete('/:id', transaccionesController.deleteTransaccion);

        return router;
    }
}