/*
 import 'bootstrap/dist/css/bootstrap.css'
 import jokes from "./jokes";
 const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
 document.getElementById("jokes").innerHTML = allJokes.join("");
 
 
 var btnGet = document.getElementById("getJokeBtn-get");
 btnGet.onclick = function(){
 
 const jokeID = jokes.getJokeById(document.getElementById("jokeInput-get").value);
 document.getElementById("JokeField-get").innerHTML = jokeID;
 };
 
 document.getElementById("getJokeBtn-add").onclick = function(){
 
 jokes.addJoke(document.getElementById("jokeInput-add").value);
 const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
 document.getElementById("jokes").innerHTML = allJokes.join("");
 }
 */

function getQuote(url) {
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                document.getElementById("hourly").innerHTML =
                        data.joke;
            });
}
//We can access this link with ajax since it allows Origin source from everywhere. 


document.getElementById("hourlyBtn").onclick = function (e) {
    e.preventDefault();
    getQuote("https://studypoints.info/jokes/api/jokes/period/hour");


document.getElementById("hourlyBtn").onclick = setInterval(function () {
    getQuote("https://studypoints.info/jokes/api/jokes/period/hour");



}, 360000);
}

document.getElementById("north").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("compas").innerHTML = "North";
});

document.getElementById("south").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("compas").innerHTML = "South";
});

document.getElementById("east").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("compas").innerHTML = "East";
});

document.getElementById("west").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("compas").innerHTML = "West";
});



/*
 document.getElementById("fetchJoke").onsubmit = function (e) {
 e.preventDefault();
 var ID = document.getElementById("field").value;
 console.log(ID);
 getBy("/jpareststarter/api/jokes/" + Number(ID));
 }
 * 
 */






