import 'bootstrap/dist/css/bootstrap.css'
window.onload = function(){

//document.getElementById("getAllBtn").addEventListener("click", usrTblonload("http://localhost:3333/api/users"));
startFetch("https://asgerhs.dk/assignment1-1.0-SNAPSHOT/api/users/all");

document.getElementById("all").onclick = function(){
startFetch("https://asgerhs.dk/assignment1-1.0-SNAPSHOT/api/users/all");
document.getElementById("fieldAndButton").style = "display: none";
}

document.getElementById("single").onclick = function(){
    document.getElementById("fieldAndButton").style = "display: block";
    document.getElementById("userTable").innerHTML = "";
    document.getElementById("fieldBtn").innerText = "Get Person";
    document.getElementById("addingFieldAndButton").style = "display: none";
}

document.getElementById("add").onclick = function(){
    document.getElementById("addingFieldAndButton").style = "display: block";
    document.getElementById("userTable").innerHTML = "";
    document.getElementById("fieldBtn").innerText = "add Person";
    document.getElementById("fieldAndButton").style = "display: none";
 
}

//
}


document.getElementById("fieldBtn").onclick = function(){
    startFetch("https://asgerhs.dk/assignment1-1.0-SNAPSHOT/api/users/" + document.getElementById("idField").value);
    //startFetch("http://localhost:3333/api/users", makeOptions("POST", data));
}

document.getElementById("addBtn").onclick = function(){
    const data = {name: document.getElementById("name").value};
    startFetch("https://asgerhs.dk/assignment1-1.0-SNAPSHOT/api/users/", makeOptions("POST", data));   
}




//const data = {age: 34,name: document.getElementById("name").value, gender: "female",email: "liz@mail.com"};

function getUsers(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if(!Array.isArray(data)){
            data = [data];
        }
        document.getElementById("userTable").innerHTML =  
        "<thead>\
        <tr>\
          <th>Name</th>\
        </tr>\
        </thead>\
        <tbody>" +
         data.map(x =>
        "<tr><td>" + x.name + "</td></tr>"
        + "</tbody>").join('');
       
    });
}

function fetchWithErrorCheck(res){
    if(!res.ok){
      return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
   }
   
   function startFetch(url, option){
   fetch(url, option)
    .then(res => fetchWithErrorCheck(res))
    .then(data => {
        if(!Array.isArray(data)){
            data = [data];
        }
        document.getElementById("userTable").innerHTML =  
        "<thead>\
        <tr>\
          <th>Name</th>\
        </tr>\
        </thead>\
        <tbody>" +
         data.map(x =>
        "<tr><td>" + x.name + "</td></tr>"
        + "</tbody>").join('')})
        
        
    .catch(err => {
       if(err.status){
         err.fullError.then(e=> console.log(e.msg))
       }
       else{console.log("Network error"); }
    });
   
   }
function makeOptions(http_method, body) {
    var options =  {
      method: http_method,
      headers: {
        "Content-type": "application/json"
      }
    }
    if(body){
      options.body = JSON.stringify(body);
    }
    return options;
   }


          







