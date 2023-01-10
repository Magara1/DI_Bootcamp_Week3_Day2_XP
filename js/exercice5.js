

let h1 = document.body.firstElementChild;
h1.addEventListener("click", (ev) => {
    let cptColorChange = Math.floor(Math.random() * 9) + '' + Math.floor(Math.random() * 9) + '' + Math.floor(Math.random() * 9) + '' + Math.floor(Math.random() * 9) + '' + Math.floor(Math.random() * 9) + '' + Math.floor(Math.random() * 9);
    ev.target.style.color = "#" + cptColorChange;
    //console.log(cptColorChange);
});
h1.addEventListener("mouseover", (ev) => {
    ev.target.style.opacity = 1;
});
h1.addEventListener("mouseout", (ev) => {
    ev.target.style.opacity = 0.3;
    ev.target.style.fontSize = "5em";
});
let nbPixel = 15;
h1.addEventListener("dblclick", (ev) => {
    ev.target.style.fontSize = nbPixel + "px";
    nbPixel += 5;
});