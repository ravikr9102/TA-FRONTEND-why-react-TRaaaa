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
    root.innerHTML = "";
    data.forEach((movie,i) => {
        let li = document.createElement('li');
        let button = document.createElement('button');
        button.classList.add('btn')
        button.id = i;
        button.innerText = movie.watched ? 'watched': 'to watch'
        button.addEventListener('click',handleChange);
        let label = document.createElement('label');
        label.classList.add('label');
        label.for = i;
        label.innerText = movie.name
        li.append(label,button)

        rootElm.append(li)
    })
}

createMovieUI(allMovies,rootElm);