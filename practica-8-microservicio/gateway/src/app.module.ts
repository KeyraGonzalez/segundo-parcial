import { Module } from '@nestjs/common';
import { NatsModule } from './transports/nats.module';
import { CajaModule } from './caja/caja.module';
import { CajasController } from './caja/caja.controller';
import { ConceptoModule } from './concepto/concepto.module';
import { ConceptosController } from './concepto/concepto.controller';
import { TransaccionModule } from './transaccion/transaccion.module';
import { TransaccionesController } from './transaccion/transaccion.controller';

@Module({
  imports: [NatsModule, CajaModule, ConceptoModule, TransaccionModule],
  controllers: [CajasController, ConceptosController, TransaccionesController],
  providers: [],
})
export class AppModule {}
