let num2='';
let num1='';
let operation='';
let end=false;
let comma=false;
const buttonOperation=document.querySelectorAll('.col');

function clearAll() {
  num1='';
  num2='';
  operation='';
  input.value='';
  comma=false;
  end=false;
};

buttonOperation.forEach(el=>{
  el.addEventListener('click', calculator);
});

function calculator(event){
  
  if (event.target.classList.contains('clear')){
    clearAll();
  } 
  if (event.target.classList.contains('sign')){
    num1=input.value*(-1);
    input.value=num1;
  }
  if (event.target.classList.contains('percent')){
    num1=input.value/100;
    input.value=num1;
  }
 
  if(event.target.classList.contains('comma')){
    inputComma(event);
  } 

  if(event.target.classList.contains('number')){
    inputNumber(event);
  }  

  if(event.target.classList.contains('operation')){
    saveOperation(event);
  }
    
  if(event.target.classList.contains('equels')){
    calculationResult(event);    
  }
    
};

function inputComma(event){
  if (comma===false && num1==='' && num2==='' && operation===''){
    return;
  }
  if(comma===false && num2==='' && operation===''){
    num1+=event.target.value;
    comma=true;
  }
  if (comma===false && num1!=='' && operation!=='' && num2===''){
    return;
  }
  if( comma===false && num1!=='' && operation!==''){
    num2+=event.target.value;
    comma=true;
  } 
  if (comma===true && num1!=='' && operation!=='' && !num2.includes('.') && num2===''){
    return;
  }
  if (comma===true && num1!=='' && operation!=='' && !num2.includes('.')){
    num2+=event.target.value;
  }
};

function inputNumber(event){
  if(num2===''&& operation===''){ 
    num1+=event.target.value;
    input.value=num1;
  }
  else if (num1!=='' && num2!=='' && end){
    num2=event.target.value;
    end=false;
    input.value=num2;
    console.log(num1, num2, operation);
  }
  else {
    num2+=event.target.value;
    input.value=num2;
  }
  console.log(num1,num2,operation);
  return;
};

function saveOperation(event){
  operation=event.target.value;
  input.value=num1;
  console.log(num1, num2, operation);
  return;
};

function calculationResult(event){
  if(operation==='+'){
    num1=Number(num1)+Number(num2);
    end=true;
    input.value=num1;
    console.log(num1, num2, operation);
    return input.value; 
         
  } if (operation==='/'){
    if(num2==='0'){
      input.value='???????????? ???????????? ???? ????????';
      return;
    }
    num1=num1/num2;
    end=true;
    input.value=num1;
    console.log(num1, num2, operation);
    return input.value; 
          
  } if (operation==='*'){
    num1=num1*num2;
    end=true;
    input.value=num1;
    console.log(num1, num2, operation);
    return input.value; 
          
  } if (operation==='-'){
    num1=num1-num2;
    end=true;
    input.value=num1;
    console.log(num1, num2, operation);
    return input.value; 
  }
};

