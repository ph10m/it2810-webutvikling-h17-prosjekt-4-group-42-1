install MongoDB. Start "mongod" process.
npm install
npm run dev to run database connection and client concurrently.

importing the cards to the database:
```
mongoimport --jsonArray --db group42 --collection cards --drop --file ~/Documents/Git/IT2810-GithubClassroom/Prosjekt4/server/data/allcards_fixed.json
```

to delete a group of cards by query:
```
db.cards.deleteMany({'cardId': {'$regex': 'GAME'}})
```
where 'GAME' is part of a query like 'GAME_123'. To find all cards containing 'Power' in its name:
```
db.cards.deleteMany({'name': {'$regex': 'Power'}})
```
