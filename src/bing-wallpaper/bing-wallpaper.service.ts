import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { format } from 'date-fns';
import { LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';

import { getBingWallpaperByFilter } from '../utils/bing-wallpaper';
import { GetBingWallpaperDto } from './dto/bing-wallpaper.dto';
import { BingWallpaper } from './entities/bing-wallpaper.entity';

@Injectable()
export class BingWallpaperService {
  constructor(
    @InjectRepository(BingWallpaper)
    private bingWallpaperRepository: Repository<BingWallpaper>,
  ) {}
  async getNewestBingWallpaper() {
    const data = await getBingWallpaperByFilter();
    console.log(data);
    return data[0];
  }
  async getBingWallpaperByDateRange(filter: GetBingWallpaperDto) {
    const { startTimestamp, endTimestamp } = filter;
    const startDate = format(startTimestamp, 'yyyyMMdd');
    const endDate = format(endTimestamp, 'yyyyMMdd');
    const data = await this.bingWallpaperRepository.find({
      where: {
        enddate: LessThanOrEqual(endDate) && MoreThanOrEqual(startDate),
      },
    });
    return data;
  }
  /**
   * 从 Bing 官网同步本周的壁纸
   */
  async SynchronizeWeeklyBingWallpaper() {
    const data = await getBingWallpaperByFilter({ n: 7 });
    for (const item of data) {
      const existingItem = await this.bingWallpaperRepository.findOne({
        where: {
          url: item.url,
          urlbase: item.urlbase,
        },
      });
      if (existingItem) {
        // update existing item
        this.bingWallpaperRepository.update(existingItem.id, { ...item });
      } else {
        // create new item
        const newItem = this.bingWallpaperRepository.create({ ...item });
        this.bingWallpaperRepository.save(newItem);
      }
    }
    return;
  }
}
