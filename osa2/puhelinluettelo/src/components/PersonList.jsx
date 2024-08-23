export function personList (personList, search){
    const casedSearch = search.toLowerCase();
    const listElements = [];

    let i = 0;

    if(!Array.isArray(personList)){
      return []
    }
    return personList.filter(person =>
      person.name.toLowerCase().includes(casedSearch)
    )
}