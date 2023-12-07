import { APP_PIPE } from '@nestjs/core';
import { BingWallpaperModule } from './bing-wallpaper/bing-wallpaper.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZodValidationPipe } from 'nestjs-zod';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'db.sqlite',
      synchronize: true,
      entities: ['*.entity.ts'],
    }),
    BingWallpaperModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
