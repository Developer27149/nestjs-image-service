import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
import { EMkt } from '../dto/bing-wallpaper.dto';

@Entity()
export class BingWallpaper {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '开始日期', example: '20000101' })
  @Column()
  startdate: string;

  @Column()
  fullstartdate: string;

  @ApiProperty({ description: '结束日期', example: '20000101' })
  @Column()
  enddate: string;

  @ApiProperty({ description: '1080p的图片地址' })
  @Column()
  url: string;

  @ApiProperty({ description: '图片基础地址，可以添加分辨率后缀得到图片地址' })
  @Column()
  urlbase: string;

  @ApiProperty({ description: '版权信息' })
  @Column()
  copyright: string;

  @ApiProperty({ description: '版权信息链接' })
  @Column()
  copyrightlink: string;

  @ApiProperty({ description: '标题' })
  @Column()
  title: string;

  @ApiProperty({ description: '语言', enum: EMkt, example: EMkt.zhCN })
  @Column()
  language: EMkt;
}

export type BingWallpaperType = BingWallpaper;
