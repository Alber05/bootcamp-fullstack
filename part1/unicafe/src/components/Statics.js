import { StatisticLine } from "./StatisticLine";

export const Statics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positiveComentaries = (good / total) * 100 || 0;

  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" result={good} />
        <StatisticLine text="Neutral" result={neutral} />
        <StatisticLine text="Bad" result={bad} />
        <StatisticLine text="All" result={total} />
        <StatisticLine text="Average" result={average} />
        <StatisticLine text="Positive" result={`${positiveComentaries} %`} />
      </tbody>
    </table>
  );
};
