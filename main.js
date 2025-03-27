let secand=0
let minuts=0
let hour=0
function startCrono() {
    start=setInterval(()=>{
    secand +=1
    document.getElementById('secand').innerText=secand
    document.getElementById('min').innerText=minuts
    document.getElementById('hour').innerText=hour
    if(secand==60){
        secand=0
        minuts+=1
    }
    if(minuts==60){
        minuts=0
        hour+=1
    }
},10
)}


function pauseCrono(){
    return clearInterval(start)
}
function resetCrono(){
    pauseCrono();
    document.getElementById('secand').innerText='00'
    document.getElementById('min').innerText='00'
    document.getElementById('hour').innerText='00'
}
function screen(){
    let s=document.getElementById('secand').innerText
    let m=document.getElementById('min').innerText
    let h=document.getElementById('hour').innerText
    return `${h} : ${m} : ${s}`
}

function refrech(){
    location.reload()
}

let tabBtn = document.getElementById('btn');
tabBtn.addEventListener('click', function() {
    let newSpan = document.createElement("span");
    document.getElementById('cronoHistorique').appendChild(newSpan);
    newSpan.appendChild(document.createTextNode(`${screen()}`)); 
});

