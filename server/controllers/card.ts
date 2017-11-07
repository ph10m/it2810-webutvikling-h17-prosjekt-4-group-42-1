import Card from '../models/card';
import BaseCtrl from './base';

export default class CardCtrl {
  model = Card;
  count: number;

  // Get all
  getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  }

  countCards = (req, res) => {
    // simply returns the current length of count, found on line 50.
    res.json(this.count);
  }

  getByQuery = (req, res) => {
    let parsed_query = {}
    // stupid code thx
    if (req.query.attack !== undefined) {
      parsed_query['attack'] = { '$gt': req.query.attack };
    }
    if (req.query.health !== undefined) {
      parsed_query['health'] = { '$in': req.query.health };
    }
    if (req.query.cost !== undefined) {
      parsed_query['cost'] = { '$gt': -1, '$in': req.query.cost };
    }
    if (req.query.playerClass !== undefined) {
      parsed_query['playerClass'] = { '$in': req.query.playerClass };
    }
    if (req.query.type !== undefined) {
      parsed_query['type'] = { '$in': req.query.type };
    }
    if (req.query.rarity !== undefined) {
      parsed_query['rarity'] = { '$in': req.query.rarity };
    }
    console.log('Mongoose finding ');
    console.log(parsed_query);
    let count = 0
    this.model.find(parsed_query, (err, obj) => {
      if (err) {
        return console.error(err);
      }
      // update length of current card count
      this.count = obj.length
      res.json(obj);
    }).sort({'cost': 1});
  }

  // Update by id
  update = (req, res) => {
    this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }

  // Delete by id
  delete = (req, res) => {
    this.model.findOneAndRemove({ _id: req.params.id }, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }
}
