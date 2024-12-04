import { Module } from '@nestjs/common';
import { NatsModule } from 'src/transports/nats.module';
import { TransaccionesController } from './transaccion.controller';

@Module({
  controllers: [TransaccionesController],
  imports: [NatsModule],
})
export class TransaccionModule {}
