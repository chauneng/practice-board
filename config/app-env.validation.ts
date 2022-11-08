import { IsEnum, IsNumber } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
}

export class AppEnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  PORT: number;
}
