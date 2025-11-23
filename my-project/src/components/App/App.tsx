import { useState } from 'react';

import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
interface FeedbackType {
  good: number;
  neutral: number;
  bad: number;
}

function App() {
  const [feedback, setFeedback] = useState<FeedbackType>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };
  const onReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.bad + feedback.good + feedback.neutral;
  const canReset = totalFeedback > 0;
console.log('feedback', feedback)
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVote={handleVote}
          onReset={onReset}
          canReset={canReset}
        />
      </div>
    </>
  );
}

export default App;
