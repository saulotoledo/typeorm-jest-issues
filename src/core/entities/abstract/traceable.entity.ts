import { IsEmpty } from 'class-validator';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

import { IdentifiableEntity } from './identifiable.entity';

/**
 * An entity that is traceable by the creation and modified dates.
 */
export abstract class TraceableEntity extends IdentifiableEntity {

  @CreateDateColumn()
  @IsEmpty()
  public createdAt: Date;

  @UpdateDateColumn()
  @IsEmpty()
  public updatedAt: Date;
}
