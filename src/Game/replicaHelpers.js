import React from 'react';
import { ReplicaBox } from './ReplicaBox';

// Zwraca replikę statku i jego nazwę
export const getReplicaShip = (availableShips, shipName, selectShip) => {
  let ship = availableShips.find((item) => item.name === shipName);
  let shipLength = new Array(ship.length).fill('ship');

  let allReplicaSquares = shipLength.map((item, index) => (
    <div className="small-square" key={index} />
  ));

  return (
    <ReplicaBox
      key={shipName}
      selectShip={selectShip}
      shipName={shipName}
      squares={allReplicaSquares}
    />
  );
};
