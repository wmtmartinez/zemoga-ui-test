import React from 'react';

export const HowItWorksComponent = ({history})=>(
    <header>
        <h1>How It Works Page</h1>
        <button onClick={()=> history.push('/') }> Back To Votes Page</button>
    </header>
)