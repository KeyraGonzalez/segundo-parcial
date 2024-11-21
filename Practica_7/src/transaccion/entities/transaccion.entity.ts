import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Caja } from '../../caja/entities/caja.entity';
import { Concepto } from '../../concepto/entities/concepto.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity('transacciones')
export class Transaccion {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Caja, { nullable: false })
  @JoinColumn({ name: 'idCaja' })
  caja: Caja;

  @ManyToOne(() => Concepto, { nullable: false })
  @JoinColumn({ name: 'idConcepto' })
  concepto: Concepto;

  @Column({ type: 'date', nullable: false })
  @Field(() => String)
  fecha: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  @Field(() => Number)
  ingreso: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  @Field(() => Number)
  egreso: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Field(() => String, { nullable: true })
  observacion?: string;

  // La relación 'concepto' ya está definida con @ManyToOne, no necesitas un @Field() extra aquí
}
