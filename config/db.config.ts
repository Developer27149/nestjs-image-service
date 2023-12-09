import { DataSource, DataSourceOptions } from 'typeorm';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const nestjsDataSourceOptions: TypeOrmModuleOptions = {
  type: 'better-sqlite3',
  database: './database/db.sqlite',
  entities: ['./**/*.entity{.ts,.js}'],
  // synchronize: true 选项会让 TypeORM 在每次应用启动时都尝试自动同步数据库模式。
  // 这意味着如果你的实体类有任何更改，TypeORM 将尝试更新数据库模式以匹配新的实体类。
  synchronize: false,
  autoLoadEntities: true, // 自动链接被 forFeature 注册的实体
};

export const ormConfigOptions: DataSourceOptions = {
  name: 'default',
  entities: ['./**/*.entity{.ts,.js}'],
  type: 'better-sqlite3',
  database: './database/db.sqlite',
};

// 创建 dataSource 提供给 typeorm cli 使用
export default new DataSource(ormConfigOptions);
