const url = 'http://localhost:5500/api'

function getUsersApi() {
    axios.get(url)
    .then(response => {
        apiResult.innerHTML = `<h1> Usuários na API</h1> <p>${JSON.stringify(response.data)}<p>`
        console.log(response.data.users);
    })
    .catch(err => console.error(err))
}

// Function com Foreach
function getUsersForeach() {
    axios.get(url)
    .then(result => {
        const users = result.data.users;

        let count = 0;

        let page = '';

        users.forEach(usuario => {
            count += 1;
            console.log('COUNT', count)

            console.log(usuario)
            page = page + `
                <div class="${count} card">
                    <img src="${usuario.avatar}" alt="" class='userAvatar'/>
                    <div class='bio'>
                        <p class='userName'>${usuario.name}</p>
                        <p class='userCity'>${usuario.city}</p>
                        <p class='userId'>${usuario.id}</p>
                    </div>
                </div>
            `
        });
        
        console.log(page)

        app.innerHTML = page;
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

// const newUser = {
//     name: 'Olivia Zars',
//     avatar: 'https://picsum.photos/200/200',
//     city: 'Rio de Janeiro'
// }

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

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(resolve => console.log(resolve))
    .catch(error => console.error(error))
}

// const newUser = {
//     name: 'Rocketa',
//     avatar: 'https://avatars.githubusercontent.com/u/99571287?v=4',
//     city: 'Rio Grande do Sul'
// }

// getUsersApi()
// addNewUser(newUser)
// getUser(3)
// updateUser(3, userUpdated)

getUsersForeach()

deleteUser()