/*****   Exercises XP : 
 * 
 * @author : Magara Etychien N'gouan
 * 
 * 
 * Description :  Exercice 4 : Volume D'une Sphère
 *      
 * 
 * Date : 04 Janvier 2023
 * 
 * ***/
//1-Write a JavaScript program to calculate the volume of a sphere:

let formulaire = document.forms[0];
let inputRadius = form.elements.radius;
let inputVolume = form.elements.volume;
inputVolume.setAttribute("readOnly", true);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let dataInputRadius = inputRadius.value.trim();
    if (dataInputRadius == '') {
        errorMessages("Veuillez renseigner le rayon svp!", inputRadius)
    } else if (isNaN(dataInputRadius)) {
        errorMessages("Veuillez renseigner un nombre svp", inputRadius)
    } else {
        let formule = (4 / 3) * Math.PI * Math.pow(parseFloat(dataInputRadius), 3);
        inputVolume.value = formule;
    }
});

function errorMessages(message, input) {
    alert(message);
    input.focus();
}
