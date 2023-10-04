const App = () => {
  const course = 'Half Stack application development'
  const p1 = 'Fundamentals of React'
  const e1 = 10
  const p2 = 'Using props to pass data'
  const e2 = 7
  const p3 = 'State of a component'
  const e3 = 14
  return (
    <div>
      <Header course={course} />
      <Content p1={p1} e1={e1} p2={p2} e2={e2} p3={p3} e3={e3}/>
      <Total e1={e1} e2={e2} e3={e3}/>
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
