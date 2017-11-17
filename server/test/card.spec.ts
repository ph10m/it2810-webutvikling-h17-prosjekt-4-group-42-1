import * as chai from 'chai';
import * as chaiHttp from 'chai-http';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import Card from '../models/card';

const should = chai.use(chaiHttp).should();

describe('Card', () => {

  beforeEach(done => {
    Card.remove({}, err => {
      done();
    });
  });

  describe('Backend tests for cards', () => {

    it('should get all cards', done => {
      chai.request(app)
        .get('/api/cards')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    it('should get card display limit', done => {
      chai.request(app)
        .get('/api/cards/count')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('number');
          res.body.should.be.eql(0);
          done();
        });
    });

    it('should get a card by its id', done => {
      const card = new Card({
        name : "name",
        cardSet : "set",
        type : "type",
        rarity : "rarity",
        cost : 10,
        attack : 9,
        health : 8,
        text : "text",
        img : "img",
        imgGold : "imgGold",
        locale : "locale",
        playerClass : "playerClass",
        elite : false,
        cardId : "cardId",
        dbfId : "dbfId"
      });
      card.save((error, newCat) => {
        chai.request(app)
          .get(`/api/card/${card.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.should.have.property('_id').eql(newCat.id);
            done();
          });
      });
    });
  });
});

