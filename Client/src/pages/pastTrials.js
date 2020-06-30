import React from 'react';

export const PastTrials = ({history})=>(
    <header>
        <h1>Past Trials Page</h1>

        <button onClick={()=> history.push('/') }> Back To Votes Page</button>
    </header>
)

