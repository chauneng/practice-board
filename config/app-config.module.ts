import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './configuration';

@Module({
  imports: [ConfigModule.forFeature(appConfig)],
  providers: [],
  exports: [],
})
export class AppConfigModule {}
