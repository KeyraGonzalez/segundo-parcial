import { Module } from '@nestjs/common';
import { CajaService } from './caja.service';
import { Caja } from './entities/caja.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CajaGateway } from './caja.gateway';

@Module({
  providers: [CajaGateway, CajaService],
  imports: [ TypeOrmModule.forFeature([Caja])],
  exports: [ TypeOrmModule ],
})
export class CajaModule {}
