const Header = ({ course }) => {
  return <h1>{course}</h1>;
};
const Part = ({ contents }) => {
  return <h1>{contents}</h1>;
};
const Content = ({ contents1, contents2, contents3 }) => {
  return (
    <div>
      <Part contents={contents1} />
      <Part contents={contents2} />
      <Part contents={contents3} />
    </div>
  );
};
const Total = ({ exercises }) => {
  return <h1>Number of exercises {exercises}</h1>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        contents1={part1 + " " + exercises1}
        contents2={part2 + " " + exercises2}
        contents3={part3 + " " + exercises3}
      />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
