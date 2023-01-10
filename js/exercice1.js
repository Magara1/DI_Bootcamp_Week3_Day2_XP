/*****   Exercises XP : 
 * 
 * @author : Magara Etychien N'gouan
 * 
 * Description :  Exercise 1 : Change The Article
 *      
 * 
 * Date : 04 Janvier 2023
 * 
 * ***/


//1.Using a DOM property, retrieve the h1 and console.log it.

let h1 = document.getElementsByTagName("h1")[0];

console.log(h1);

//2.Using DOM methods, remove the last paragraph in the <article> tag.

let articlePara = document.querySelector("p:last-child"); 

console.log(articlePara);

//articlePara.remove();

//3.Add a event listener which will change the background color of the h2 to red, when it’s clicked on

let h2Event = document.getElementsByTagName("h2")[0];

//console.log(h2Event);

//h2Event.addEventListener("click", changebgColor);

function changebgColor(){
    h2Event.style.backgroundColor="red";
}

//4.Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

let h3Event = document.getElementsByTagName("h3")[0];

//h3Event.addEventListener("click", hideh3);

function hideh3(){
    h3Event.style.display ="none";
}


//5.Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

let pEvent = document.getElementsByTagName("p");

console.log(pEvent);

function changePtoBold(){
    for (i=0; i<pEvent.length;i++){
        pEvent[i].style.fontWeight ="bold";
    }
}

//6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

//h1.addEventListener

//7.BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)










