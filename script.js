let reset = document.querySelector('button');
reset.addEventListener('click', resetfun)

let allsquare = document.getElementsByTagName('td');
for(let i=0; i<allsquare.length; i++){
    tmp = 0;
    allsquare[i].addEventListener('click', function(){
        if (tmp === 0){
            allsquare[i].textContent = "X";
        }else{
            allsquare[i].textContent = "";
            tmp = 0;
        }
        
    });
    allsquare[i].addEventListener('dblclick', function(){
        allsquare[i].textContent = "O";
        tmp = 1;
    })

}


function resetfun(){
    for(let i=0; i<allsquare.length; i++){
        allsquare[i].textContent = "";
    }
}


