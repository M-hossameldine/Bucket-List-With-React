import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import BucketInput from './components/BucketGoals/BucketInput/BucketInput';
import BucketGoalList from './components/BucketGoals/BucketGoalList/BucketGoalList';
import './App.css';

const INITIAL_BUCKET_GOALS = [
  { text: 'Do all exercises!', id: uuidv4() },
  { text: 'Finish the course!', id: uuidv4() },
];

function App() {
  const [bucketGoals, setBucketGoals] = useState(INITIAL_BUCKET_GOALS);

  const addBucketGoalHandler = (newBucketGoal) => {
    console.log('from App.js', newBucketGoal);
    setBucketGoals((prevBucketList) => {
      const updateBucketGoals = [...prevBucketList];
      updateBucketGoals.unshift(newBucketGoal);
      return updateBucketGoals;
    });
  };

  const deleteItemWithIdHandler = (goalId) => {
    setBucketGoals((prevBucketList) =>
      prevBucketList.filter((goal) => goal.id != goalId)
    );
  };

  let bucketListContent = (
    <p style={{ textAlign: 'center' }}>
      Your Bucket List is empty. <br /> lets add your goals!
    </p>
  );
  if (bucketGoals.length > 0) {
    bucketListContent = (
      <BucketGoalList
        items={bucketGoals}
        onDeleteItem={deleteItemWithIdHandler}
      />
    );
  }

  return (
    <div>
      <section id='goal-form'>
        <BucketInput onAddBucketGoal={addBucketGoalHandler} />
      </section>
      <section id='goals'> {bucketListContent} </section>
    </div>
  );
}

export default App;
