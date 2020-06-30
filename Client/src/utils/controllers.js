import { SERVER_URL } from './constants';

export const saveVote = async ({ characterId, prosVotes, consVotes }, callback) => {

    let response = await fetch(`${SERVER_URL}/savevote`,{
      method: 'POST',
      body: JSON.stringify({ id: characterId, prosVotes: prosVotes, consVotes: consVotes }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response)=>{
      return response;
    }, 
    (error)=>{
      console.log(error)
    });

    const voteSaved = response.json();
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