export const Total = ({ course }) => {
  const total = course.parts.reduce((ac, curr) => ac + curr.exercises, 0);

  return <p>Number of exercises {total}</p>;
};
