import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('cars', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('users_id').references('id').inTable('users').onDelete('SET NULL');
    table.string('name').notNullable();
    table.string('category').notNullable();
    table.string('price').notNullable();
    table.uuid('created_by').references('id').inTable('users').onDelete('SET NULL');
    table.uuid('deleted_by').references('id').inTable('users').onDelete('SET NULL');
    table.uuid('updated_by').references('id').inTable('users').onDelete('SET NULL');
    table.timestamps(true, true);
    table.timestamp('deleted_at').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('cars', (table) => {
      table.dropColumn('deleted_at');
      table.dropColumn('deleted_by');
    });
}