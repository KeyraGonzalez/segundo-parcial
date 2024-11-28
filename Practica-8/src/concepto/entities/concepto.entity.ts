import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('conceptos') 
export class Concepto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  concepto: string;

  @Column({ type: 'text' })
  detalle: string;
}
