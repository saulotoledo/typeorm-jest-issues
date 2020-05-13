import { IsEmpty } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class IdentifiableEntity {

  @PrimaryGeneratedColumn()
  @IsEmpty()
  public id: number;
}
