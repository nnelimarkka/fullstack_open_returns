const Hello = (props) => (
  <div>
    <p>Hello {props.name}, you are {props.age} years old</p>
  </div>
)

const App = () => {
  const friends = [ 'Leevi', 'Venla']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App;
