
import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <p><b>give feedback</b></p>
      <Button
        handleClick={increaseGood}
        text='Good'
      />
      <Button
        handleClick={increaseNeutral}
        text='Neutral'
      />
      <Button
        handleClick={increaseBad}
        text='Bad'
      />
      <p><b>statistics</b></p>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Statistics = (props) => {
  if(props.good+props.neutral+props.bad === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <StatisticsLine pretext="good" value={props.good}/>
      <StatisticsLine pretext="neutral" value={props.neutral}/>
      <StatisticsLine pretext="bad" value={props.bad}/>
      <StatisticsLine pretext="average" value={(props.good-props.bad)/(props.good+props.neutral+props.bad)}/>
      <StatisticsLine pretext="positive" value={(100*props.good)/(props.good+props.neutral+props.bad)} posttext=" %"/>
    </div>
  )
}

const StatisticsLine = (props) => {
  return(
    <div>
      <p>{props.pretext} {props.value} {props.posttext}</p>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

export default App