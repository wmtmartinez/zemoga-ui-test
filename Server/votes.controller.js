let character_data = [
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
    }
  ]
  
 export const getCharacterAll = async (req, res) => {
    res.json(character_data);
 }

 export const saveVote = async (req, res) => {
    const { prosVotes, consVotes, id:characterId } = req.body;

    if(!prosVotes || !consVotes || !characterId) {
        res.status(400);
        return res.json({ error: 'Some vote information is missing'});
    }

    character_data = [...character_data.filter(character => character.id !== characterId), { id: characterId, votesPros: prosVotes, votesCons: consVotes }];
    res.json({ id: characterId, votesPros: prosVotes, votesCons: consVotes });
 }

 export const getCharacterVoteById = async (req, res) => {
     const id = req.params.characterId;

     const character = character_data.find(character => character.id === id);

     res.json(character);
 }