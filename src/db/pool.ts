import { Pool } from 'pg';

export const config = {
  application_name: 'seguridad',
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: 'seguridad_torogoz',
};

/**
 * @type {Pool} Singleton Pool Instance
 */
export default new Pool(config);
