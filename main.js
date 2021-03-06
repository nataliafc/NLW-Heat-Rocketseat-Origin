const LinksSocialMedia = {
    github: 'nataliafc',
    instagram: 'nataliafc_'
  }

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        userBio.textContent = data.bio
      })
}

getGitHubProfileInfos()

// ele vai pegar(fetch) a url; se der certo, então then vai receber o resultado da url. Isso é uma promise.

    /* ARROW FUNCTION
    function nomeFuncao(argumento) {} === argumento => {}
    function nomeFuncao(argumento, argumento2) {} === (argumento, argumento2) => {}
    function nomeFuncao(){} === () => {}
    */