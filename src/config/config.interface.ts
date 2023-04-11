import { DatabaseType } from 'typeorm';

export interface DB {
  name: string;
  type: DatabaseType;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: string[];
  autoLoadEntities: boolean;
  synchronize: boolean;
}
