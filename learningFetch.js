fetch("forAsync.json")
  .then(value => value.json())
  .then(user => console.log(user.name))
  .catch(error => console.log(error))