//map and filter functions
const response = require('./response.json'); 
const List = response.map(item => {
    return {
        name: item.name,
        year: item.vehicle.year
    };
});

console.log("List of objects with only name and year properties:");       //map
console.log(List);

const filteredList = response.filter(item => item.vehicle.year > 2020);     //filter

console.log("\nList of objects with year higher than 2020:");
console.log(filteredList);
