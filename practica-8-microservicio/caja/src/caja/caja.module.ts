import { Module } from '@nestjs/common';
import { CajaService } from './caja.service';
import { Caja } from './entities/caja.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CajaController } from './caja.controller';

@Module({
  providers: [CajaService],
  imports: [ TypeOrmModule.forFeature([Caja])],
  exports: [ TypeOrmModule ],
  controllers: [CajaController],
})
export class CajaModule {}
