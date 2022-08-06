
var x = parseFloat( prompt("Enter a number"));
var y = parseFloat( prompt("Enter another number"));
var operator = prompt("Enter operator (+, -, /, *)");

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
