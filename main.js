const LinksSocialMedia = {
    github: 'jakeliny2',
    youtube: 'jakelinygracielly',
    facebook: 'maykbrito',
    instagram: 'jakeliny.gracielly',
    twitter: 'jakelinytec'
  }
  
  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')
  
      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
  }
  
  changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = "https://api.github.com/users/nataliafc"
}