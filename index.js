let num2='';
let num1='';
let operation='';
let end=false;
let comma=false;

const input=document.querySelector('.answer');
const buttonOperation=document.querySelectorAll('.col');
const clear=document.querySelector('.clear');

function clearAll() {
  num1='';
  num2='';
  operation='';
  input.value=0;
  comma=false;
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

/**function inputComma(event){
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
};*/

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
};




input.addEventListener('keydown', (event)=>{
  console.log('keydown', event.code, event.key);

  if (event.key==='Backspace'){
    num1='';
    num2='';
    operation='';
    input.value='';
  }

  

  if (event.key>=0 && event.key<=9){
    if(num2==='' && operation===''){
      num1+=event.key;

      console.log(num1 );
    }
    else if(num1!=='' && num2!=='' && end){
      num2=event.key;
      end=false;
      
      console.log(num1, num2, operation);
    } else{
      num2+=event.key;
      console.log(num2);
    }
   
  }

  if (event.key==='+' || event.key==='-' || event.key==='*' || event.key==='/'){
    if (input.value.includes(event.key)){
    
    }
    operation=event.key;
    console.log(input.value);
  }

  if (event.key==='='){
    if(operation==='+'){
      num1=Number(num1)+Number(num2);
      end=true;
      
      console.log(num1, num2, operation);
      return num1; 
    } if(operation==='-'){
      num1=num1-num2;
      end=true;
      input.value=num1;
      console.log(input.value);
      return input.value; 
    } if (operation==='*'){
      num1=num1*num2;
      end=true;
      input.value=num1;
      console.log(num1, num2, operation);
      return input.value; 
    } if (operation==='/'){
      if (num2==='0'){
        input.value='нельзя делить на ноль';
        return;
      } num1=num1/num2;
        end=true;
        input.value=num1;
        console.log(num1, num2, operation);
        return input.value; 
    }
  }


});
