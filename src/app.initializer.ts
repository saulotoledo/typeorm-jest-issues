import { HttpStatus, INestApplication, Injectable, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { CrudConfigService } from '@nestjsx/crud';

// tslint:disable: completed-docs

@Injectable()
export class AppInitializer {
  private app: INestApplication;

  constructor() {

    CrudConfigService.load({
      query: {
        limit: 10,
        maxLimit: 10,
        cache: false,
        alwaysPaginate: true,
      },
    });
  }

  public async getApplication(app?: INestApplication): Promise<INestApplication> {

    this.app = app || await this.initNestApp();
    this.initPipes();
    this.app.enableCors();

    return this.app;
  }

  private async initNestApp(): Promise<INestApplication> {

    const AppModule = (await import('./app.module')).AppModule;

    const fastifyAdapter = new FastifyAdapter({
      logger: true,
    });

    return await NestFactory.create<NestFastifyApplication>(
      AppModule,
      fastifyAdapter
    );
  }

  private initPipes(): void {
    // Allows class-validator library to work:
    this.app.useGlobalPipes(new ValidationPipe({
      // skipUndefinedProperties?: boolean;
      // skipNullProperties?: boolean;
      // skipMissingProperties?: boolean;
      whitelist: true,
      forbidNonWhitelisted: false,
      // groups?: string[];
      forbidUnknownValues: true,
      validationError: {
        target: true,
        value: true,
      },
      transform: true,
      disableErrorMessages: false,
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      validateCustomDecorators: true,
    }));
  }

}
