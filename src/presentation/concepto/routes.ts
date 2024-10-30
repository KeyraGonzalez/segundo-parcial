import { Router } from 'express';
import { ConceptosController } from './controller';
import { ConceptoDatasourceImpl } from '../../infrastructure/datasource/concepto.datasource.impl';
import { ConceptoRepositoryImpl } from '../../infrastructure/repositories/concepto.repository.impl';


export class ConceptosRoutes {
    static get routes(): Router {
        const router = Router();

        const conceptoDatasource = new ConceptoDatasourceImpl();
        const conceptoRepository = new ConceptoRepositoryImpl(conceptoDatasource);
        const conceptosController = new ConceptosController(conceptoRepository);

        router.get('/', conceptosController.getConceptos);
        router.get('/:id', conceptosController.getConceptoById);
        router.post('/', conceptosController.createConcepto);
        router.put('/:id', conceptosController.updateConcepto);
        router.delete('/:id', conceptosController.deleteConcepto);

        return router;
    }
}