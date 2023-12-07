import { Test, TestingModule } from '@nestjs/testing';
import { BingWallpaperService } from './bing-wallpaper.service';

describe('BingWallpaperService', () => {
  let service: BingWallpaperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BingWallpaperService],
    }).compile();

    service = module.get<BingWallpaperService>(BingWallpaperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
