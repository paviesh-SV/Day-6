class Movie {
    constructor(title, studio, rating ) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if(typeof(this.rating) === "undefined") {
            this.rating = "PG";
        }
    }

    movieDetail() {
        if(typeof(this.title) === "string") {
            console.log(`Movie name is ${this.title}`)
        }
        else {
            console.log(`title is invalid`);
        }

        if(typeof(this.studio) === "string") {
            console.log(`Movie is produced by ${this.studio}`);
        }
        else {
            console.log(`studio name is invalid`);
        }

        if(typeof(this.rating) === "string") {
            console.log(`Movies rating is ${this.rating}`);
        }
        else {
            console.log(`rating is invalid`);
        }
    }
}


const invalid = new Movie(14, 15, 16);
invalid.movieDetail();

const noRating = new Movie("Avengers", "Disney", );
noRating.movieDetail();

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
casinoRoyale.movieDetail();

function getPG(movies) {
    let filter = [];
    for(i=0; i<movies.length; i++)
    {
        if(movies[i].rating === "PG")
        {
            filter.push(movies[i]);
        }
    }
    return filter;
}
let arr = [
    new Movie("Mov1", "Studio1", "PG-13"),
    new Movie("Mov2", "Studio2", "PG"),
    new Movie("Mov3", "Studio3", "U-17"),
    new Movie("Mov4", "Studio4", "PG")
];

console.log("PG rated movies: ", getPG(arr));
 
