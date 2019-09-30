import 'bootstrap/dist/css/bootstrap.css'

document.getElementById("svg2").onclick = function(e){
    console.log(e.target.id);
    e.preventDefault()
    if(!Array.isArray){
        data = [data];
    }
    fetch("http://localhost:8080/backend/proxy/countries/" + e.target.id)
            .then(res => res.json())
            .then(data => {
                document.getElementById("output").innerHTML = 
                "<ul><li>" + "name: "+data[0].name + "</li>\n\
                 <li>" + "population: " +data[0].population + "</li>\n\
                <li>" + "area: "+ data[0].area+" </li>\n\
                <li> borders: " + data[0].borders+"</li><ul>";
    })
}



