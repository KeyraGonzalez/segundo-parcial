import { Module } from '@nestjs/common';
import { CajaService } from './caja.service';
import { CajaResolver } from './caja.resolver';
import { Caja } from './entities/caja.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CajaResolver, CajaService],
  imports: [ TypeOrmModule.forFeature([Caja])],
  exports: [ TypeOrmModule ],
})
export class CajaModule {}
