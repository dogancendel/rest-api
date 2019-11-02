method.js



//////create new post 
function create(data) {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  return fetch("http://localhost:3000/tasks", options)
    .then((response) => response.json)
}
create({title: "check it out", author: "Mike"})



/////Get all data from database

function getAll() {
  return fetch("http://localhost:3000/tasks")
    .then((response) => response.json())
}



///////GET id-data from data base

function getOne(id) {
  return fetch("http://localhost:3000/tasks/" + id)
    .then((response) => response.json())
}


////delete data from database
function destroy(id) {
  let options = { method: 'DELETE' }
  return fetch("http://localhost:3000/tasks/" + id, options)
    .then((response) => response.json())
}

////update data
function update(id,data) {
  let options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  return fetch(`${baseUrl}/${id}`, options)
    .then((response) => response.json())
}