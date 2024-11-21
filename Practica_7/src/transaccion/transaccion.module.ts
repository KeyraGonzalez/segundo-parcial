import { Module } from '@nestjs/common';
import { TransaccionService } from './transaccion.service';
import { TransaccionResolver } from './transaccion.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaccion } from './entities/transaccion.entity';
import { Caja } from 'src/caja/entities/caja.entity';
import { Concepto } from 'src/concepto/entities/concepto.entity';

@Module({
  providers: [TransaccionService, TransaccionResolver],
  imports: [ TypeOrmModule.forFeature([Transaccion, Caja, Concepto])],
  exports: [ TypeOrmModule ],
})
export class TransaccionModule {}
