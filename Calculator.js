let themeButton = document.getElementById('bar');
let circle = document.getElementById('circle');
let body = document.getElementsByTagName('body');
let screen = document.getElementsByClassName('screen');
let result = document.getElementById('result');
let value = document.getElementById('value');
let buttons = document.getElementsByClassName('buttons');
let button = document.getElementsByTagName('button');
let equal = document.getElementsByClassName('equal');
let del = document.getElementsByClassName('del');
let reset = document.getElementsByClassName('reset');
let position = 'left';
let operation = '';
let val2 = 0;

function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

//changing theme

themeButton.addEventListener('click', function () {
    if (position === 'left'){
        circle.className = 'circle-middle';
        position = 'middle';
        body[0].style.backgroundColor = 'hsl(0, 0%, 90%)';
        body[0].style.color = 'hsl(60, 10%, 19%)';
        themeButton.style.backgroundColor = 'hsl(0, 5%, 81%)';
        screen[0].style.backgroundColor = 'hsl(0, 0%, 93%)';
        buttons[0].style.backgroundColor = 'hsl(0, 5%, 81%)';
        for(let i = 0; i < button.length; i++){
            button[i].style.color = 'hsl(60, 10%, 19%)';
        }
        equal[0].style.backgroundColor = 'hsl(25, 98%, 40%)';
        equal[0].style.boxShadow = '0px 3px 0 0 hsl(25, 99%, 27%)';
        equal[0].style.color = 'white';
        del[0].style.backgroundColor = 'hsl(185, 42%, 37%)';
        del[0].style.boxShadow = '0px 3px 0 0 hsl(185, 58%, 25%)';
        del[0].style.color = 'white';
        reset[0].style.backgroundColor = 'hsl(185, 42%, 37%)';
        reset[0].style.boxShadow = '0px 3px 0 0 hsl(185, 58%, 25%)';
        reset[0].style.color = 'white';
    }
    else if(position === 'middle'){
        circle.className = 'circle-right';
        position = 'right';
        body[0].style.backgroundColor = 'hsl(268, 75%, 9%)';
        body[0].style.color = 'hsl(52, 100%, 62%)';
        themeButton.style.backgroundColor = 'hsl(268, 71%, 12%)';
        screen[0].style.backgroundColor = 'hsl(268, 71%, 12%)';
        buttons[0].style.backgroundColor = 'hsl(268, 71%, 12%)';
        for(let i = 0; i < button.length; i++){
            button[i].style.color = 'hsl(52, 100%, 62%)';
            button[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
            button[i].style.boxShadow = '0px 3px 0 0 hsl(290, 70%, 36%)';
        }
        equal[0].style.backgroundColor = 'hsl(176, 100%, 44%)';
        equal[0].style.boxShadow = '0px 3px 0 0 hsl(177, 92%, 70%)';
        equal[0].style.color = 'hsl(198, 20%, 13%)';
        del[0].style.backgroundColor = 'hsl(281, 89%, 26%)';
        del[0].style.boxShadow = '0px 3px 0 0 hsl(285, 91%, 52%)';
        del[0].style.color = 'white';
        reset[0].style.backgroundColor = 'hsl(281, 89%, 26%)';
        reset[0].style.boxShadow = '0px 3px 0 0 hsl(285, 91%, 52%)';
        reset[0].style.color = 'white';
    }
    else if(position === 'right'){
        circle.className = 'circle';
        position = 'left';
        body[0].style.backgroundColor = 'hsl(222, 26%, 31%)';
        body[0].style.color = 'white';
        themeButton.style.backgroundColor = 'hsl(223, 31%, 20%)';
        screen[0].style.backgroundColor = 'hsl(224, 36%, 15%)';
        buttons[0].style.backgroundColor = 'hsl(223, 31%, 20%)';
        for(let i = 0; i < button.length; i++){
            button[i].style.color = 'hsl(221, 14%, 31%)';
            button[i].style.backgroundColor = 'hsl(30, 25%, 89%)';
            button[i].style.boxShadow = '0px 3px 0 0 hsl(28, 16%, 65%)';
        }
        equal[0].style.backgroundColor = 'hsl(6, 63%, 50%)';
        equal[0].style.boxShadow = '0px 3px 0 0 hsl(6, 70%, 34%)';
        equal[0].style.color = 'white';
        del[0].style.backgroundColor = 'hsl(225, 21%, 49%)';
        del[0].style.boxShadow = '0px 3px 0 0 hsl(224, 28%, 35%)';
        del[0].style.color = 'white';
        reset[0].style.backgroundColor = 'hsl(225, 21%, 49%)';
        reset[0].style.boxShadow = '0px 3px 0 0 hsl(224, 28%, 35%)';
        reset[0].style.color = 'white';
    }
  });

  //the logic

buttons[0].addEventListener('click', function(e) {
    clickedButton = e.target;
    if(clickedButton.className === 'number'){
        if(result.textContent.length < 10){
            result.textContent = `${result.textContent}${clickedButton.textContent}`;
        }
    }
    else if(clickedButton.className === 'del'){
        if(result.textContent.length > 0){ 
            result.textContent = result.textContent.substring(0, result.textContent.length - 1);
        }
    }
    else if(clickedButton.className === 'dot'){
        if(result.textContent.length > 0 && result.textContent.length < 9){
            if(result.textContent.includes('.') === false){
                result.textContent = `${result.textContent}${clickedButton.textContent}`;
            }
        }
    }
    else if(clickedButton.className === 'operator'){
        if(value.textContent.length === 0 && result.textContent.length > 0){
            value.textContent = result.textContent;
            result.textContent = '';
            if(clickedButton.textContent === '+'){
                operation = 'add';
            }
            else if(clickedButton.textContent === '-'){
                operation = 'substract';
            }
            else if(clickedButton.textContent === 'x'){
                operation = 'multiply';
            }
            else if(clickedButton.textContent === '/'){
                operation = 'divide';
            }
        }
        else if(value.textContent.length > 0 && result.textContent.length > 0){
            val2 = result.textContent;
            result.textContent = '';
            if(operation === 'add'){
                value.textContent = add(Number(value.textContent), Number(val2));
            }
            else if(operation === 'substract'){
                value.textContent = substract(Number(value.textContent), Number(val2));
            }
            else if(operation === 'multiply'){
                value.textContent = multiply(Number(value.textContent), Number(val2));
            }
            else if(operation === 'divide'){
                value.textContent = Math.round(divide(Number(value.textContent), Number(val2)) * 1000) / 1000;
            }

            if(clickedButton.textContent === '+'){
                operation = 'add';
            }
            else if(clickedButton.textContent === '-'){
                operation = 'substract';
            }
            else if(clickedButton.textContent === 'x'){
                operation = 'multiply';
            }
            else if(clickedButton.textContent === '/'){
                operation = 'divide';
            }
        }
        else if(value.textContent.length > 0 && result.textContent.length === 0){
            if(clickedButton.textContent === '+'){
                operation = 'add';
            }
            else if(clickedButton.textContent === '-'){
                operation = 'substract';
            }
            else if(clickedButton.textContent === 'x'){
                operation = 'multiply';
            }
            else if(clickedButton.textContent === '/'){
                operation = 'divide';
            }
        }
    }
    else if(clickedButton.className === 'equal'){
        if(value.textContent.length > 0 && result.textContent.length === 0){
            result.textContent = value.textContent;
            value.textContent = '';
        }
        else if(value.textContent.length > 0 && result.textContent.length > 0){
            val2 = result.textContent;
            if(operation === 'add'){
                result.textContent = add(Number(value.textContent), Number(val2));
            }
            else if(operation === 'substract'){
                result.textContent = substract(Number(value.textContent), Number(val2));
            }
            else if(operation === 'multiply'){
                result.textContent = multiply(Number(value.textContent), Number(val2));
            }
            else if(operation === 'divide'){
                result.textContent = Math.round(divide(Number(value.textContent), Number(val2)) * 1000) / 1000;
            }
            value.textContent = '';
        }
    }
    else if(clickedButton.className === 'reset'){
        value.textContent = '';
        result.textContent = '';
        val2 = 0;
        operation = '';
    }
});