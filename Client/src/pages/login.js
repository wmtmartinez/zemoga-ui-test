import React from 'react';

export const LoginComponent = ({history})=>(
    <header>
        <h1>Log In Page</h1>
        <button onClick={()=> history.push('/') }> Back To Votes Page</button>
    </header>
)