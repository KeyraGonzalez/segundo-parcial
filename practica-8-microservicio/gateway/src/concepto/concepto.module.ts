import { Module } from '@nestjs/common';
import { NatsModule } from 'src/transports/nats.module';
import { ConceptosController } from './concepto.controller';

@Module({
  controllers: [ConceptosController],
  imports: [NatsModule],
})
export class ConceptoModule {}
