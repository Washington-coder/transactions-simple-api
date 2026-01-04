import type { FastifyInstance } from 'fastify';
import { knex } from '../database';
import { randomUUID } from 'crypto'

export async function transactionsRoutes(app: FastifyInstance) {

    app.get('/hello', async () => {
        const transaction = await knex('transactions')
            .insert({
                id: randomUUID(),
                title: 'Transação de teste',
                amount: 1000,
            })
            .returning('*')

        return transaction
    });
}
