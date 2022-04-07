const data = [{
    name: "manzana",
    color: "red",
    fruit: true,
},
{
    name: "banana",
    color: "yellow",
    fruit: true,
},
{
    name: "tomate",
    color: "red",
    fruit: true,
},
{
    name: "berenjena",
    color: "purple",
    fruit: false,
},
{
    name: "papa",
    color: "brown",
    fruit: false,
}]

const showFruits = () => {
    let fruitList = data.filter((obj) => {return obj.fruit === true});
    alert("Las frutas son: " + fruitList[0].name + ", " + fruitList[1].name + " y " + fruitList[2].name + ".");
};

const showVegetables = () => {
    let vegetableList = data.filter((obj) => {return obj.fruit === false});
    alert("Los vegetales son: " + vegetableList[0].name + " y " + vegetableList[1].name + ".");
}