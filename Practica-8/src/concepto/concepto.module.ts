import { Module } from '@nestjs/common';
import { ConceptoService } from './concepto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concepto } from './entities/concepto.entity';
import { ConceptoGateway } from './concepto.gateway';
@Module({
  providers: [ConceptoGateway, ConceptoService],
  imports: [ TypeOrmModule.forFeature([Concepto])],
  exports: [ TypeOrmModule ],
})
export class ConceptoModule {}
