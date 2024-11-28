import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CajaModule } from './caja/caja.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConceptoModule } from './concepto/concepto.module';
import { TransaccionModule } from './transaccion/transaccion.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      autoLoadEntities: true,
    }),
    CajaModule,
    ConceptoModule,
    TransaccionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
