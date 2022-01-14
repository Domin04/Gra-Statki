import React from 'react';

export const WelcomeScreen = ({ PlayButton }) => {
  return (
    <main>
      <h2 className="welcome-screen-title">Zasady</h2>
      <p className="player-tip">
        Ustaw swoje statki na wybranych polach. Twoim przeciwnikiem będzie komputer, który będzie oddawał ogniem zaraz po twoim ruchu. Zatop wszystkie statki przeciwnika!
      </p>
      <button onClick={PlayButton}>Zagraj</button>
    </main>
  );
};
