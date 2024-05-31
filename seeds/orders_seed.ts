import { Knex } from "knex";
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
    await knex('orders').del();

    const users = await knex('users').select('id');
    const cars = await knex('cars').select('id');

    await knex('orders').insert([
        { users_id: users[0].id, cars_id: cars[0].id, car: 'Toyota Camry', start_rent: '2024-06-01', finish_rent: '2024-06-05', price: '2000000', status: 'pending' },
        { users_id: users[1].id, cars_id: cars[1].id, car: 'Honda Civic', start_rent: '2024-06-02', finish_rent: '2024-06-06', price: '1800000', status: 'completed' },
    ]);
};