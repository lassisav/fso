import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newPersonList, setNewPersonList] = useState(personList(persons, ''))

  const addContact = (event) => {
    event.preventDefault()
    if(persons.some(person  =>  person.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      setNewPersonList(personList(persons, ''))
      setNewFilter('')
      console.log('button clicked', event.target)}
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
    setNewPersonList(personList(persons, event.target.value))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with<input
          value={newFilter}
          onChange={handleFilterChange}
        />
      </div>
      <h2>Add new</h2>
      <form onSubmit={addContact}>
        name: <input
          value={newName}
          onChange={handleNameChange}
        />
        number: <input
          value={newNumber}
          onChange={handleNumberChange}
        />
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {newPersonList}
      </ul>
    </div>
  )

  function personList (personList, search){
    const casedSearch = search.toLowerCase();
    const listElements = [];

    let i = 0;
    while (i < personList.length) {
      const currentName = personList[i].name;
      const currentNumber = personList[i].number;
      const casedName = currentName.toLowerCase();

    if (casedName.includes(casedSearch)) {
      listElements.push(
        <span key={i}>
          {currentName} {currentNumber}
        </span>
      );
      listElements.push(<br key={`br-${i}`} />);
    }
    i = i + 1;
  }

  return <div>{listElements}</div>;
}
}

export default App