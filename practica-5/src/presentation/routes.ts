import { Router } from 'express';

import { CajasRoutes } from './caja/routes'; 
import { ConceptosRoutes } from './concepto/routes'; 
import { TransaccionesRoutes } from './transaccion/routes'; 

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/cajas', CajasRoutes.routes); 
        router.use('/api/conceptos', ConceptosRoutes.routes); 
        router.use('/api/transacciones', TransaccionesRoutes.routes); 

        return router;
    }
}
