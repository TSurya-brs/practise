
// clock 
setInterval(updateSecond, 1000);

function updateSecond(){
    const now = new Date();
    // console.log(now);

    const seconds = now.getSeconds();
    const rotation=(seconds/60)*360;
    let sec = document.querySelector(".sec").style.transform=`rotate(${rotation}deg)`;

    const minutes=now.getMinutes();
    const rotation2=(minutes/60)*360;
    let min=document.querySelector(".min").style.transform=`rotate(${rotation2}deg)`;

    const hours=now.getHours();
    const rotation3=((hours / 12) * 360);
    let hr=document.querySelector(".hour").style.transform=`rotate(${rotation3}deg)`;

}

//display digital clock time
function digitalTime(){
    const date=new Date();
    document.write("hai");

}










// 3-colour box 
function colour(color){
    const arrdiv=['header','clk','footer', 'colourbox'];
    for(let i=0; i<arrdiv.length; i++){
        const a=document.getElementsByClassName(arrdiv[i]);
        for(let j=0; j<a.length; j++){
            a[j].style.backgroundColor=color;
        }
    }
}

// colour box 
function getcolour(color){
    const a=document.getElementById("content").value;
    colour(a);
    document.getElementById('content').value = '';

}


//Background image changing

const bg=['assets/imgs/landing-bg-1.jpg' ,
    'assets/imgs/landing-bg-2.jpg',
    'assets/imgs/landing-bg-3.jpg',
    'assets/imgs/landing-bg-4.jpg',
    'assets/imgs/landing-bg-5.jpg'];

function bgchange(){
    const imgno=Math.floor (Math.random()*bg.length);
    const img=bg[imgno];
    document.body.style.background=`url('${img}')`
};
window.onload = bgchange;







  


