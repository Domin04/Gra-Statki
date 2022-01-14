import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { WelcomeScreen } from './WelcomeScreen';
import { Game } from './Game/Game.js';
import { Header } from './Header';

import './css/style.css';

export const App = () => {
  const [appState, setAppState] = useState('welcome'); 

  const PlayButton = () => {
    setAppState('play');
  };

  // Renderowanie ekranu powitalnego
  return (
    <React.Fragment>
      <Header />
      {appState === 'play' ? <Game /> : <WelcomeScreen PlayButton={PlayButton} />}
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
