import { useState } from 'react';

import GoalList from './components/Goals/GoalList/GoalList';
import GoalInput from './components/Goals/GoalInput/GoalInput';
import './App.css';

const App = () => {
  const [goals, setGoals] = useState([
  { text: 'Pet every dog I see!', id: 'g1' },
  { text: 'Invent a new dance move.', id: 'g2' },
  { text: 'Eat pizza without dropping cheese.', id: 'g3' },
  { text: 'Master the art of the perfect selfie.', id: 'g4' },
  { text: 'Speak fluent emoji.', id: 'g5' },
  { text: 'Win an argument with my cat.', id: 'g6' },
  { text: 'Find the end of a rainbow.', id: 'g7' },
  { text: 'Become a professional napper.', id: 'g8' },
  { text: 'Balance a spoon on my nose for 1 minute.', id: 'g9' },
  { text: 'Make my plants proud.', id: 'g10' }
  ]);

  const addGoalHandler = enteredText => {
    setGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
  <p
    style={{
      textAlign: 'center',
      color: 'rgb(165, 47, 47)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
    }}
  >
    No goals found. Maybe add one?
  </p>
);

  if (goals.length > 0) {
    content = (
      <GoalList items={goals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <GoalInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};

export default App;
