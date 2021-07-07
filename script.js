let startB=document.getElementById("start");
let stopB=document.getElementById("stop");
let resetB=document.getElementById("reset");


startB.addEventListener("click", startIt);
stopB.addEventListener("click", ()=>{
    start=0;
    start2=0;
});
resetB.addEventListener("click", ()=>{
    for (var i=1; i<w; i++)
      for (var j=1; j<h; j++) 
        hm[i][j]=0;
});

function startIt()
{
    start=1;
    start2=1;
}