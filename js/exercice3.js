/*****   Exercises XP : 
 * 
 * @author : Magara Etychien N'gouan
 * 
 * Description :  Exercise 3 : Transform The Sentence
 *      
 * 
 * Date : 04 Janvier 2023
 * 
 * ***/

//1. Declare a global variable named allBoldItems

let allBoldItems;

//2.Create a function called getBold_items() that takes no parameter. 
//This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

 function getBold_items(){
     allBoldItems = document.getElementsByTagName("strong");
     console.log(allBoldItems);
 }

 getBold_items();

 //3.Create a function called highlight() that changes the color of all the bold text to blue.

 function highlight(){
    for(let ItemBold of allBoldItems ){
        ItemBold.style.color ="blue";
    }
 }

 //4.Create a function called return_normal() that changes the color of all the bold text back to black.

function return_normal(){
    for(let ItemBold of allBoldItems ){
        ItemBold.style.color ="black";
    }
}

//5.Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout

let p = document.getElementsByTagName("p")[0];
p.addEventListener("mouseover", highlight);
p.addEventListener("mouseout", return_normal);






