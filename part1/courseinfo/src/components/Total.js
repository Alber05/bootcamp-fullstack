export const Total = (props) => {
  const total = props.parts.reduce((ac, curr) => ac + curr.exercises, 0);

  return <p>Number of exercises {total}</p>;
};
