import React from 'react';
import ReactDOM from 'react-dom';
import Characters from './Characters';

describe('Characters component', function() {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Characters />, div);
    });

});