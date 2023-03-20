import './App.css'
import React from 'react';
import Button from '@mui/material/Button'

function App() {
  const [number1,setNumber1] = React.useState(0);
  const [number2,setNumber2] = React.useState(null);
  const [operation,setOperation] = React.useState(null);

  function btnClickHandler(event){
    const value = event.currentTarget.innerText

    if(!isNaN(value)){
      console.log(value)
      if(number1 === 0){
        setNumber1(value)
      }else{
        setNumber2(value)
      }
    }else{
      if(number1 === 0){
        return
      }else{
        const operValue = operationHandler(value);
        setOperation(operValue);
      }
    }
  }

  function reset(){
    setNumber1(0);
    setNumber2(null);
    setOperation(null)
  }

  function operationHandler(str){
    switch(str){
      case '%':
        return console.log('%');
      case 'CE':
        return reset();
      case 'C':
        return reset();
      case '≪':
        return console.log('back space');
      case '1/x':
        return console.log('1/x');
      case 'x²':
        return console.log('x²');
      case '2√x':
        return console.log('2√x');
      case '÷':
        return '/';
      case 'X':
        return '*';
      case 'ㅡ':
        return '-';
      case '+':
        return '+';
      case '±':
        return console.log('+ -');
      case '.':
        return console.log('.');
      case '=':
          setNumber1(eval(number1+operation+number2));
          setNumber2(null);
          break;
      default:
        return console.log('error')
    }
  }
  return (
    <div className="app">
      <div className='wrap'>
        <div  className='calculator'>
          <div className='cal-view'>
            <div className='insert'>{number1}</div>
          </div>
          <div>
            <Button variant='contained' size='small' className='calBtn oper' onClick={btnClickHandler}>
              % 
            </Button>
            <Button variant='contained' size='small' className='calBtn oper' onClick={btnClickHandler}>
              CE
            </Button>
            <Button variant='contained' size='small' className='calBtn oper' onClick={btnClickHandler}>
              C
            </Button>
            <Button variant='contained' size='small' className='calBtn oper' onClick={btnClickHandler}>
              ≪
            </Button>
          </div>
          <div>
            <Button variant='contained' size='small' className='calBtn oper' onClick={btnClickHandler}>
              1/x
            </Button>
            <Button variant='contained' size='small' className='calBtn oper' onClick={btnClickHandler}>
              x²
            </Button>
            <Button variant='contained' size='small' className='calBtn oper' onClick={btnClickHandler}>
              2√x
            </Button>
            <Button variant='contained' size='small' className='calBtn oper' onClick={btnClickHandler}>
              ÷
            </Button>
          </div>
          <div>
            <Button variant='outline' size='small' className='calBtn' onClick={btnClickHandler}>
              7
            </Button>
            <Button variant='outline' size='small' className='calBtn' onClick={btnClickHandler}>
              8
            </Button>
            <Button variant='outline' size='small' className='calBtn' onClick={btnClickHandler}>
              9
            </Button>
            <Button variant='outline' size='small' className='calBtn oper' onClick={btnClickHandler}>
              X
            </Button>
          </div>
          <div>
            <Button variant='outline' size='small' className='calBtn' onClick={btnClickHandler}>
              4
            </Button>
            <Button variant='outline' size='small' className='calBtn' onClick={btnClickHandler}>
              5
            </Button>
            <Button variant='outline' size='small' className='calBtn' onClick={btnClickHandler}>
              6
            </Button>
            <Button variant='outline' size='small' className='calBtn oper' onClick={btnClickHandler}>
              ㅡ
            </Button>
          </div>
          <div>
            <Button variant='outline' size='small' className='calBtn' onClick={btnClickHandler}>
              1
            </Button>
            <Button variant='outline' size='small' className='calBtn' onClick={btnClickHandler}>
              2
            </Button>
            <Button variant='outline' size='small' className='calBtn' onClick={btnClickHandler}>
              3
            </Button>
            <Button variant='outline' size='small' className='calBtn oper' onClick={btnClickHandler}>
              +
            </Button>
          </div>
          <div>
            <Button variant='outline' size='small' className='calBtn oper' onClick={btnClickHandler}>
              ±
            </Button>
            <Button variant='outline' size='small' className='calBtn' onClick={btnClickHandler}>
              0
            </Button>
            <Button variant='outline' size='small' className='calBtn' onClick={btnClickHandler}>
              .
            </Button>
            <Button variant='outline' size='small' className='calBtn resultBtn' onClick={btnClickHandler}>
              =
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
