const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { Attack } = require('.');
const db = require('../db/config');

let attack;

beforeAll(async () => {
  await db.sync({ force: true });
  attack = await Attack.create({ title: 'Someattack', mojoCost: 10, staminaCost: 5 });
});

afterAll(async () => await db.sync({ force: true }));

describe('Attack', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id');
  });

  // Add more tests 
});
