import { AppInitializer } from './app.initializer';

(new AppInitializer()).getApplication().then(
  // tslint:disable-next-line:no-magic-numbers
  (app): Promise<object> => app.listen(3000, '0.0.0.0'),
  (error): void => console.log(error)
);
