import { DataSource } from 'typeorm';
import { CoffeeRefactor1657817420196 } from './src/migrations/1657817420196-CoffeeRefactor';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [],
  migrations: [CoffeeRefactor1657817420196],
});
