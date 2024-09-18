
let a;
let flag=false;
// const xyz = document.getElementById('matter').textContent;
function fun(){
    if(flag){
        clearInterval(a);
    }
    const textElement=document.getElementById('matter');



    let abc=textElement.textContent;
    const len=abc.length;
    console.log(len)
    let initial=0;

    // clearInterval(a);
    textElement.textContent = ''; 
    flag=true;



    a=setInterval( ()=> {
        if(initial < len){
            textElement.textContent = abc[initial];
            // console.log(textElement)
            initial++;
        }
        else{
            flag=false; 
            clearInterval(a);
            
        }
        console.log()

    },100);

    
};

window.onload=fun;

// function both(){
//     fun('head');
//     fun('matter');
// };



//footer
function colour(color){
    const arrdiv=['header','clk','footer', 'div'];
    for(let i=0; i<arrdiv.length; i++){
        const a=document.getElementsByClassName(arrdiv[i]);
        for(let j=0; j<a.length; j++){
            a[j].style.backgroundColor=color;
        }
    }
}