/*****   Exercises XP : 
 * 
 * @author : Magara Etychien N'gouan
 * 
 * Description :  Exercise 2 : Work With Forms
 *      
 * 
 * Date : 04 Janvier 2023
 * 
 * ***/

//1.Retrieve the form and console.log it.

let formsearch = document.getElementsByTagName("form")[0];

console.log(formsearch);

//2.Retrieve the inputs by their id and console.log them.

let input1 = document.getElementById("fname");

console.log(input1);

let input2 = document.getElementById("lname");

console.log(input2);

//3.Retrieve the inputs by their name attribute and console.log them.

let input1name = document.getElementsByName("fname");
console.log(input1name);

let input2name = document.getElementsByName("lname");
console.log(input2name);

//4.When the user submits the form (ie. submit event listener)

    //.use event.preventDefault(), why ?
//la methode event.preventDefault() indique a l'agent utilisateur que si l'evenement n'est pas explicitement gere,
// l'action par defaut ne devrait pa etre executee comme elle est normalement.

//get the values of the input tags

let ul = document.getElementsByClassName("usersAnswer")[0];

formsearch.addEventListener("submit", (e)=>{

e.preventDefault();

let valeur1 =input1.value;

console.log(valeur1);

let valeur2 =input2.value;

console.log(valeur2);

 if((valeur1 =="") || (valeur2) =="" ) {
    alert("les donnees ne doivent pas etre vides !!!")
 } else{
   
    let li1 = document.createElement('li');

    let li2 = document.createElement('li');

    li1.innerHTML = valeur1;

    li2.innerHTML = valeur2;

    ul.appendChild(li1);

    ul.appendChild(li2);

 }

});












