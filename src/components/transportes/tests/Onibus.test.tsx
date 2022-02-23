import React from 'react';
import { mount } from '@cypress/react';
import Onibus from  '../Onibus';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Onibus', () => {
  it('renders the bus list', () => {
    mount(
      <Router>
        <Onibus />
      </Router>
    );
  })
})