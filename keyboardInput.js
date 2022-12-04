const input=document.querySelector('.answer');

input.addEventListener('keydown', (event)=>{
  console.log('keydown', event.code, event.key);

  if ((/[a-z]/.test(event.key)) || (/[A-Z]/.test(event.key))){
    event.preventDefault();
  }

  if (event.key==='Backspace'){
    clearAll();
  }

  if (event.key==='%'){
    event.preventDefault();
    num1=input.value/100;
    input.value=num1; 
  } 

  if (event.code==='NumpadDecimal' || event.code==='Period'){
    if (comma===false && num1==='' && num2==='' && operation===''){
      event.preventDefault();
    }
    if(comma===false && num2==='' && operation===''){
      num1+=event.key;
      comma=true;
    }
    if (comma===false && num1!=='' && operation!=='' && num2===''){
      event.preventDefault();
    }
    if( comma===false && num1!=='' && operation!==''){
      num2+=event.key;
      comma=true;
    } 
    if (comma===true && num1!=='' && operation!=='' && !num2.includes('.') && num2===''){
      event.preventDefault(); 
    }
    if (comma===true && num1!=='' && operation!=='' && !num2.includes('.')){
      num2+=event.key;
    }
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
    } else {
      num2+=event.key;
      console.log(num2);
    } 
  }

  if (event.key==='+' || event.key==='-' || event.key==='*' || event.key==='/'){
    operation=event.key; 
    if(input.value.includes(operation)){
      event.preventDefault();
    }
  }

  if (event.key==='='){
    event.preventDefault();
    calculationResult();
  }
});


