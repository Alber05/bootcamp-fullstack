import { Part } from "./Part";

export const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part part={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
};
