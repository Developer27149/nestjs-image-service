import { Module } from '@nestjs/common';

import { BingWallpaperController } from './bing-wallpaper.controller';
import { BingWallpaperService } from './bing-wallpaper.service';

@Module({
  imports: [],
  controllers: [BingWallpaperController],
  providers: [BingWallpaperService],
})
export class BingWallpaperModule {}
