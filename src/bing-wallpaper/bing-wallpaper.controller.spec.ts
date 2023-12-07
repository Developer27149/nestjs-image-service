import { Test, TestingModule } from '@nestjs/testing';
import { BingWallpaperController } from './bing-wallpaper.controller';

describe('BingWallpaperController', () => {
  let controller: BingWallpaperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BingWallpaperController],
    }).compile();

    controller = module.get<BingWallpaperController>(BingWallpaperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
