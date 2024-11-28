import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Caja } from '../../caja/entities/caja.entity';
import { Concepto } from '../../concepto/entities/concepto.entity';

@Entity('transacciones')
export class Transaccion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Caja, { nullable: false })
  @JoinColumn({ name: 'idCaja' })
  caja: Caja;

  @ManyToOne(() => Concepto, { nullable: false })
  @JoinColumn({ name: 'idConcepto' })
  concepto: Concepto;

  @Column({ type: 'date', nullable: false })
  fecha: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  ingreso: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  egreso: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  observacion?: string;

}
