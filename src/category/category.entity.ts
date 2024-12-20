import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v7 } from 'uuid';

@Entity('categories')
export class Category {
  @PrimaryColumn({
    type: 'uuid',
    nullable: false,
    default: () => v7(),
  })
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;
}
