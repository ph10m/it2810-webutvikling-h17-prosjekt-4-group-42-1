### Setup
install MongoDB. Start "mongod" process.
npm install
npm run dev to run database connection and client concurrently.

### Testing
There are both client (frontend) and server (backend) tests present, as well as e2e. Test files, named "component.spec.ts", known as spec files, refers to unit tests for the respective "component.ts" file.

**Frontend** tests are present in the respective components folder, e.g. ```/client/app/cards/cards.component.spec.ts``` and will all run when calling "npm run test", which in turn simply calls "ng test". This runs Karma task runner with the Jasime framework.

**Backend** tests are found in ```/server/test/``` as there are no correlating components on the server side. This runs the Mocha test framework in the terminal.

**e2e**, or End-to-End tests, are typically used to verify the behavior of rendered elements. So far only the application root itself, or the navbar, has been tested. Found in ```/e2e``` as "app.e2e-spec.ts" along with "app.po.ts". ".po" being the Protractor file. Protractor is an e2e test framework, with Selenium, a web driver (to simulate Chrome) included.

All test configuration files are found within the project root. This includes "karma.conf.js" and "protractor.conf.js". 



### Modifying the database:

importing the cards to the database:
```
mongoimport --jsonArray --db group42 --collection cards --drop --file ~/Documents/Git/IT2810-GithubClassroom/Prosjekt4/server/data/allcards_fixed.json
```

* delete a group of cards by query:
```
db.cards.deleteMany({'cardId': {'$regex': 'GAME'}})
```

	* where 'GAME' is part of a query like 'GAME_123'.

* To find all cards containing 'Power' in its name:
```
db.cards.deleteMany({'name': {'$regex': 'Power'}})
```
* delete all cards missing images:
```
db.cards.deleteMany({'img': {'$exists': false}})
```
* sort by values and limit search:
```
db.cards.find({name:{$regex: 'Power'}, cost: {$gt:0}}).sort({cost: 1}).limit(2).pretty()
```
