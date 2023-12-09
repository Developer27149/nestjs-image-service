import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

import { AppInterceptor } from './utils/app.interceptor';
import { BingWallpaperModule } from './bing-wallpaper/bing-wallpaper.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZodValidationPipe } from 'nestjs-zod';
import { nestjsDataSourceOptions } from '../config/db.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(nestjsDataSourceOptions),
    BingWallpaperModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: AppInterceptor,
    },
  ],
})
export class AppModule {}
