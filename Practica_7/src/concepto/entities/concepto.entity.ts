import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType() 
@Entity('conceptos') 
export class Concepto {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'Nombre del concepto' })
  @Column({ type: 'varchar', length: 255 })
  concepto: string;

  @Field({ description: 'Descripción detallada del concepto' })
  @Column({ type: 'text' })
  detalle: string;
}
