import { SERVER_URL } from './constants';

/* Votes Controllers */
export const saveVote = async ({ characterId, prosVotes, consVotes }, callback) => {
    const userData = getUserData();

    let response = await fetch(`${SERVER_URL}/savevote`,{
      method: 'POST',
      body: JSON.stringify({ id: characterId, prosVotes: prosVotes, consVotes: consVotes, username: userData.username }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': userData.token
      }
    }).then((response)=>{
      return response;
    }, 
    (error)=>{
      console.log(error)
    });

    const voteSaved = await response.json();
    if(callback){
        callback(voteSaved);
    }
}

export const getVotes = async (callback) => {
    let response = await fetch(`${SERVER_URL}/votes`);
    const votesList = await response.json();

    if(callback) {
        callback(votesList);
    }
}

export const getVoteByCharacter = async (characterId, callback) => {
    let response = await fetch(`${SERVER_URL}/votes/${characterId}`);
    const voteData = await response.json();

    if(callback) {
        callback(voteData);
    }
}

/* Login - Sign up controller */
export const logIn = async ({username, password}, callback) => {
   let response = await fetch(`${SERVER_URL}/jwtlogin`,{
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response)=>{
      return response;
    }, 
    (error)=>{
      console.log(error.data)
    });

    const userLogedIn = await response.json();
    if(callback){
        callback(userLogedIn);
    }
}

export const logOut = ()=>{
  localStorage.removeItem('user-data');
}

export const getUserData = ()=>{
  const storageData = localStorage.getItem('user-data');
  const userData = JSON.parse(storageData);
  
  return ({
    username: userData ? userData.username : null,
    token: userData ? userData.accessToken : null
  });
}

export const signUp = async({ username, password, age, marriage_status }, callback) => {
  let response = await fetch(`${SERVER_URL}/signup`,{
    method: 'POST',
    body: JSON.stringify({ username, password, age, marriage_status }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response)=>{
    return response;
  }, 
  (error)=>{
    console.log(error.data)
  });

  const userSignup = await response.json();
  if(callback){
      callback(userSignup);
  }
}