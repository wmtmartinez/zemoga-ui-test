import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { signUp } from '../../utils/controllers';

import './signup.scss';

export const SignUpComponent = ({ history }) => {
  const { register, handleSubmit, errors } = useForm();
  const [userError, setUserError] = useState(null);

  const onSubmit = data => {
    const {username, password, age, marriage_status} = data;

    signUp({username, password, age, marriage_status}, ({ error })=> {
      if(error){
        setUserError(error.message)
      } else {
        setUserError(null);
        history.push('/login');
      }
      
    })
  }

  return(
    <div className="SignUpComponent">
  
      <form onSubmit={handleSubmit(onSubmit)}>
          { userError && <p className="user-error-form">User is already registered</p> }

          <h2>Sign Up</h2>

          <section className="user-input-container">
            <input type="text" name="username" className={`input-box ${errors.username ? 'input-error' : ''}`} placeholder="Username" ref={register( { required: "Required" } )  }></input>
            {errors.username && <span className="error-indicator">*</span>}
          </section>
          <section className="user-input-container">
            <input type="password" name="password" className={`input-box ${errors.password ? 'input-error' : ''}`} placeholder="Password" ref={register( { required: "Required" } )}></input>
            
            {errors.password && <span className="error-indicator">*</span>}
          </section>

          <section className="user-input-container">
            <input type="number" name="age" className={`input-box ${errors.age ? 'input-error' : ''}`} placeholder="Age" ref={register( { required: "Required" } )}></input>
            
            {errors.age && <span className="error-indicator">*</span>}
          </section>

          <section className="user-input-container">
            
            <select name="marriage_status" className={`input-box ${errors.marriage_status ? 'input-error' : ''}`} placeholder="Marriage Status" ref={register( { required: "Required" } )}>
              <option value="single">Single</option>
              <option value="marriage">Marriage</option>
            </select>
            
            {errors.marriage_status && <span className="error-indicator">*</span>}
          </section>


          <button type="submit" className="button button-vote">Sign Up</button>
          <button type="button" className="button button-clear" onClick={()=>history.push('/login')}>Cancel Sign Up</button>
      </form> 
    </div>
  )
}