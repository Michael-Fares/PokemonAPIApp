// FYI I moved my fetching funciton to a separate file called fetchtesting and included the tests for it below, because I could not get node to wotk with recognizing the DOM elements references in the code here.


// intialize 2 random pokemon
let poke1
let poke2

// set up the arena in the DOM
const arena = document.querySelector('#arena')


// get first randome pokemon
const getPokemon1 = () => {
  // set random index to call a random pokemon
let randomIndex = (Math.floor(Math.random() * 19)+ 1)
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}/`)
    .then(res => res.json())
    .then((data) =>  {
      poke1 = data
    console.log('poke1', poke1.name)
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



  name1.innerText = poke1.name.toUpperCase();
  img1.src = poke1.sprites.front_default
   
  button1.addEventListener('click', function () {
  stats1.innerText = `
  Experience Level: ${poke1.base_experience} 
  Height: ${poke1.height}
  Weight: ${poke1.weight}
  Moves: ${poke1.moves[0].move.name}, ${poke1.moves[1].move.name}, ${poke1.moves[2].move.name}
  `
  })

      // vs sign
      const vsDiv = document.createElement('h1')
      vsDiv.innerText = 'VS'
      vsDiv.classList.add('vs')
      arena.appendChild(vsDiv)


  })

}
// get second random pokemon
// set anoter random index to call a random pokemon

const getPokemon2 = () => {
  let randomIndex2 = (Math.floor(Math.random() * 19)+ 1)
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex2}/`)
    .then(res => res.json())
    .then((data) =>  {
      poke2 = data
    console.log('poke1', poke2.name);
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
  name2.innerText = poke2.name.toUpperCase();
  img2.src = poke2.sprites.front_default

 
  
  button2.addEventListener('click', function () {
    stats2.innerText = `
    Experience Level: ${poke2.base_experience} 
    Height: ${poke2.height}
    Weight: ${poke2.weight}
    Moves: ${poke2.moves[0].move.name}, ${poke2.moves[1].move.name}, ${poke2.moves[2].move.name}
    `
    })  

})
}

window.onload = function () {
  getPokemon1()
  getPokemon2()  
}

const reset = () => {
 arena.innerHTML = ''
  getPokemon1()
  getPokemon2()  
}


// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C

const assert = require('assert');

if (typeof describe === 'function') {

  describe('#getPokemon1()', () => {
    it('should translate a simple word', () => {
      assert.equal(getPokemon1(), 'arcay');
      assert.equal(getPokemon1(), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(getPokemon1(), 'eatecray');
      assert.equal(getPokemon1(), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(getPokemon1(), 'eggyay');
      assert.equal(getPokemon1(), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(getPokemon1(), 'ellohay');
      assert.equal(getPokemon1(), 'ocketray');
    });
  });
}