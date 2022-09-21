let input = document.querySelector('.form');
let rootElm = document.querySelector('.movie-list');

let allMovies = [
    {
        name: "RRR",
        watched: false,
    },
    {
        name: "kgf",
        watched: true,
    },
    {
        name: 'harry potter',
        watched: false,
    },
];

input.addEventListener('keyup', (event) => {
    if(event.keyCode === 13){
        allMovies.push({
            name: event.target.value,
            watched: false,
        });
        event.target.value ='';
        createMovieUI(allMovies,rootElm)
    }
});

function handleChange(event){
    let id = event.target.id;

    allMovies[id].watched = !allMovies[id].watched;
    createMovieUI(allMovies,rootElm)
}

function createMovieUI(data,root){
   let ui = data.map((movie,i) => {
        return React.createElement('li',{}, React.createElement('label',{ for: i },movie.name),React.createElement('button',{ id : i, className: 'btn', onClick: handleChange }, movie.watched ? 'watched': 'to watch'));
    })
    ReactDOM.render(ui,root)
}

createMovieUI(allMovies,rootElm);