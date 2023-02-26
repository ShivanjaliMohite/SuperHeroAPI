const token = '919087279337514'
const newButton = document.getElementById('newHeroButton')
const imgdiv = document.getElementById('newimage')
const base_url = `https://www.superheroapi.com/api.php/${token}`
const sbutton = document.getElementById('searchbutton')
const searchinput = document.getElementById('searchinput')
const getSuperHero = (id, name) => {
  fetch(`${base_url}/${id}`).then(response => response.json()).then(json => {
    console.log(json)
    getStats(json)
  })
}
/*\const statToEmoji = {
  intelligence: '',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}*/
const getStats = (character) => {
  // console.log(character)
  const name = `<h2>${character.name}</h2>`
  const img = `<img src="${character.image.url}" height=200 width=200/>`
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p> ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join(' ')
  imgdiv.innerHTML = `${name}${img}${stats}`
}
//10223569763528853
const randomHero = () => {
  const val = 731
  return Math.floor(Math.random() * val) + 1
}
const getsearch = (name) => {
  fetch(`${base_url}/search/${name}`).then(response => response.json()).then(json => {
    console.log(json)
    const hero = json.results['0']
    // console.log(hero)
    //  const name=`<h2>${json.results[0].name}</h2>`  
    console.log(hero)
    getStats(hero)
  })
}
newButton.onclick = () => getSuperHero(randomHero())
//add content within exisiting body content
sbutton.onclick = () => getsearch(searchinput.value)



