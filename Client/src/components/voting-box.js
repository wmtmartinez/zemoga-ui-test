import React, { useState, useEffect, useRef } from 'react';

import { VOTE_TYPE } from "../utils/constants";

export const VotingBoxComponent = ({onVote, onVoteAgain})=>{
  const DEFAULT_BUTTON_TEXT = 'Vote now';
  const BUTTON_VOTE_DONE_TEXT = 'Vote again';

  const [ voteSelected, setVoteSelected ] = useState(null);
  const [ voteDone, setVoteDone ] = useState(false);
  const buttonVote = useRef();

  const selectVote = (vote) => {
    setVoteSelected(vote);
  }

  const voteHandler = () => {
    if(voteSelected) {
      if(onVote) {
        onVote(voteSelected);
      }
      setVoteDone(true);
    }
  }

  const voteAgain = () => {
    setVoteDone(false);
    if(onVoteAgain) {
      onVoteAgain(true);
    }
  }

  useEffect(()=>{
    if(!voteDone && buttonVote.current) {
      buttonVote.current.focus();
    }
  },[voteDone])

  return(
    <>

      {
        voteDone ? (
          <section className="info__votes-buttons">
            <button  className="button button-vote info__btn-vote" onClick={voteAgain}>{BUTTON_VOTE_DONE_TEXT}</button>
          </section>
        ) : (
          <section className="info__votes-buttons">
            <button className="button vote-box-thumb-up thumb-small-up" onClick={()=> selectVote(VOTE_TYPE.PROS)}></button>
            <button className="button vote-box-thumb-down thumb-small-down" onClick={()=> selectVote(VOTE_TYPE.CONS)}></button>
            <button ref={buttonVote} className={`button button-vote info__btn-vote ${!voteSelected ? 'button-disabled' : ''}`} onClick={voteHandler}>{ DEFAULT_BUTTON_TEXT }</button>
          </section>
        )
      }
    </>
  )
}