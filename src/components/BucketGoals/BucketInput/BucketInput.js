import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../UI/Button/Button';
import './BucketInput.css';

export default function BucketInput(props) {
  const [enteredBucketGoal, setEnteredBucketGoal] = useState('');

  const goalInputChangeHandler = (e) => {
    setEnteredBucketGoal(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('BucketInput.js', enteredBucketGoal);
    props.onSaveBucketGoal({ text: enteredBucketGoal, id: uuidv4() });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor=''> Bucket Goal </label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div>
      <div className='form-actoin'>
        <Button type='submit' text='Add Bucket Goal' onClick={() => {}} />
      </div>
    </form>
  );
}
