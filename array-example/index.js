let pokemons = ['Charmander', 'Bulbasaur'];

console.log(pokemons);

//Lägg till nytt element, hamnar sist i array:en
//pokemons.push('Squirtle');

//console.log(pokemons);

//Lägger till flera element samtidigt

pokemons.push('Squirtle', 'Pikachu');

console.log(pokemons);

let pokemon = pokemons[1];

console.log(`Pokemon på position 1: ${pokemon}`);

let position = pokemons.indexOf('Squirtle');

console.log(`Squirtle finns på position: ${position}`);

let squirtle = pokemons[position];

console.log(`Squirtle på position 1: ${squirtle}`);

console.log(`Hittar inget på den positionen: ${pokemons[10]}`);

// -1 betyder att den inte hittar någon träff
console.log(`Hittar inget med det värdet: ${pokemons.indexOf('Christoffer')}`);

//Ta bort det sista elementet

let removedPokemon = pokemons.pop();
console.log(pokemons);
console.log(`Tog bort pokemon: ${removedPokemon}`);

// Ta bort ett element på en specifik position
let positionToRemove = pokemons.indexOf('Bulbasaur');
pokemons.splice(positionToRemove, 1);
console.log(pokemons);



