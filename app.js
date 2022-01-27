const cout = document.querySelector('.container');
const kvadratArr=[];
const qator = 15;
const ustun = 15;

for(let i=0; i< qator; i++){
    kvadratArr[i]=[];
    for(let k=0; k < ustun; k++){
        const kvadrat = document.createElement('div');

        kvadrat.classList.add('kvadrat');
        cout.appendChild(kvadrat);
        kvadratArr[i].push(kvadrat);
    }


}
var a, b, c;

kvadratArr.forEach((qator,i) =>{
    qator.forEach((kvadrat, k) => {
        kvadrat.addEventListener('click', () =>{
           growKvadrat(i ,k);

           a = Math.floor(Math.random()*255);
           b = Math.floor(Math.random()*255);
           c = Math.floor(Math.random()*255);
       }) 
    })
})

function growKvadrat(i, k) {
    if(kvadratArr[i] && kvadratArr[i][k]){
    if(!kvadratArr[i][k].classList.contains('grow')){
        kvadratArr[i][k].classList.add('grow');
        setTimeout(() => {
            growKvadrat(i+1, k);
            growKvadrat(i - 1, k);
            growKvadrat(i , k+1);
            growKvadrat(i, k-1);
            kvadratArr[i][k].style.background = `rgba(${a}, ${b}, ${c}, 0.9 )`
            
        }, 100);

        setTimeout(() => {
            kvadratArr[i][k].classList.remove('grow');
            kvadratArr[i][k].style.background = "#fff"
        }, 300);
    }

    }
}