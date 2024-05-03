const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { Card } = require('.');
const db = require('../db/config');

let card;

beforeAll(async () => {
  await db.sync({ force: true });
  card = await Card.create({ name: 'New Card', mojo: 5, stamina: 10, imgUrl: 'https://www.w3schools.com/bootstrap4/img_avatar3.png' });
});

afterAll(async () => await db.sync({ force: true }));

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id');
  });

  // Add more tests 
});
