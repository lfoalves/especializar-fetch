const url = 'http://localhost:5500/api';

function getUsers() {
    fetch(url)
    .then(result => result.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(err => console.error(err))
}

function getUser(id) {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name;
        userCity.textContent = data.city;
        userAvatar.setAttribute('src', data.avatar)
    })
    .catch(err => console.log(err))
}

function addUser(newUser) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
        
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data )
    .catch(error => console.error(error))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
        .then(data => alertApi.textContent = data)
    .catch(err => console.error(err))
}

const newUser = {
    name: 'Jakeliny',
    avatar: 'https://avatars.githubusercontent.com/u/17316392?v=4',
    city: 'São Paulo/SP'
}
// addUser(newUser)

const updatedUser = {
    name: 'Luiz Fernando Alves',
    avatar: 'https://avatars.githubusercontent.com/u/99571287?v=4' ,
    city: 'Boa Vista/RR'
}
// updateUser(updatedUser, 11)

// deleteUser(10);
getUsers();
getUser(17);