import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  let emptyVotes = Array(8).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(emptyVotes)

  const selectRandom = () => setSelected(Math.floor(Math.random() * 8))
  const updateVotes = () => setVotes(handleVote(selected, votes))
  const selectHighest = () => mostVotes(votes)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button
        handleClick={selectRandom}
        text='next anecdote'
      />
      <Button
        handleClick={updateVotes}
        text='vote'
      />
      <Most
        index={mostVotes(votes)}
        anecdotes={anecdotes}
        votes={votes}
      />
    </div>
  )
}

function handleVote(selected, votes) {
  const copyVotes = { ...votes }
  copyVotes[selected] += 1
  return(copyVotes)
}

const Most = (props) => {
  if(props.index != -1){
    return(
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{props.anecdotes[props.index]}</p>
        <p>has {props.votes[props.index]} votes</p>
      </div>
    )
  }
  return(<div></div>)
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

function mostVotes(votes){
  let maxIndex = 0;
  let maxValue = votes[0];
  
  for (let i = 0; i < 8; i++) {
    if (votes[i] > maxValue) {
      maxValue = votes[i];
      maxIndex = i;
    }
  }

  if(maxValue == 0) {
    return -1
  }
  
  return maxIndex
}

export default App