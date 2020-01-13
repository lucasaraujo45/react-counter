import React from 'react';
import './App.scss';
import './icons.js';
import PropTypes from 'prop-types';

function App(props) {
  return (
    <div className='bigCounter'>
      <div className='calender'><i className="far fa-clock"></i></div>
      <div className='four'>{props.digitFour % 10}</div>
      <div className='three'>{props.digitThree % 10}</div>
      <div className='two'>{props.digitTwo % 10}</div>
      <div className='one'>{props.digitOne % 10}</div>

    </div>
  );
}
App.protoTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number
};

export default App;
