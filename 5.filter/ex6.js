const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

// const streamersLegends = streamers.filter(streamer => {
//     const toReturn = streamer.gameMorePlayed.includes('Legends');
//     if (streamer.age > 35) {
//         streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
//     }
//     return toReturn;
// });

const streamersLegends = streamers.filter(streamer => streamer.gameMorePlayed.includes('Legends'));

for (let i = 0; i < streamersLegends.length; i++) {
    const streamer = streamersLegends[i]
    if (streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
}


console.log(streamersLegends)