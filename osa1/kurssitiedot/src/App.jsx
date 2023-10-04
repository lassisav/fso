const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content p1={part1.name} e1={part1.exercises}
               p2={part2.name} e2={part2.exercises}
               p3={part3.name} e3={part3.exercises}/>
      <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part pp={props.p1} ee={props.e1}/>
      <Part pp={props.p2} ee={props.e2}/>
      <Part pp={props.p3} ee={props.e3}/>
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
    </>
  )
}
const Part = (props) => {
  return(
    <>
      <p>{props.pp} {props.ee}</p>
    </>
  )
}
export default App
