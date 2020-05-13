import { Connection, createConnection } from 'typeorm';

// const ormOptions = require('../../../ormconfig.js');

import { User } from './user.entity';

describe('User', (): void => {
  let connection: Connection;
  let objFromTypeOrm;

  beforeAll(async (): Promise<void> => {
    connection = await createConnection();
    objFromTypeOrm = connection.entityMetadatas.find((m): boolean => m.name === 'User').target;
  });

  beforeEach(async (): Promise<void> => {
    await connection.dropDatabase();
    await connection.synchronize(true);
  });

  afterAll(async (): Promise<void> => {
    await connection.close();
  });

  it('should have the same entity in TypeORM and here', (): void => {
    console.log(objFromTypeOrm.toString());
    console.log(User.toString());

    expect(objFromTypeOrm === User).toBeTruthy();
  });

});
