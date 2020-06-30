import React, { useState, useEffect, useRef } from 'react';

import { VOTE_TYPE } from "../utils/constants";

export const VotingBoxComponent = ({characterId, onVote})=>{
  const DEFAULT_DESCRIPTION = 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.';
  const DEFAULT_BUTTON_TEXT = 'Vote now';
  const BUTTON_VOTE_DONE_TEXT = 'Vote again';
  const VOTE_DONE = 'Thank you for voting!';
  
  const [ voteSelected, setVoteSelected ] = useState(null);
  const [ voteDone, setVoteDone ] = useState(false);

  const buttonVote = useRef();

  const selectVote = (vote) => {
    setVoteSelected(vote);
  }

  const voteHandler = () => {
    if(voteSelected) {
      setVoteDone(true);
      setVoteSelected(null);

      if(onVote) {
        onVote(voteSelected);
      }
    }
  }

  const voteAgain = () => {
    setVoteDone(false);
    setVoteSelected(null);
  }

  useEffect(()=>{
    if(!voteDone && buttonVote.current) {
      buttonVote.current.focus();
    }
  },[voteDone])

  return(
    <>
      <p className="info__description"> { !voteDone ? DEFAULT_DESCRIPTION : VOTE_DONE } </p>

      {
        voteDone ? (
          <section className="info__votes-buttons">
            <button  className="button button-vote info__btn-vote" onClick={voteAgain}>{BUTTON_VOTE_DONE_TEXT}</button>
          </section>
        ) : (
          <section className="info__votes-buttons">
            <button className="button vote-box-thumb-up thumb-small-up" onClick={()=> selectVote(VOTE_TYPE.PROS)}></button>
            <button className="button vote-box-thumb-down thumb-small-down" onClick={()=> selectVote(VOTE_TYPE.CONS)}></button>
            <button ref={buttonVote} className={`button button-vote info__btn-vote ${!voteSelected ? 'button-disabled' : ''}`} onClick={voteHandler}>{!voteDone ? DEFAULT_BUTTON_TEXT : BUTTON_VOTE_DONE_TEXT}</button>
          </section>
        )
      }
    </>
  )
}