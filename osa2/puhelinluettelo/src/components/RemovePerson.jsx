import personService from '../services/persons'
export function removePerson(id, name){
    if(window.confirm(`Delete ${name}?`)){
        try{
            personService
                .remove(id)
        } catch(error) {
            console.error("Error: ", error)
        }
    }
}