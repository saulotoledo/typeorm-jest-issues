import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';

/**
 * Main application module.
 */
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    ConfigModule,
    CoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
