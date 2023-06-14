import { useEffect, useState } from 'react';
import './App.css';
import Display from './components/Display';
import NumButton from './components/NumButton';
import OperationButton from './components/OperationButton';
import { useSelector, useDispatch } from 'react-redux';
import EqualButton from './components/EqualButton.jsx';
import ACButton from './components/ACButton';
import keyDownHandler from './utils/keyDownHandler';
import { updatePrimary, updateSecondary, updateFormula, updatePrimaryReset } from './reducers/displaySlice';
import Footer from './components/Footer';

function App() {

  const dispatch = useDispatch();

  const primaryDisplay = useSelector(state => state.display.primary);
  const secondaryDisplay = useSelector(state => state.display.secondary);
  const formula = useSelector(state => state.display.formula);
  const primaryReset = useSelector(state => state.display.primaryReset);
  const secondaryReset = useSelector(state => state.display.secondaryReset);

  function backspaceKeyHandler(event) {
    switch (event.key.toUpperCase()) {
      case 'BACKSPACE':
        if (secondaryReset) {
          dispatch(updateSecondary({ value: '' }));
          dispatch(updateFormula({ value: '' }));
          dispatch(updatePrimary({ value: '0' }));
          return;
        }
        if (primaryDisplay.length > 1) {
          dispatch(updatePrimary({ value: primaryDisplay.slice(0, -1) }));
          return;
        }
        dispatch(updatePrimary({ value: '0' }));
        dispatch(updatePrimaryReset({ value: false }));
        return;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', backspaceKeyHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', backspaceKeyHandler);

    };
  }, [primaryDisplay, secondaryDisplay, formula, secondaryReset, primaryReset]);

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
      <Footer />
    </>
  );
}

export default App;







