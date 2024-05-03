const { User } = require('./User')

const { Deck } = require('./Deck');
const { Card } = require('./Card');
const { Attack } = require('./Attack');

// Associations
User.hasMany(Deck)
Deck.belongsTo(User)

Deck.hasMany(Card)
Card.belongsTo(Deck)

Card.belongsTo(Attack)
Attack.hasMany(Card)

console.log(User)

module.exports = { User, Deck, Card, Attack };

