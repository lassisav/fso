const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>
        Web development curriculum
      </h1>
      <Courses courses={courses}/>
    </div>
  )
}

const Courses = (props) => {
  return (
    props.courses.map(temp =>
      <div key={temp.id}>
        <Course course={temp}/>
      </div>)
)
}

const Course = (props) => {
  return (
    <li>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts}/>
    </li>
  )
}

const Header = (props) => {
  return (
    <>
      <h3>{props.course}</h3>
    </>
  )
}

const Content = (props) => {
  return(props.parts.map(temp =>
    <li key={temp.id}>
      <Part part={temp} />
    </li>
    )
  )
}

const Part = (props) => {
  return(
    <>
      <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}

const Total = (props) => {
  let result = props.parts.map(temp => temp.exercises)
  return(
    <p><b>total of {result.reduce((a, b) => a + b, 0)} exercises</b></p>
  )

}
export default App