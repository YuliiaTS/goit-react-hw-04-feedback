import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { useState } from 'react';
import style from '../components/App.module.css';

const state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [{ good, neutral, bad }, setState] = useState(state);

  const handelIncrement = name=> {
    setState(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (!good) {
    return 0;
    }
    const total = good + neutral + bad;
    const feedback = (good * 100) / total;
    return Math.round(feedback);
  };

  return (
    <div className={style.main}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handelIncrement}
        />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}