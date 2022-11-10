import { registerAs } from '@nestjs/config';
import { AppEnvironmentVariables } from './app-env.validation';
import { IAppConfig } from './interface';
import { validateUtil } from './validate-util';

export default registerAs('practice-board-config-namespace', (): IAppConfig => {
  validateUtil(process.env, AppEnvironmentVariables);

  return {
    nodeEnv: process.env.NODE_ENV ?? 'develop',
    port: parseInt(process.env.PORT ?? '3000'),
  };
});
