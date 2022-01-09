const lowerCntBtn = document.getElementById('lowerCount');
const addCntBtn = document.getElementById('addCount');

lowerCntBtn.addEventListener('click',lowerCount);
addCntBtn.addEventListener('click',addCount);

let i = 0;
function lowerCount(){
    i--;
    if(i<0){
        document.getElementById('counterValue').style.color = 'red';    
    }
    document.getElementById('counterValue').innerText = i;

}

function addCount(){
    i++;
    if(i>=0){
        document.getElementById('counterValue').style.color = 'green';    
    }
    document.getElementById('counterValue').innerText = i;
}