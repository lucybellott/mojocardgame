const { User }  = require('./User')

const { Deck } = require('./Deck');
const { Card } = require('./Card');
const { Attack } = require('./Attack');

// Associations
User.hasMany(Deck)
Deck.belongsTo(User)

Deck.hasMany(Card)
Card.belongsTo(Deck)


Card.hasMany(Attack)
Attack.belongsTo(Card)


module.exports = { User, Deck, Card, Attack };

