import { Body, Controller, Get, Post } from '@nestjs/common';

import { BingWallpaperService } from './bing-wallpaper.service';
import { GetBingWallpaperDto } from './dto/bing-wallpaper.dto';

@Controller('bing-wallpaper')
export class BingWallpaperController {
  constructor(private readonly bingWallpaperApi: BingWallpaperService) {}

  @Post()
  getBingWallpaper(@Body() getBingWallpaperFilter: GetBingWallpaperDto) {
    console.log('filter: ', getBingWallpaperFilter);
    return getBingWallpaperFilter;
  }

  @Get('newest')
  getNewestWallpaper() {
    return this.bingWallpaperApi.getNewestBingWallpaper();
  }

  @Get('synchronize')
  synchronizeWeeklyBingWallpaper() {
    return this.bingWallpaperApi.SynchronizeWeeklyBingWallpaper();
  }
}
