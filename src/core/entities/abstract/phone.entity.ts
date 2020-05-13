import { IsString, MaxLength } from 'class-validator';
import { Column, Entity } from 'typeorm';

import { IdentifiableEntity } from './identifiable.entity';

// tslint:disable:no-magic-numbers

@Entity('phones')
export abstract class Phone extends IdentifiableEntity {

  @Column({ length: 50 })
  @MaxLength(50)
  @IsString()
  public number: string;

}
