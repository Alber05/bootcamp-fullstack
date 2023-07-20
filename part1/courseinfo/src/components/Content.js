import { Part } from "./Part";

export const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part part={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
};
