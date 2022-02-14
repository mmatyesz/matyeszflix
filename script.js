
let movies = [];

movies = [
	{
        id:"1",
		name: "Your Name",
        image: "images/yourname.jpg",
        desc:"Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        director:"Makoto Shinkai",
        genre:"Animation, Drama, Fantasy",
        trailer:"https://www.youtube.com/embed/xU47nhruN-Q",
	}, {
        id:"2",
		name: "5 centimeters per second",
        image:"images/5centimeterspersecond.jpg",
        desc:"Told in three interconnected segments, we follow a young man named Takaki through his life as cruel winters, cold technology, and finally, adult obligations and responsibility converge to test the delicate petals of love.",
        director: "Makoto Shinkai",
        genre:"Animation, Drama, Family",
        trailer: "https://www.youtube.com/embed/wdM7athAem0",
	}, {
        id:"3",
		name: "Silent Voice",
        image:"images/silentvoice.jpg",
        desc: "A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption.",
        director: "Naoko Yamada",
        genre: "Animation, Drama",
        trailer:"https://www.youtube.com/embed/nfK6UgLra7g"
	}
];


const movieFunction = (movies) => {
	const htmlString = movies.map((movie) => {
		return `
		<div class=movie-container>
			<div class="kep"><img src=${movie.image}></div>
            <div class="leiras">
                <h2>${movie.name}</h2>
                <p>${movie.desc}</p>

                <span><b>Director:</b> ${movie.director}</span><br>
                <span><b>Genre:</b> ${movie.genre}</span>
            </div>
            <button onclick="showTrailer(${movie.id})">TRAILER</button>
	    </div>

        <div class="darkBG" id=${movie.id}>
            <div class="trailerContainer">
                <iframe width="700" height="460" src="${movie.trailer}" id="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="diszSav">
                    <span class="trailerName">Trailer of "${movie.name}"</span>
                    <span class="xButton" onclick="closeBG(${movie.id})">X</span>
                </div>
            </div>
        </div>
		`;}).join('');
	document.getElementById('cards').innerHTML = htmlString;
}
movieFunction(movies);

function showTrailer(x){
    document.getElementById(x).style.display="flex";
}

function closeBG(x){
    document.getElementById(x).style.display="none"
}

