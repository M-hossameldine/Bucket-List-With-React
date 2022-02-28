import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    color: ${(props) => (props.invalid ? 'tomato' : 'black')};
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    background: ${(props) => (props.invalid ? '#fa9999' : 'transparent')};
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  & button {
    background-color: purple;
    padding: 1rem 2rem;
  }
`;

export default function BucketInput(props) {
  const [enteredBucketGoal, setEnteredBucketGoal] = useState('');
  const [isValid, setIsvalid] = useState(true);

  const goalInputChangeHandler = (e) => {
    setEnteredBucketGoal(e.target.value);
    setIsvalid(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('BucketInput.js', enteredBucketGoal);
    if (enteredBucketGoal.trim().length === 0) {
      setIsvalid(false);
      return;
    }
    props.onAddBucketGoal({ text: enteredBucketGoal, id: uuidv4() });
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl invalid={!isValid}>
        <label htmlFor=''> Bucket Goal </label>
        <input type='text' onChange={goalInputChangeHandler} />
      </FormControl>
      <div className='form-action'>
        <Button type='submit'>Add Bucket Goal</Button>
      </div>
    </form>
  );
}
