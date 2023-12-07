import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BingWallpaper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startdate: string;

  @Column()
  fullstartdate: string;

  @Column()
  enddate: string;

  @Column()
  url: string;

  @Column()
  urlbase: string;

  @Column()
  copyright: string;

  @Column()
  copyrightlink: string;

  @Column()
  title: string;
}
