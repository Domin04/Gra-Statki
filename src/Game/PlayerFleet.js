import React from 'react';
import { ReplicaBox } from './ReplicaBox';

export const PlayerFleet = ({
  availableShips,
  selectShip,
  currentlyPlacing,
  startTurn,
  startAgain,
}) => {
  let shipsLeft = availableShips.map((ship) => ship.name);

  // Za każdy nadal dostępny statek zwróć Replica Box z nazwą statku i tyloma kwadratami, ile wynosi jego długość
  let shipReplicaBoxes = shipsLeft.map((shipName) => (
    <ReplicaBox
      selectShip={selectShip}
      key={shipName}
      isCurrentlyPlacing={currentlyPlacing && currentlyPlacing.name === shipName}
      shipName={shipName}
      availableShips={availableShips}
    />
  ));

  let fleet = (
    <div id="replica-fleet">
      {shipReplicaBoxes}
      <p className="player-tip">Kliknij prawym przyciskiem myszy, aby obrócić statek.</p>
      <p className="restart" onClick={startAgain}>
        Restart
      </p>
    </div>
  );

  let playButton = (
    <div id="play-ready">
      <p className="player-tip">Statki sa w formacji.</p>
      <button id="play-button" onClick={startTurn}>
        Start game
      </button>
    </div>
  );

  return (
    <div id="available-ships">
      <div className="welcome-screen-title"> Twoje statki</div>
      {availableShips.length > 0 ? fleet : playButton}
    </div>
  );
};
