import { Knex } from "knex";
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {


    return knex('cars').del()
      .then(function () {
        return knex('cars').insert([
          { id: uuidv4(), name: 'Toyota Camry', category: 'Sedan', price: '500000000' },
          { id: uuidv4(), name: 'Honda Civic', category: 'Sedan', price: '450000000' },
          { id: uuidv4(), name: 'Ford Mustang', category: 'Sports Car', price: '750000000' },
        ]);
      });
  };

 