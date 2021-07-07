let hm= [];
let aux=[];
let fundal=[];
let start=0, start2=0;
let i, j;
let time=0;
let w=32, h=25; 
function setup() {
  var canvas=createCanvas(1000, 800);
  canvas.parent("joc");
  matrice(hm);
  matrice(aux);
  matrice(fundal);
}

function draw() {
  background(62, 89, 86);
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
  
  
}
function umple_fundal()
{
  for ( i=1; i<w; i++)
  for ( j=1; j<h; j++)
  {
    fundal[i][j]=0;
    if ((hm[i-1][j-1]==1 && hm[i][j]==1))
    {
      fundal[i][j]=1;
      fill(195, 247, 188);
        circle(i*30-5, j*30-5, 30);
    }
      if ((hm[i-1][j+1]==1 && hm[i][j]==1))
      {
        fundal[i][j+1]=1;
        fill(195, 247, 188);
        circle(i*30-5, (j+1)*30+5, 30);
      }
    
  }
  
}

function umple(i, j, care)
{
  strokeWeight(0);
  var colt1=0, colt2=0, colt3=0, colt4=0;
  if (hm[i-1][j-1]==0 && hm[i][j-1]==0 && hm[i-1][j]==0)
    colt1=8;
  if (hm[i-1][j+1]==0 && hm[i-1][j]==0 && hm[i][j+1]==0)
    colt4=8;
  if (i<w-1)
  if (hm[i+1][j-1]==0 && hm[i][j-1]==0 && hm[i+1][j]==0)
    colt2=8;
  if (i<w-1)
  if (hm[i+1][j]==0 && hm[i][j+1]==0 && hm[i+1][j+1]==0)
    colt3=8;
  if (care==1)
  {
    fill(0);
    rect(i*30-4, j*30-4, 36, 36, colt1, colt2, colt3, colt4);
  }
  else
  {
    fill(195, 247, 188);
    rect(i*30-1, j*30-1, 30, 30, colt1, colt2, colt3, colt4);
  }
  
}
function mouseIsReleased()
{
  start2=1;
}
function moare(i, j)
{
  var vecX=[-1, -1, -1, 0, 0, 1, 1, 1];
  var vecY=[-1, 0, 1, -1, 1, -1, 0, 1];
  var iii=0, jjj=0;
  var vecini_vii=0;
  var moarta;
  for (var ii=0; ii<8; ii++)
    {
      iii=i+vecX[ii];
      jjj=j+vecY[ii];
      if (iii>=1 && iii<w && jjj>=1 && jjj<h)
        if (hm[iii][jjj]==1)
          vecini_vii=vecini_vii+1;
    }
  moarta=0;
  if (vecini_vii==3 && hm[i][j]==0)
    moarta=1;
  if ((vecini_vii==2 || vecini_vii==3) && hm[i][j]==1)
    moarta=1;
  return moarta;
}
function matrice(hm)
{
  for (let x = 0; x < w; x++) {
    hm[x] = [];
    for (let y = 0; y < h; y++) {
      hm[x][y] =0;
    }
  }
}
function keyPressed() 
{
  if (keyCode == 65) 
  {
    if (start==0)
    {
      start=1;
      start2=1;
    }
    else
    {
      start=0;
      start2=0;
    }
  }
  if (keyCode == 82)
  {
      for (var i=1; i<w; i++)
      for (var j=1; j<h; j++) 
        hm[i][j]=0;
  }
}