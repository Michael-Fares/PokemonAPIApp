




// get array of pokemon objects
const getPokemon = (fetch) => {
  // set random index to call a random pokemon
  return fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(res => res.json())
    .then((data) =>  {
     data.results[0]
  })
}




// unit tests
const assert = require('assert');

if (typeof describe === 'function') {

  describe('#getPokemon()', () => {
    it('should fetch from the correct url', () => {
      const fakeFetch = (url) => {
        assert(url === `https://pokeapi.co/api/v2/pokemon/`)
      
     return new Promise(function(resolve) {

     })
    }
    getPokemon(fakeFetch)
  });



    it('should return the correct URL for the first pokemon', () => {
      const fakeFetch = () => {
      
     return Promise.resolve({
       json: () => Promise.resolve({
          results: [

            {
              "url": "https://pokeapi.co/api/v2/pokemon/1/"
              },

          ]
       })
    })
  }
  getPokemon(fakeFetch)
  .then(res => {
    assert(res.url === 'https://pokeapi.co/api/v2/pokemon/1/')
    done()
  })
})


it('should return the name for the first pokemon correctly', () => {
  const fakeFetch = () => {
  
 return Promise.resolve({
   json: () => Promise.resolve({
      results: [

        {
          "name": "bulbasaur",
          },

      ]
   })
})
}
getPokemon(fakeFetch)
.then(res => {
assert(res.name === 'bulbasaur')
done()
})
})

it('should get an array of length 20, for 20 pokemon', () => {
  const fakeFetch = () => {
  
 return Promise.resolve({
   json: () => Promise.resolve({
      res: []
   })
})
}
getPokemon(fakeFetch)
.then(res => {
assert(res.length === 20)
done()
})
})



  });
}