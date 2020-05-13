import * as bcrypt from 'bcrypt';
import { Allow, IsEmail, IsString, MaxLength } from 'class-validator';
import { Column, Entity } from 'typeorm';

import { TraceableEntity } from '../../core/entities/abstract/traceable.entity';

// tslint:disable:no-magic-numbers

@Entity('users')
export class User extends TraceableEntity {

  @Column({ length: 255 })
  @MaxLength(255)
  @IsString()
  public name: string;

  @Column({ length: 120 })
  @MaxLength(120)
  @IsEmail()
  public email: string;

  @Column({ length: 100 })
  @MaxLength(100)
  @IsString()
  public username: string;

  @Column()
  @Allow()
  public password: string;

  /**
   * my documentation here...
   */
  public validatePassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}
