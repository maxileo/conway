let sketch = function(p) {
    let ww;
    let hh;
  
    p.setup = function() {
      var canvas2=p.createCanvas(window.innerWidth, window.innerHeight);
      canvas2.parent("fundal");
      ww=window.innerWidth;
      hh=window.innerHeight;
    };
  
    p.draw = function() {
        p.background(62, 89, 86);
        let catW=50;
        let catH=hh/(ww/catW);
        let size=ww/catW;
        for (let i=0; i<=catW; i++)
        for (let j=0; j<=catH; j++)
        {
            p.noStroke();
            p.fill(71, 105, 101);
            p.rect(i*size, j*size, size-2, size-2, size/10);
        }
    };

    p.windowResized = function() {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
        ww=window.innerWidth;
        hh=window.innerHeight;
      }
};
  
let myp5 = new p5(sketch);

let hm2= [];
let aux2=[];
let fundal2=[];
let i2, j2;
let time2=0;
let w2=32, h2=25; 
/*
  matrice(hm2);
  matrice(aux2);
  matrice(fundal2);
}

function draw() {
  background(255, 240, 240);
  /*
  stroke(202, 252, 245);
  strokeWeight(1);
  time++;
  if (time>=100000)
    time=1;
   
  for ( i=1; i<w; i++)
    for ( j=1; j<h; j++)
    if (mouseIsPressed && mouseButton==LEFT && mouseX>=i*30 && mouseX<=i*30+28 && mouseY>=j*30 && mouseY<=j*30+28)
      {
        hm[i][j]=1;
      }
      else
        if (mouseIsPressed && mouseButton==CENTER && mouseX>=i*30 && mouseX<=i*30+28 && mouseY>=j*30 && mouseY<=j*30+28)
      {
        hm[i][j]=0;
      }
  
    
    
    
    umple_fundal();
    
    for ( i=1; i<w; i++)
    for ( j=1; j<h; j++)
      if (hm[i][j]==0)
      {
        strokeWeight(1);
        fill(81, 126, 145);
        rect(i*30, j*30, 28, 28, 6);
      }

    for ( i=1; i<w; i++)
    for ( j=1; j<h; j++)
      if (hm[i][j]!=0)
        {
          umple(i, j, 2); 
        }
    
  
    if(mouseIsPressed)
      start2=0;
    else
      start2=1;
  
    if (start==1 && start2==1)
      {
        if (time%7==0)
        {
          for ( i=1; i<w; i++)
          for ( j=1; j<h; j++)
            {
              if (moare(i, j)==1)
                {
                  aux[i][j]=1;
                }
              else
                aux[i][j]=0;
            }
          
          
          for ( i=1; i<w; i++)
          for ( j=1; j<h; j++)
            hm[i][j]=aux[i][j];
        }
      }
    //

}
*/


function matrice(hm2)
{
  for (let x = 0; x < w2; x++) {
    hm2[x] = [];
    for (let y = 0; y < h2; y++) {
      hm2[x][y] =0;
    }
  }
}