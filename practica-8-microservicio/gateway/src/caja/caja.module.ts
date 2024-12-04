import { Module } from '@nestjs/common';
import { NatsModule } from 'src/transports/nats.module';
import { CajasController } from './caja.controller';

@Module({
  controllers: [CajasController],
  imports: [NatsModule],
})
export class CajaModule {}
