install MongoDB. Start "mongod" process.
npm install
npm run dev to run database connection and client concurrently.

importing the cards to the database:
mongoimport --jsonArray --db group42 --collection cards --drop --file ~/Documents/Git/IT2810-GithubClassroom/Prosjekt4/server/data/allcards_fixed.json;
