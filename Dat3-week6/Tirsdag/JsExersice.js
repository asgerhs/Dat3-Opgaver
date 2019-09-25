var names = ["Andreas", "Asger", "Martin", "William", "Henning"];

//1.1
console.log(names.filter(x => x.toLowerCase().includes("a")));

//1.2
console.log(names.map(x => x.split('').reverse().join('')));

//2.a
var myFilter = function(array, callback){
    const filteredArray = [];
    array.forEach(element => {
        if(callback(element)){
            filteredArray.push(element);
        }
    })
    return filteredArray;
}

console.log(myFilter(names, x => x.toLowerCase().includes("a")));


//2.b
var myMap = function(array, callback){
    const filteredArray = [];
    array.forEach(element => {
        filteredArray.push(callback(element));
    });
    return filteredArray;
}

console.log(myMap(names, x => x.split('').reverse().join('')));


//3.a
Array.prototype.myFiltered = function(callback){
    const filteredArray = [];
    
    this.forEach(element => {
        if(callback(element)){
            filteredArray.push(element);
        }
    })
    return filteredArray;
}

console.log(names.myFiltered(x => x.toLowerCase().includes("a")));

//3.b
Array.prototype.MyMaps = function(callback){
    const filteredArray = [];
    this.forEach(element => {
        filteredArray.push(callback(element));
    });
    return filteredArray;
}

console.log(names.MyMaps(x => x.split('').reverse().join('')))

//4.a IKKE FÆRDIG
var numbers = [1, 3, 5, 10, 11];

var result = numbers.map(x => {
    var resultArray = [];
   for(let i = 0; i< numbers.length; i++){
       resultArray.push(numbers);
   }
  return resultArray;
   
});

//console.log(result);

//4.b
var ankor = "<nav>\n" + names.map(x => "<a href=\"\">" + x +"</a>").join('\n') + "\n</nav>";

console.log(ankor);

//4.c 
var namesWithPhone = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

var namesWPResult = "<table> \n <tr> \n <th>name</th> \n <th>phone</th> \n </tr> \n <tr>" 
+ namesWithPhone.map(x => "\n <td>" + x.name + "</td> \n <td>" + x.phone + "</td>")
.join('\n') + "\n</tr> \n</table>";

console.log(namesWPResult);

//4.d Kig på index.html filen.

//4.e Kig på index.html filen.

//5.a
var all= ["Lars", "Peter", "Jan", "Bo"];
console.log(all.join());
console.log(all.join(' '));
console.log(all.join('#'));

//5.b
var number = [2, 3, 67, 33];
console.log(number.reduce((x, y) => x + y));

//5.c IKKE LØST
var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}];

    //Har prøvet 9 forskellige løsninger, og har ikke kunne fået nogle af dem til at virke
    //Dette er den sidste jeg har prøvet. 
    console.log(members.reduce((x, y) => {
        var  sum = x.age + y.age;
        return sum.valueOf();
        
    }));

//5.d IKKE LØST
/*
var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];
const count = votes.reduce((tally, cand) => {
    tally[cand] = (tally[cand] || 0) + 1;
    return tally;
});
console.log(count);


const counting = votes.reduce(function(){
    var tally = [];
    for (let i = 0; i < arr.length; i++) {
        var a = votes[i];
        tally[a] = (tally[a] || 0) + 1;
    }
    return tally;
});
console.log(counting);
*/

//6

console.log(hoistedFunction);

//the function can be run even though it is below the log.
//it's return value will still be undefined since hoist hasn't been assigned
//a value, see below. 
var hoistedFunction = function(){
    return hoist;
}

//The var is defined under the console.log, but since it's assigned value isn't hoisted
//then when run, you will get undefined. Uncomment the line below to print hoist's value.
//hoist = 1;
console.log(hoist);
var hoist = 1;

/*Hoisting is js moving all variables declerations to the top of the document opon loading, the same 
goes for functions. But the assigned values for those variables aren't moved to the top, 
so their assigned values have to be declared before used in the document*/

/*The difference between var and let is that var is function scoped, while let is block scoped.
this means that a variable declared with let is only usable and callable in its block.
Block scoped means it's only visible in the brackets, a switch case or the like. 
where as a var that function scoped, meaning that a variable assigned with var is 
only visible within the function.*/






