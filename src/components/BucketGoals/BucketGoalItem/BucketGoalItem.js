import React from 'react';

import './BucketGoalItem.css';

export default function BucketGoalItem(props) {
  const onClickHandler = () => {
    props.onDelete(props.bucketGoal.id);
  };
  return (
    <li onClick={onClickHandler} className='goal-item'>
      {props.bucketGoal.text}
    </li>
  );
}
