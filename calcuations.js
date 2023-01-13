let str="", prevStr="";
let input=document.querySelector('.input-text');
let buttons=document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        console.log(button.innerText);
        switch (button.innerText) {
            case '0':
                if(str=="") break;
                str+=button.innerText;
                break;
            case '1':
                str+=button.innerText;
                break;

                case '2':
                str+=button.innerText;
                break;
                
                case '3':
                str+=button.innerText;
                break;
                
                case '4':
                str+=button.innerText;
                break;
                case '5':
                str+=button.innerText;
                break;
                case '6':
                str+=button.innerText;
                break;
                case '7':
                str+=button.innerText;
                break;
                case '8':
                str+=button.innerText;
                break;
                case '9':
                str+=button.innerText;
                break;

                case 'C':
                str="";
                break;

                case '<-':
                    str=str.substring(0,str.length-1);
                    break;

                case '+':
                    if(prevStr!=''){
                        let res=calculate(Number.parseInt(str),Number.parseInt(prevStr.substring(0,prevStr.length-1)),prevStr.charAt(prevStr.length-1));
                        str=res.toString();
                        prevStr="";
                    }
                    prevStr=str+'+';
                    str="";
                    break;
                case '-':
                    if(prevStr!=''){
                        let res=calculate(Number.parseInt(str),Number.parseInt(prevStr.substring(0,prevStr.length-1)),prevStr.charAt(prevStr.length-1));
                        str=res.toString();
                        prevStr="";
                    }
                    prevStr=str+'-';
                    str="";
                    break;

                case '*':
                    if(prevStr!=''){
                        let res=calculate(Number.parseInt(str),Number.parseInt(prevStr.substring(0,prevStr.length-1)),prevStr.charAt(prevStr.length-1));
                        str=res.toString();
                        prevStr="";
                    }
                    prevStr=str+'*';
                    str="";
                    break;

                case '/':
                    if(prevStr!=''){
                        let res=calculate(Number.parseInt(str),Number.parseInt(prevStr.substring(0,prevStr.length-1)),prevStr.charAt(prevStr.length-1));
                        str=res.toString();
                        prevStr="";
                    }
                    prevStr=str+'/';
                    str="";
                    break;

                case '=':
                if(prevStr==='') {
                    break;
                }

                if(str===''){
                str='0';
                }
                let res=calculate(Number.parseInt(str),Number.parseInt(prevStr.substring(0,prevStr.length-1)),prevStr.charAt(prevStr.length-1));
                str=res.toString();
                prevStr="";
                break;

            default:
                break;
        }
        console.log(str);
        input.value=str;
    })});

function calculate(a,b,op) {
    switch (op) {
        case '+':
            return a+b;
        case '-':
            return a-b;    
        case '*':
            return a*b; 
        case '/':
            return b/a;
        default:
            break;
    }
}