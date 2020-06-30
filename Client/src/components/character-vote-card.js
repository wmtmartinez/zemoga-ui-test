import React, { useState, useEffect, useContext } from 'react';

import { VotingBoxComponent } from './voting-box';
import { VOTE_TYPE } from '../utils/constants';
import { getVoteByCharacter, saveVote } from '../utils/controllers';
import { UserContext } from '../data/UserContext';

export const CharacterVoteCardComponent = ( { characterData } )=>{
  const ACCIONS_MESSAGE = {
    DEFAULT_DESCRIPTION: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    VOTE_DONE: 'Thank you for voting!',
    VOTE_DISABLED: "Sorry, you're not able to vote this character",
    USER_NO_AUTHENTICATED: "Sorry, only logged in users can vote"
  }
  const [ prosPercentage, setProsPercentage ] = useState(0);
  const [ consPercentage, setConsPercentage ] = useState(0);
  const [ prosCount, setProsCount ] = useState(characterData.votesPros);
  const [ consCount, setConsCount ] = useState(characterData.votesCons);
  const [ canVote, setCanvote ] = useState(true);
  const [ voteCardMessage, setVoteCardMessage ] = useState(ACCIONS_MESSAGE.DEFAULT_DESCRIPTION);

  const { user } = useContext(UserContext);

  const voteHandler = (voteType)=> {
    let newPros = prosCount;
    let newCons = consCount;

    if(voteType === VOTE_TYPE.PROS) {
      newPros = prosCount + 1;
    }

    if(voteType === VOTE_TYPE.CONS) {
      newCons = consCount + 1;
    }

    saveVote({characterId: characterData.id, prosVotes: newPros, consVotes: newCons }, (response)=>{
      const { error } = response;

      if(error) {
        setCanvote(false);

        switch (error.code) {
          case 0: setVoteCardMessage(ACCIONS_MESSAGE.USER_NO_AUTHENTICATED); break;
          case 1: setVoteCardMessage(ACCIONS_MESSAGE.VOTE_DISABLED); break;
          default: break;
        }
      } else {
        setProsCount(newPros);
        setConsCount(newCons);
        setConsPercentage( (newCons * 100) / (newPros + newCons) );
        setProsPercentage( (newPros * 100) / (newPros + newCons) );
        setVoteCardMessage(ACCIONS_MESSAGE.VOTE_DONE);
      }
    });
  }

  const againHandler = ()=> {
    setVoteCardMessage(ACCIONS_MESSAGE.DEFAULT_DESCRIPTION) 
  }

  useEffect(()=>{
    getVoteByCharacter(characterData.id, (votesData)=>{
      setProsCount(votesData.votesPros);
      setConsCount(votesData.votesCons);

      setProsPercentage( (votesData.votesPros * 100) / (votesData.votesPros + votesData.votesCons) );
      setConsPercentage( (votesData.votesCons * 100) / (votesData.votesPros + votesData.votesCons) );
    });

    setCanvote(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user]);

  return (
    <article className="characters-section__character" style={{backgroundImage: `url(${characterData.picture})` }}>
      <div className="character__gradient-background"></div>

      <section className="character__content">
        <section className="character__higher-vote-thumb">
          <div className="vote-box-thumb-up thumb-small-up"></div>
        </section>
        
        <h1 className="character__title">{characterData.name}</h1>

        <section className="character__info">
          <h6 className="info__subtitle"><b>1 month ago</b> in {`${characterData.area}`}</h6>
          <p className="info__description"> { voteCardMessage } </p>
          { canVote && <VotingBoxComponent characterId={characterData.id} onVote={voteHandler} onVoteAgain={againHandler}/>}
        </section>
      </section>
    
      <footer className="character__votes_results">
        <section className="character__pros result-data" style={{width: `${prosPercentage}%`}}> 
          <div className="thumb-medium-up result-thumb-indicator"></div>
          <div className="character__pros-result result-text"> {`${Math.round(prosPercentage)}%`}</div>
        </section>
        <section className="character__cons result-data" style={{width: `${consPercentage}%`}}> 
          <div className="character__cons-result result-text">{`${Math.round(consPercentage)}%`}</div>
          <div className="thumb-medium-down result-thumb-indicator"></div>
        </section>
      </footer>
    </article>
  )
}