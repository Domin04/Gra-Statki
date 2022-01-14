import React from 'react';

export const PlayerTips = ({
  gameState,
  hitsbyPlayer,
  hitsByComputer,
  startAgain,
  winner,
}) => {
  let numberOfHits = hitsbyPlayer.length;
  let numberOfSuccessfulHits = hitsbyPlayer.filter((hit) => hit.type === 'hit').length;
  let accuracyScore = Math.round(100 * (numberOfSuccessfulHits / numberOfHits));
  let succesfulComputerHits = hitsByComputer.filter((hit) => hit.type === 'hit').length;

  let gameOverPanel = (
    <div>
      <div className="welcome-screen-title">Koniec gry!</div>
      <p className="player-tip">
        {winner === 'player' ? 'Wygrałeś! 🎉' : 'Przegrałeś 😭. Powodzenia następnym razem! '}
      </p>
      <p className="restart" onClick={startAgain}>
        Zagraj ponownie
      </p>
    </div>
  );

  let tipsPanel = (
    <div>
      <div className="welcome-screen-title">Statystyki</div>
      <div id="firing-info">
        <ul>
          <li>{numberOfSuccessfulHits} trafienia</li>
          <li>{accuracyScore > 0 ? `${accuracyScore}%` : `0%`} skuteczność </li>
        </ul>
        <p className="player-tip">Pierwsza osoba która zatopi 5 statków przeciwnika, wygrywa!</p>
        <p className="restart" onClick={startAgain}>
          Od nowa
        </p>
      </div>
    </div>
  );

  return (
    <div id="player-tips">
      {numberOfSuccessfulHits === 17 || succesfulComputerHits === 17
        ? gameOverPanel
        : tipsPanel}
    </div>
  );
};
