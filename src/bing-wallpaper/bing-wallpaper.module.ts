import { BingWallpaper } from './bing-wallpaper.entity';
import { BingWallpaperController } from './bing-wallpaper.controller';
import { BingWallpaperService } from './bing-wallpaper.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BingWallpaper])],
  controllers: [BingWallpaperController],
  providers: [BingWallpaperService],
})
export class BingWallpaperModule {}
