const axios = require('axios');

axios.get('https://api.github.com/users/lfoalves')
.then(res => {
    const user = res.data;

    axios.get(user.repos_url)
    .then( repos => console.log(repos.data))
    .catch( err => console.log(err))
} )
.catch(error => console.log(error))