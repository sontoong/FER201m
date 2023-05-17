import React from "react";
export default function PlayersPresentation({ players }) {
  return (
    <div>
      {players.map((player) => (
        <div className="column">
          <div className="card">
            <img src={player.img} alt="a" />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
