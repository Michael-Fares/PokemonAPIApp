
// set random index to call a random pokemon
let randomIndex = (Math.floor(Math.random() * 19)+ 1)

// set up the arena in the DOM
const arena = document.querySelector('#arena')
// space for first fighter
const div1 = document.createElement('div')


// img to hold first sprite
const img1 = document.createElement('img')
div1.appendChild(img1)
const name1 = document.createElement('h4')
div1.appendChild(name1)
arena.appendChild(div1)
name1.classList.add('pokemon')

// stats button for first pokemon

const button1 = document.createElement('button')
button1.innerText = 'show stats'

div1.appendChild(button1)
const stats1 = document.createElement('div')
div1.appendChild(stats1)




// vs sign
const vsDiv = document.createElement('div')
vsDiv.innerText = 'VS'
vsDiv.classList.add('vs')
arena.appendChild(vsDiv)

// space for 2nd fighter
const div2 = document.createElement('div')
arena.appendChild(div2)

const img2 = document.createElement('img')
div2.appendChild(img2)
const name2 = document.createElement('h4')
div2.appendChild(name2)
arena.appendChild(div2)
name2.classList.add('pokemon')

const button2 = document.createElement('button')
button2.innerText = 'show stats'

div2.appendChild(button2)

const stats2 = document.createElement('div')
div2.appendChild(stats2)


// get first randome pokemon
const getPokemon1 = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}/`)
    .then(res => res.json())
    .then((data) =>  {
      let poke1 = data
    console.log('poke1', poke1.name);

  name1.innerText = poke1.name.toUpperCase();
  img1.src = poke1.sprites.front_default
   
  button1.addEventListener('click', function () {
  stats1.innerText = `
  Experience Level: ${poke1.base_experience} 
  Abilites: ${poke1.abilities[0].ability.name}, ${poke1.abilities[1].ability.name}
  `
  })

  })
}
// get second random pokemon
// set anoter random index to call a random pokemon
let randomIndex2 = (Math.floor(Math.random() * 19)+ 1)
const getPokemon2 = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex2}/`)
    .then(res => res.json())
    .then((data) =>  {
      let poke2 = data
    console.log('poke1', poke2.name);

  name2.innerText = poke2.name.toUpperCase();
  img2.src = poke2.sprites.front_default
  })
}

window.onload = function () {
  getPokemon1()
  getPokemon2()  
}


