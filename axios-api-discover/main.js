const url = 'http://localhost:5500/api'

function getUsersApi() {
    axios.get(url)
    .then(response => {
        apiResult.innerHTML = `<h1> Usuários na API</h1> <p>${JSON.stringify(response.data)}<p>`
        console.log(response.data.users);
    })
    .catch(err => console.error(err))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

const newUser = {
    name: 'Olivia Zars',
    avatar: 'https://picsum.photos/200/200',
    city: 'Rio de Janeiro'
}

// avatar: 'https://picsum.photos/200/200',
// https://avatars.githubusercontent.com/u/99571287?v=4

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(resolve => {
        data = resolve.data;
        userName.textContent = data.name;
        avatarUser.setAttribute('src', data.avatar);
        userCity.textContent = data.city;
        userId.textContent = data.id;
    })
    .catch(err => console.error(err))
}


// Atualização de usuário.
function updateUser(id, userUpdated) {

    axios.put(url + '/' + id, userUpdeted)
    .then(resolve => console.log(resolve))
    .catch(err => console.error(err))
}

const userUpdated = {
    name: 'Branded Ryan',
    avatar: 'https://picsum.photos/200/200',
    city: 'New York'
}

getUsersApi()
// addNewUser(newUser)
getUser(3)
// updateUser(3, userUpdated)