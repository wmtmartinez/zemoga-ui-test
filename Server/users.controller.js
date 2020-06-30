import * as database from './DataBase';
import { json } from 'body-parser';

export let { users } = database;

export const addUser = async (req, res) => {

  const { username, password, age, marriage_status } = req.body;

  const userIndex = users.findIndex(user => user.username === username);

  if(userIndex>=0){
    return res.json({error: {error: 4, message: 'User already exists'}});
  }

  users = [...users, {
    username, 
    password, 
    age, 
    marriage_status
  }]

  res.json({username, password, age, marriage_status});
 }

 export const getUsers =  async (req, res) => {
   res.json(users);
 }

 export const updateUser = async (req, res) => {
  const { username, password, age, marriage_status } = req.body;

  const userIndex = users.findIndex(user => user.username === username);

  if(userIndex<0) {
    return res.json({error: { code: 3, message: 'User is not registered'} });
  }

  users[userIndex] = { username, password, age, marriage_status };

  res.json({ username, password, age, marriage_status });
}

export const getUserByUsername = async (req, res) => {
  const {username} = req.params;

  const user = users.find(user=>user.username === username);

  if(!user) {
    return res.json({error: {code: 3, message: 'User is not registered'} });
  } else {
    res.json(user);
  }
}