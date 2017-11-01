import * as express from 'express';

import UserCtrl from './controllers/user';
import CatCtrl from './controllers/cat';
import CardCtrl from './controllers/card';
import Cat from './models/cat';
import Card from './models/card';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const cardCtrl = new CardCtrl();
  const userCtrl = new UserCtrl();

  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);
  // Cards
  router.route('/cards').get(cardCtrl.getAll);
  router.route('/cards/count').get(catCtrl.count);
  router.route('/card?').get(cardCtrl.getByQuery);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
