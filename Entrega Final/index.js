let data;

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((res) => res.json())
.then((data) => data = data)
.then((data) => document.getElementById("info").innerHTML = data.id)
.catch((error) => console.error(error));