import React, { useState, useEffect } from 'react';

import { VotingBoxComponent } from './voting-box';
import { VOTE_TYPE } from '../utils/constants';
import { getVoteByCharacter, saveVote } from '../utils/controllers';

export const CharacterVoteCardComponent = ( { characterData } )=>{
  const [ prosPercentage, setProsPercentage ] = useState(0);
  const [ consPercentage, setConsPercentage ] = useState(0);
  const [ prosCount, setProsCount ] = useState(characterData.votesPros);
  const [ consCount, setConsCount ] = useState(characterData.votesCons);

  const voteHandler = (voteType)=> {
    let newPros = prosCount;
    let newCons = consCount;

    if(voteType === VOTE_TYPE.PROS) {
      newPros = prosCount + 1;
      setProsCount(newPros);
    }

    if(voteType === VOTE_TYPE.CONS) {
      newCons = consCount + 1;
      setConsCount(newCons);
    }

    saveVote({characterId: characterData.id, prosVotes: newPros, consVotes: newCons }, ()=>{
      setConsPercentage( (newCons * 100) / (newPros + newCons) );
      setProsPercentage( (newPros * 100) / (newPros + newCons) );
    });
  }

  useEffect(()=>{
    getVoteByCharacter(characterData.id, (votesData)=>{
      setProsCount(votesData.votesPros);
      setConsCount(votesData.votesCons);

      setProsPercentage( (votesData.votesPros * 100) / (votesData.votesPros + votesData.votesCons) );
      setConsPercentage( (votesData.votesCons * 100) / (votesData.votesPros + votesData.votesCons) );
    })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


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
          <VotingBoxComponent characterId={characterData.id} onVote={voteHandler}/>
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