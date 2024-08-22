export function personList (personList, search){
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
  return listElements
}