import { knex } from 'knex';
import { Model } from 'objection';
import dotenv from 'dotenv';

dotenv.config();

const knexConfig = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '1234',
    database: 'car_management',
  },
};

const db = knex(knexConfig);
Model.knex(db);

export default db;
