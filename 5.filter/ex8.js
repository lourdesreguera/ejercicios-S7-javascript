const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const button$$ = document.querySelector('[data-function="toShowFilterStreamers"]');
const input$$ = document.querySelector('[data-function="toFilterStreamers"]');

const handleClick = event => {
    const filteredStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(input$$.value.toLowerCase()));
    console.log(filteredStreamers)
}

button$$.addEventListener('click', handleClick);
