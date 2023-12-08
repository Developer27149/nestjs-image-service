import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { BingWallpaper } from './bing-wallpaper.entity';
import { BingWallpaperService } from './bing-wallpaper.service';
import { GetBingWallpaperDto } from './dto/bing-wallpaper.dto';

@Controller('bing-wallpaper')
export class BingWallpaperController {
  constructor(private readonly bingWallpaperApi: BingWallpaperService) {}

  @ApiOperation({ summary: '基于开始和结束时间戳获取必应壁纸' })
  @ApiTags('bing-wallpaper')
  @ApiResponse({
    status: 200,
    description: '必应壁纸',
    type: [BingWallpaper],
  })
  @Post()
  getBingWallpaper(@Body() getBingWallpaperFilter: GetBingWallpaperDto) {
    return this.bingWallpaperApi.getBingWallpaperByDateRange(
      getBingWallpaperFilter,
    );
  }

  @ApiOperation({ summary: '获取最新的必应壁纸' })
  @ApiTags('bing-wallpaper')
  @ApiResponse({
    status: 200,
    description: '最新的必应壁纸',
    type: BingWallpaper,
  })
  @Get('newest')
  getNewestWallpaper() {
    return this.bingWallpaperApi.getNewestBingWallpaper();
  }

  @ApiOperation({ summary: '同步过去一周的必应壁纸数据到数据库中去' })
  @ApiTags('bing-wallpaper')
  @Get('synchronize')
  synchronizeWeeklyBingWallpaper() {
    return this.bingWallpaperApi.SynchronizeWeeklyBingWallpaper();
  }
}
