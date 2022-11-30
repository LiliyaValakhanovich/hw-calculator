let num2='';
let num1='';
let sign='';
let result='';
const form=document.querySelector('.form');
const input=document.querySelector('.answer');
const button=document.querySelector('.col');




 
  const number=document.querySelectorAll('.number');
  console.log(number);
  number.forEach(el=>{
    el.addEventListener('click', addToInput);
  })

  function addToInput(event){
    console.log(event.target.value);
    input.value=input.value+event.target.value;
    const num=input.value;
    console.log(typeof(num));
    return num;
  }

  const clearOperation=document.querySelector('.clear');
  console.log(clearOperation);
  clearOperation.addEventListener('click', ()=>{
    return input.value='';
  });

  const signNumber=document.querySelector('.sign');
  signNumber.addEventListener('click', ()=>{
    return input.value=input.value*(-1);
  });

  const percentOperation=document.querySelector('.percent');
  percentOperation.addEventListener('click', ()=>{
    return input.value=input.value/100;
  });





  function calculate(num1, operation, num2){
    
  }






