import { useState, useEffect } from 'react'
import { personList } from './components/PersonList'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm';
import Notification from './components/Notification'
import ErrorNotification from './components/ErrorNotification';
import './index.css'
import { removePerson } from './components/RemovePerson';

const App = () => {
  const [persons, setPersons] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newPersonList, setNewPersonList] = useState(personList(persons, ''))
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
        setNewPersonList(personList(response, ''))
      })
  }, [])

  const addContact = async (event) => {
    event.preventDefault()
    if(persons.some(person  =>  person.name === newName)){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        oldContactNewNumber()
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      await personService      
        .create(personObject)
      displayRefresh()

      setNotificationMessage(
        `${personObject.name} added successfully`        
      )        
      setTimeout(() => {          
        setNotificationMessage(null)        
      }, 10000)
    }

    console.log('button clicked', event.target)
  }

  const oldContactNewNumber = async () => {
    const personToChange = persons.find(person => person.name === newName)
    const idToChange = personToChange.id
    const newPerson = {
      name: newName,
      number: newNumber
    }
    var failure = false
    await personService
      .update(idToChange, newPerson)
      .catch((error) => {
        failure = true
        setErrorMessage(
          `${newPerson.name} has already been removed from the phonebook`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 10000)
        ;
        console.log(errorMessage)
      });
    displayRefresh();

    if(!failure){
      setNotificationMessage(
        `${newPerson.name} updated successfully`        
      )   
    }
         
    setTimeout(() => {          
      setNotificationMessage(null)        
    }, 10000)

  }

  const displayRefresh = () => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)        
        setNewName('')
        setNewNumber('')
        setNewPersonList(personList(response, ''))
        setNewFilter('')
      })
  }

  const handlePersonRemoval = async (id, name) => {
    if(window.confirm(`Delete ${name}?`)){
      try{
          await personService
              .remove(id)
      } catch(error) {
          console.error("Error: ", error)
      }
    }
    displayRefresh()
    
    setNotificationMessage(
      `${name} removed successfully`        
    )        
    setTimeout(() => {          
      setNotificationMessage(null)        
    }, 10000)

  
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
      <Notification message={notificationMessage} />
      <ErrorNotification message={errorMessage} />
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