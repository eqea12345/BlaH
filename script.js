function playMovie() {
    var movies = ["The Avengers", "Inception", "The Shawshank Redemption", "Pulp Fiction", "The Dark Knight"];
    var randomMovie = movies[Math.floor(Math.random() * movies.length)];
    document.getElementById("movieDisplay").innerHTML = "Playing: " + randomMovie;
}
