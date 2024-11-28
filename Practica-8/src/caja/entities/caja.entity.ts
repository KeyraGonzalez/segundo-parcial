import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cajas')
export class Caja {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  descripcion: string;
}
