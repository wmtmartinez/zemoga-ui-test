const database = require('./DataBase');

export let { character_data, votes_user } = database;
import { users } from './users.controller';

const MAX_VOTES_PER_USER = 3;
  
 export const getCharacterAll = async (req, res) => {
    res.json(character_data);
 }

 export const saveVote = async (req, res) => {
    const { prosVotes, consVotes, id:characterId, username } = req.body;

    if(!prosVotes || !consVotes || !characterId) {
        return res.json({ error: 'Some vote information is missing'});
    }

    const userIndex = votes_user.findIndex(user => user.username === username && user.characterId === characterId);

    const isValidVote = (userIndex >= 0 && votes_user[userIndex].totalVotes < MAX_VOTES_PER_USER) || userIndex < 0;

    if(isValidVote) {
      character_data = [...character_data.filter(character => character.id !== characterId), { id: characterId, votesPros: prosVotes, votesCons: consVotes }];

      if(userIndex >= 0) {
        votes_user[userIndex].totalVotes = votes_user[userIndex].totalVotes + 1;
      } else {
        const newVote = { username: username, characterId: characterId, totalVotes: 1};
        votes_user = [...votes_user, newVote ];
      }
      res.json({ characterId: characterId, votesPros: prosVotes, votesCons: consVotes });
    } else {
      return res.json({error: {code: 1, message:'User is not able to vote more than 3 times per character'}})
    }
 }

 export const getCharacterVoteById = async (req, res) => {
     const id = req.params.characterId;

     const character = character_data.find(character => character.id === id);

     res.json(character);
 }

export const getVotesByUser = async (req, res) => {
  const { username } = req.params;

  const user = users.find(user => user.username === username );
  if(!user) {
    return res.json({error: {code: 3, message: 'User is not registered'}})
  } 

  const totalVotes = votes_user.filter(votes => votes.username === user.username).reduce((total, {totalVotes})=> total + totalVotes, 0);
  
  res.json({
    username: username,
    age: user.age,
    marriage_status: user.marriage_status,
    totalVotes: totalVotes
  });
}