const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const citiesNames = cities.map(function (city) {
    return city.isVisited ? `${city.name} (Visitado)` : city.name;
})

console.log(citiesNames)