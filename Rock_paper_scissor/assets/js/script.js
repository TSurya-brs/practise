
//Game
function game(){
    let name=document.getElementById("name");
    if(name){
        name.value='';
        document.getElementById("first").style.display='none';
        document.getElementById("second").style.display='flex';
    }
    else{
        alert("Enter your name");
        
    }
    
};



let cnt1=0;
let cnt2=0;
function restart(){
    cnt1=0;
    cnt2=0;

    document.getElementById("scr1").textContent=cnt1;
    document.getElementById("scr2").textContent=cnt2;

    document.getElementById("second").style.display='none';

    let q=document.getElementById("first")
    
    q.style.display='flex';
    
    document.getElementById("result").style.display='none';
    
}


//Choosing one role
let list=['rock', 'paper', 'scissor'];
let len=list.length;

function select(user_choice){
    let rand=Math.floor(Math.random() * len); 
    let comp_choice=list[rand];
    let ans="";
    if(user_choice === comp_choice){
        ans="It's Draw";
    }
    else if ((user_choice === 'rock' && comp_choice === 'scissor' )||
    (user_choice === 'paper' && comp_choice === 'rock' )||
    (user_choice === 'scissor' && comp_choice === 'paper' ) ) {
        ans="You Won";
        
    } else {
        ans="You Lose";
    }


    //Result popup div
    // popup(rand);
    let imglist=['assets/img/paper.jpg','assets/img/rock.jpg', 'assets/img/scissors.jpg']
    let res=document.getElementById("result");
    res.style.display='flex';
    res.innerHTML=`${ans} \n Because computer chosed ${comp_choice}`;
    let imge = document.createElement('img');
    imge.src=imglist[rand];
    res.appendChild(imge);
    
    

    if(ans === "win") {
        cnt1++;
        document.getElementById("scr1").textContent=cnt1;
    }
    if(ans === "lose") {
        cnt2++;
        document.getElementById("scr2").textContent=cnt2;
    }

}


// function popup(rand){
    
//     let imglist=['assets/img/paper.jpg','assets/img/rock.jpg', 'assets/img/scissors.jpg']
//     let res=document.getElementById("result");
//     res.style.display='flex';
//     res.innerHTML=`${ans}:${comp_choice}:${user_choice}`;
//     let imge = document.createElement('img');
//     imge.src=imglist[rand];
//     res.appendChild(imge);
//     // return;
    
//     };


























//Footer
function colour(color){
    const arrdiv=['header','footer'];
    for(let i=0; i<arrdiv.length; i++){
        const a=document.getElementsByClassName(arrdiv[i]);
        for(let j=0; j<a.length; j++){
            a[j].style.backgroundColor=color;
        }
    }
}