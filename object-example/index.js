console.log(users);

const pokemon = {
    name: 'Charmander',
    type: 'Fire',
    cute: true,
    getInfo: function() { // En funktion som ett värde som returnerar alla egenskapers värde
        return pokemon.name + ' ' + pokemon.type + ' ' + pokemon.cute;
    }
}

console.log(pokemon);

console.log(pokemon.name);

pokemon.stage = 1;

console.log(pokemon);

console.log(pokemon.hasOwnProperty('cute'));

console.log(pokemon.getInfo());

console.log(pokemon);

// Loopa ut alla egenskap i ett objekt

for(key in pokemon) {
    console.log(`Key: ${key}`);
    console.log(pokemon[key]);
}

// Loopa ut alla objekt i en array

let pokemons = [{ name: 'Charmander ', type: 'Fire' }, { name: 'Bulbasaur ', type: 'Grass' }, 
{ name: 'Squirtle ', type: 'Water' }, { name: 'Pikachu ', type: 'Fire' }];

console.log(pokemons);

for (let pokemon of pokemons) {
    console.log(pokemon);
}