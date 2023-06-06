/**
 * @param {import('node-pg-migrate').MigrationBuilder} pgm
 */
export function up(pgm) {
  pgm.sql('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'),
}

export const down = false;
