import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import NumButton from './components/NumButton';
import IconButton from './components/IconButton';

function App() {
  const iconColor = 'red';
  const iconWidth = '27';
  const iconHeight = '27';
  return (
    <>
      <div className='container-main'>
        <Display className='display display-secondary'>Display2</Display>
        <Display id='display' className='display display-primary'>Display1</Display>
        <div className='container-btn'>
          <NumButton className='btn' id='seven' buttonName='7' />
          <NumButton className='btn' id='eight' buttonName='8' />
          <NumButton className='btn' id='nine' buttonName='9' />
          <IconButton className='btn btn-orange' id='add' iconName='ic:baseline-plus' color={iconColor} width={iconWidth} height={iconHeight} />
          <NumButton className='btn' id='four' buttonName='4' />
          <NumButton className='btn' id='five' buttonName='5' />
          <NumButton className='btn' id='six' buttonName='6' />
          <IconButton className='btn btn-orange' id='subtract' iconName='ic:baseline-minus' color={iconColor} width={iconWidth} height={iconHeight} />
          <NumButton className='btn' id='one' buttonName='1' />
          <NumButton className='btn' id='two' buttonName='2' />
          <NumButton className='btn' id='three' buttonName='3' />
          <IconButton className='btn  btn-orange' id='multiply' iconName='mdi:multiply' color={iconColor} width={iconWidth} height={iconHeight} />
          <NumButton className='btn btn-double-width' id='zero' buttonName='0' />
          <NumButton className='btn' id='decimal' buttonName='.' />
          <IconButton className='btn btn-orange' id='divide' iconName='ic:round-divide' color={iconColor} width={iconWidth} height={iconHeight} />
          <NumButton className='btn btn-triple-width btn-darkgray' id='clear' buttonName='AC' />
          <NumButton className='btn  btn-orange' id='equals' buttonName='=' />
        </div>
      </div>
      <footer>by Alex Wang</footer>
    </>
  );
}

export default App;
