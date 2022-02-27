import React from 'react';

import './BucketGoalItem.css';

export default function BucketGoalItem(props) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li className='goal-item' onClick={deleteHandler}>
      {props.children}
    </li>
  );
}
