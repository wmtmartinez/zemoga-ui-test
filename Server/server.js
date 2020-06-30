import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import * as votesController from './votes.controller';
import * as userController from './users.controller';
import { isAuthenticatedMiddleware, jwtAuthenticationMiddleware, jwtLogin } from './jwt-authentication';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(jwtAuthenticationMiddleware);

app.post('/jwtlogin', jwtLogin);

app.post('/savevote', isAuthenticatedMiddleware, votesController.saveVote);
app.get('/votes', votesController.getCharacterAll);
app.get('/votes/:characterId', votesController.getCharacterVoteById);
app.get('/votesbyuser/:username', votesController.getVotesByUser);

app.post('/signup', userController.addUser);
app.get('/users', userController.getUsers);
app.post('/updateUser', userController.updateUser);
app.get('/user/:username', userController.getUserByUsername);

// app.get('/votesByUser', votesController.votesByUser);

const { PORT = 5000 } = process.env;
app.listen(PORT, () => console.log(`Zemoga NodeJs test app listening on port ${PORT}!`));