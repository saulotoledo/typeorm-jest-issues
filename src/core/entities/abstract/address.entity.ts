import { IsString, MaxLength } from 'class-validator';
import { Column, Entity } from 'typeorm';

import { IdentifiableEntity } from './identifiable.entity';

// tslint:disable:no-magic-numbers

@Entity('addresses')
export abstract class Address extends IdentifiableEntity {

  @Column({ length: 255 })
  @MaxLength(255)
  @IsString()
  public streetAndNum: string;

  @Column({ length: 100 })
  @MaxLength(100)
  @IsString()
  public city: string;

}
