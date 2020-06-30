import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';

import './login.scss';
import { logIn } from '../../utils/controllers';
import { UserContext } from '../../data/UserContext';

export const LoginComponent = ({history})=> {
  const { register, handleSubmit, errors } = useForm();
  const [userNotFound, setUserNotFound] = useState(false);
  const { setUser } = useContext(UserContext);

  const onSubmit = data => {
    const {username, password} = data;

    logIn({username, password}, ({user, accessToken, error})=> {
      if(error){
        setUserNotFound(true);
      } else {
        setUserNotFound(false);
        setUser({
          username: user.username,
          token: accessToken
        });
        localStorage.setItem('user-data',  JSON.stringify({ accessToken, username: user.username}) );
        history.push('/');
      }
      
    })
  }

  const signup =()=>{
    history.push('/signup');
  }

  return(
    <div className="LoginComponent">
      
      <form onSubmit={handleSubmit(onSubmit)}>
        { userNotFound && <p className="user-error-form">User is not registered</p> }
        <h2>Log In</h2>
        <section className="user-input-container">
          <input type="text" name="username" className={`input-box ${errors.username ? 'input-error' : ''}`} placeholder="Username" ref={register( { required: "Required" } )  }></input>
          {errors.username && <span className="error-indicator">*</span>}
        </section>
        <section className="user-input-container">
          <input type="password" name="password" className={`input-box ${errors.password ? 'input-error' : ''}`} placeholder="Password" ref={register( { required: "Required" } )}></input>
          
          {errors.password && <span className="error-indicator">*</span>}
        </section>
        <button type="submit" className="button button-vote">Sign In</button>
        <button className="button button-clear" onClick={signup}>Don't have an account? Join us now!</button>
      </form> 
    </div>
  )
}