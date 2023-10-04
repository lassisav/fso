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
      <Header course={course} />
      <Content p1={parts[0].name} e1={parts[0].exercises}
               p2={parts[1].name} e2={parts[1].exercises}
               p3={parts[2].name} e3={parts[2].exercises}/>
      <Total e1={parts[0].exercises} e2={parts[1].exercises} e3={parts[2].exercises}/>
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
