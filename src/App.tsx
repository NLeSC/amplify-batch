import React from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from 'aws-amplify-react';
import { UsernameAttributes } from 'aws-amplify-react/lib-esm/Auth/common/types';

Amplify.configure(awsconfig);
Storage.configure({ level: 'private' });

export const App: React.FC = () => {
  return (
    <Authenticator usernameAttributes={UsernameAttributes.EMAIL}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Authenticator>
  );
}
