import React, { useState } from 'react';

import BucketGoalItem from '../BucketGoalItem/BucketGoalItem';
import './BucketGoalList.css';

export default function BucketGoalList(props) {
  return (
    <ul className='goal-list'>
      {props.items.map((goal) => (
        <BucketGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </BucketGoalItem>
      ))}
    </ul>
  );
}
