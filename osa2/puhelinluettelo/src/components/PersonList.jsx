export function personList (personList, search){
    const casedSearch = search.toLowerCase();
    const listElements = [];

    let i = 0;

    if(!Array.isArray(personList)){
      console.log('Eipä ollu')
      return []
    }
    console.log(personList)
    return personList.filter(person =>
      person.name.toLowerCase().includes(casedSearch)
    )
}