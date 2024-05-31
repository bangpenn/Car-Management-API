import { Knex } from "knex";
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
    await knex('users').del();

    await knex('users').insert([
        { id: uuidv4(), username: 'superadmin', email: 'superadmin@example.com', password: 'superadminpassword', role: 'superadmin' },
        { id: uuidv4(), username: 'admin', email: 'admin@example.com', password: 'adminpassword', role: 'admin' },
        { id: uuidv4(), username: 'user1', email: 'user1@example.com', password: 'user1password', role: 'member' },
    ]);
};
