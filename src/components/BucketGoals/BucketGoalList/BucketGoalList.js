import React, { useState } from 'react';

import BucketInput from '../BucketInput/BucketInput';
import BucketGoalItem from '../BucketGoalItem/BucketGoalItem';
import './BucketGoalList.css';

export default function BucketGoalList(props) {
  const onClickHandler = (goalId) => {
    props.onBucketGoalDelete(goalId);
  };
  return (
    <ul className='goal-list'>
      {props.items.map((item) => (
        <BucketGoalItem
          key={item.id}
          bucketGoal={item}
          onDelete={onClickHandler}
        />
      ))}
    </ul>
  );
}
