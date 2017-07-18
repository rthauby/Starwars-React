import React from 'react';
import ReactDOM from 'react-dom';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', function() {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<CharacterDetail />, div);
    });

});