const LinksSocialMedia = {
    github: 'nataliafc',
    instagram: 'nataliafc_'
  }
  
  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')
  
      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
  }
  
  changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`


    // ele vai pegar(fetch) a url; se der certo, então then vai receber o resultado da url. Isso é uma promise.
    fetch(url)
      .then(response => )

}

getGitHubProfileInfos()