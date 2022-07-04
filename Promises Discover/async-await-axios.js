const axios = require('axios');


async function fetchRepos() {
    
  try {
    const apiGitHub = await axios.get('https://api.github.com/users/lfoalves')
    const repos = await axios.get(apiGitHub.data.repos_url)
    console.log(repos.data)
  } catch (err) {
    console.log(err.message)
  }

}

fetchRepos();


