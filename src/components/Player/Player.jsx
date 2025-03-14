import { useState } from 'react';
const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const editPlayer = () => {
    setIsEditing(!isEditing);
    console.info(isEditing);
  };
  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required />;
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editPlayer}>Edit</button>
    </li>
  );
};
export default Player;
