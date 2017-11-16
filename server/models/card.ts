import * as mongoose from 'mongoose';

// const cardSets = {
//   sets: [
//       "Basic",
//       "Classic",
//       "Credits",
//       "Naxxramas",
//       "Debug",
//       "Goblins vs Gnomes",
//       "Missions",
//       "Promotion",
//       "Reward",
//       "System",
//       "Blackrock Mountain",
//       "Hero Skins",
//       "Tavern Brawl",
//       "The Grand Tournament"
//   ]
// }

const cardSchema = new mongoose.Schema({
  name : String,
  cardSet : String,
  type : String,
  rarity : String,
  cost : Number,
  attack : Number,
  health : Number,
  text : String,
  img : String,
  imgGold : String,
  locale : String,
  playerClass : String,
  elite : Boolean,
  cardId : String,
  dbfId : String
});

const Card = mongoose.model('Card', cardSchema);

export default Card;
