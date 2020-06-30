import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import * as votesController from './votes.controller';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/votes', votesController.getCharacterAll);
app.get('/votes/:characterId', votesController.getCharacterVoteById);
app.post('/savevote', votesController.saveVote);


const { PORT = 5000 } = process.env;
app.listen(PORT, () => console.log(`Authentication example app listening on port ${PORT}!`));