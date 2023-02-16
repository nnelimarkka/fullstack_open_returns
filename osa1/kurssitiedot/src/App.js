const Header = (props) => (
  <h1>
    {props.course}
  </h1>
)

const Content = (props) => (
  <>
    <Part part={props.part1}></Part>
    <Part part={props.part2}></Part>
    <Part part={props.part3}></Part>
  </>
)
const Part = (props) => (
  <p>{props.part.name} {props.part.exercises}</p>
)

const Total = (props) => (
  <p>Number of exercises {props.numExercises}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]}/>
      <Total numExercises={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App