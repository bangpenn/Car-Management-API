import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('orders', (table) => {
    table.increments('id').primary();
    table.uuid('users_id').references('id').inTable('users').onDelete('SET NULL');
    table.uuid('cars_id').references('id').inTable('cars').onDelete('SET NULL');
    table.string('car').notNullable();
    table.string('start_rent').notNullable();
    table.string('finish_rent').notNullable();
    table.string('price').notNullable();
    table.string('status').notNullable();
    table.timestamps(true, true);
    table.timestamp('deleted_at').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('orders', (table) => {
      table.dropColumn('deleted_at');
    });
  }
