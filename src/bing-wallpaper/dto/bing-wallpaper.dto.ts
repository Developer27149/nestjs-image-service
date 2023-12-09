import { BingWallpaperType } from '../entities/bing-wallpaper.entity';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export enum EMkt {
  enUS = 'en-US',
  zhCN = 'zh-CN',
}

export const getBingWallpaperSchema = z.object({
  startTimestamp: z.number().describe('开始时间戳'),
  endTimestamp: z.number().describe('结束时间戳'),
  language: z
    .enum([EMkt.enUS, EMkt.zhCN])
    .optional()
    .default(EMkt.zhCN)
    .describe('语言'),
});

export class GetBingWallpaperDto extends createZodDto(getBingWallpaperSchema) {}

export interface IBingWallpaperFilter {
  n?: number;
  mkt?: EMkt;
  format?: EFormat;
  resolution?: EResolution;
}

export interface IBingWallpaperResponse {
  images: BingWallpaperType[];
}

export enum EFormat {
  json = 'js',
  xml = 'xml',
  rss = 'rss',
}

export enum EResolution {
  _1366x768 = '1366x768',
  _1920x1080 = '1920x1080',
  UHD = 'UHD',
}
