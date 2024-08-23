import { useState, useEffect } from 'react'
import { personList } from './components/PersonList'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm';
import { removePerson } from './components/RemovePerson';

const App = () => {
  const [persons, setPersons] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newPersonList, setNewPersonList] = useState(personList(persons, ''))

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
        setNewPersonList(personList(response, ''))
      })
  }, [])

  const addContact = (event) => {
    event.preventDefault()
    if(persons.some(person  =>  person.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personService      
        .create(personObject)      
        .then(response => {      
          const tempPerson = persons.concat(response)
          setPersons(tempPerson)        
          setNewName('')
          setNewNumber('')
          setNewPersonList(personList(tempPerson, ''))
          setNewFilter('')
        })
    }
    console.log('button clicked', event.target)
  }

  const handlePersonRemoval = (id, name) => {
    removePerson(id, name)
    personService
      .getAll()
      .then(response => {
        setPersons(response)
        setNewPersonList(personList(response, ''))
      })
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

  const displayPersonList = (personList) => {
    return(
      <ul>
        {personList.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
            <button onClick={() => handlePersonRemoval(person.id, person.name)}>Delete</button>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>Add new</h2>
      <PersonForm
        onSubmit={addContact}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ul>
        {displayPersonList(newPersonList)}
      </ul>
    </div>
  )
}

export default App