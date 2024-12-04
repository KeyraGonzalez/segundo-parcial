import { Module } from '@nestjs/common';
import { TransaccionService } from './transaccion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaccion } from './entities/transaccion.entity';
import { Caja } from './entities/caja.entity';
import { Concepto } from './entities/concepto.entity';
import { TransaccionController } from './transaccion.controller';

@Module({
  providers: [TransaccionService],
  imports: [ TypeOrmModule.forFeature([Transaccion, Caja, Concepto])],
  exports: [ TypeOrmModule ],
  controllers: [ TransaccionController]
})
export class TransaccionModule {}
