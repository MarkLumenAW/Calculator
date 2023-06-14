import { useEffect, useState } from 'react';
import './App.css';
import Display from './components/Display';
import NumButton from './components/NumButton';
import OperationButton from './components/OperationButton';
import { useSelector, useDispatch } from 'react-redux';
import EqualButton from './components/EqualButton.jsx';
import ACButton from './components/ACButton';
import keyDownHandler from './utils/keyDownHandler';


function App() {

  const primaryDisplay = useSelector(state => state.display.primary);
  const secondaryDisplay = useSelector(state => state.display.secondary);

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.addEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <>
      <div className='container-main'>
        <Display className='display display-secondary'>{secondaryDisplay.slice(-21)}</Display>
        <Display id='display' className='display display-primary'>{primaryDisplay.slice(-10)}</Display>
        <div className='container-btn'>
          <NumButton id='seven' buttonName='7' />
          <NumButton id='eight' buttonName='8' />
          <NumButton id='nine' buttonName='9' />
          <OperationButton id='divide' buttonName='&divide;' operation='/' />

          <NumButton id='four' buttonName='4' />
          <NumButton id='five' buttonName='5' />
          <NumButton id='six' buttonName='6' />
          <OperationButton id='multiply' buttonName='&times;' operation='*' />

          <NumButton id='one' buttonName='1' />
          <NumButton id='two' buttonName='2' />
          <NumButton id='three' buttonName='3' />
          <OperationButton id='subtract' buttonName='-' operation='-' />

          <NumButton className='btn btn-double-width' id='zero' buttonName='0' />
          <NumButton className='btn' id='decimal' buttonName='.' />
          <OperationButton id='add' buttonName='+' operation='+' />

          <ACButton className='btn-triple-width' id='clear' buttonName='AC' />
          <EqualButton id='equals' buttonName='=' />
        </div>
      </div>
      <footer>by Alex Wang</footer>
    </>
  );
}

export default App;







