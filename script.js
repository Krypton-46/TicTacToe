let divs = document.querySelectorAll(".newdiv");
let i=1;
for(div of divs) {
    div.innerText = `This is a new div no ${i}`;
    i++;
}