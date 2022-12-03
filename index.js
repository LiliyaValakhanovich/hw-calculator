let num2='';
let num1='';
let operation='';
let end=false;

const input=document.querySelector('.answer');
const buttonOperation=document.querySelectorAll('.col');
const clear=document.querySelector('.clear');

function clearAll() {
  num1='';
  num2='';
  operation='';
  input.value=0;
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

  console.log(event.target);

  if(event.target.classList.contains('number')){
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
  }  

  if(event.target.classList.contains('operation')){
    operation=event.target.value;
    input.value=num1;
    console.log(num1, num2, operation);
    return;
  }
    
  if(event.target.classList.contains('equels')){
        
    if(operation==='+'){
      num1=Number(num1)+Number(num2);
      end=true;
      input.value=num1;
      console.log(num1, num2, operation);
      return input.value; 
           
    } if (operation==='/'){
      if(num2==='0'){
        input.value='нельзя делить на ноль';
        return;
      }
      num1=num1/num2;
      end=true;
      input.value=num1;
      console.log(num1, num2, operation);
      return input.value; 
            
    } if (operation==='x'){
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
  }
    
};

input.addEventListener('keydown', (event)=>{
  console.log('keydown', event.code, typeof(event.key));
  
});
