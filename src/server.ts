import fastify from 'fastify'
import { randomUUID } from 'crypto'
import { knex } from './database';
import { env } from './env';

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

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

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running');
  });
