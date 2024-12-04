import { Module } from '@nestjs/common';
import { ConceptoService } from './concepto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concepto } from './entities/concepto.entity';
import { ConceptoController } from './concepto.controller';
@Module({
  providers: [ConceptoService],
  imports: [ TypeOrmModule.forFeature([Concepto])],
  exports: [ TypeOrmModule ],
  controllers: [ConceptoController]
})
export class ConceptoModule {}
