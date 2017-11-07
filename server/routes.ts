import * as express from 'express';

import UserCtrl from './controllers/user';
import CardCtrl from './controllers/card';
import Card from './models/card';

export default function setRoutes(app) {

  const router = express.Router();

  const cardCtrl = new CardCtrl();
  const userCtrl = new UserCtrl();

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
  router.route('/card?').get(cardCtrl.getByQuery);
  router.route('/cards/count').get(cardCtrl.count);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
