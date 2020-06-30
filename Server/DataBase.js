export let users = [{username: 'wmtmartinez', password: '12345', age: '39', marriage_status: 'single'}];

export let character_data = [
  {
    id: 'kanye-west',      
    votesPros: 13,
    votesCons: 7
  },
  {
    id: 'mark-suckerberg',
    votesPros: 7,
    votesCons: 13
  },
  {
    id: 'cristina',
    votesPros: 7,
    votesCons: 13
  },
  {
    id: 'malala',
    votesPros: 13,
    votesCons: 7
  }];

export let votes_user = [
  {
      username:'', 
      characterId:'', 
      totalVotes: 0
  }];

  module.exports = {
    character_data, votes_user, users
  }