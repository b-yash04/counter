
const result = document.querySelector('.result');
const increment = document.querySelector('.inc');
const decrement = document.querySelector('.dec');
const custom = document.querySelector('#custom');
const reset = document.querySelector('.reset');
let count = 0;
custom.value = 0
increment.addEventListener('click',(e)=>{
    console.log("yes")
    let val = parseInt(custom.value)|| 1;
    count += val;
    result.innerHTML = count;

});
decrement.addEventListener('click',(e)=>{
    console.log("yes")
    let val = parseInt(custom.value)|| 1;
    count -= val;
    result.innerHTML = count;

});

reset.addEventListener('click',(e)=>{
    result.innerHTML=0;
    count = 0;
    custom.value = 0 ;
})





