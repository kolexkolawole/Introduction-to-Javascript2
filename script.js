
var x = parseFloat( prompt("Enter a number"));
var operator = prompt("Enter operator (+, -, /, *)");
var y = parseFloat( prompt("Enter another number"));


let result = 0;
    
    if(isNaN(x) || isNaN(y)){
      alert('wrong input! Refresh the page again and provide new data!');
           }
    else{
    if (operator == '+'){
      result = x + y;
    }
    else if (operator == '-'){
      result = x - y;
    }
 else if (operator == '/'){
      result = x / y;
    } else if (operator == '*'){
      result = x * y;
    }
      
alert(result)
    }
