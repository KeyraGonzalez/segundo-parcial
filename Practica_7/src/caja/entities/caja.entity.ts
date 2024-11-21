import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType() 
@Entity('cajas') 
export class Caja {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'Descripción de la caja' })
  @Column({ type: 'varchar', length: 255 }) 
  descripcion: string;
}
