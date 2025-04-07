const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ contents }) => {
  return (
    <h1>
      {contents.name} {contents.exercises}
    </h1>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((element) => (
        <Part key={element.name} contents={element} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const amount = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <h1>Number of exercises {amount}</h1>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
