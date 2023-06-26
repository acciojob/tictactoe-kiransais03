//your JS code here. If required.
let p1;
let p2;
let playername;
document.getElementById('submit').addEventListener('click',gameon);
let currPlayer=1;
function gameon (event) {
    event.preventDefault();
	p1=document.getElementById('player-1').value;
	p2=document.getElementById('player-2').value;
    if(p1.length!==0 && p2.length!==0)
    { 
        document.getElementById('inputdiv').style.display='none';
	document.getElementById('boardview').style.display='block';
    }
    else {
        alert('Please Enter Player 1,Player 2 Name')
    }
    document.getElementsByClassName('message')[0].innerText=`${p1}, you're up`;
}



for(let i=0;i<9;i++)
	{
		document.getElementsByClassName('cells')[i].addEventListener('click',divclicked);
	}

function divclicked(event) {
	if(currPlayer==1) {
	  playername=p1;
	} else {
	  playername=p2;
	}
   document.getElementsByClassName('message')[0].innerText=`${playername}, you're up`;
    // console.log(event)
	if(event.target.innerText=='' && currPlayer==1)
	{
		event.target.innerText='X';
	}
	else if(event.target.innerText=='' && currPlayer==2) {
		event.target.innerText='O';
	}

    if(currPlayer==1) {currPlayer=2;}
    else {currPlayer=1;}
    if(currPlayer==1) {
        playername=p1;
      } else {
        playername=p2;
      }
	document.getElementsByClassName('message')[0].innerText=`${playername}, you're up`;
}