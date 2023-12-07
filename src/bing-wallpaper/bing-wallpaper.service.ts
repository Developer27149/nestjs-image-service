import { Injectable } from '@nestjs/common';
import { getBingWallpaperByFilter } from '../utils/bing-wallpaper';

@Injectable()
export class BingWallpaperService {
  async getNewestBingWallpaper() {
    const data = await getBingWallpaperByFilter();
    return data[0];
  }
  async getBingWallpaperByDateRange() { }
  async getBingWallpaperByPage() { }
  /**
   * 从 Bing 官网同步本周的壁纸
   */
  async SynchronizeWeeklyBingWallpaper() {
    const data = await getBingWallpaperByFilter({ n: 7 });
    // TODO: 保存到数据库
    console.log(data);
    return data;
  }
}
