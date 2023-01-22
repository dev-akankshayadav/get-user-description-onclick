import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const actions = ["🧱", "📄", "✂"];

  const [userAction, setUserAction] = useState(null);
  const [computerAction, setComputerAction] = useState(null);
  const [winner, setWinner] = useState(null);

  const handleChange = (value) => {
    setUserAction(value);
    generateComputerAction();
  };

  const generateComputerAction = () => {
    const radAction = Math.floor(Math.random() * actions.length);
    const randomAction = actions[radAction];
    setComputerAction(randomAction);
  };

  const handleReset = () => {
    setUserAction(null);
    setComputerAction(null);
    setWinner("");
  };

  useEffect(() => {
    result(); // eslint-disable-next-line
  }, [userAction, computerAction]);

  const result = () => {
    switch (userAction + computerAction) {
      case "✂📄":
      case "🧱✂":
      case "🧱📄":
        setWinner("You Win ! 😍");
        break;
      case "📄✂":
      case "✂🧱": // eslint-disable-next-line
      case "🧱📄":
        setWinner("You Loose! 😓");
        break;
      case "📄📄":
      case "✂✂":
      case "🧱🧱":
        setWinner("Tie ! 🙁");
        break;
      default:
        handleReset();
    }
  };

  return (
    <div className="App">
      <h1> Rock Paper Scissor</h1>
      <h2> Pick One </h2>
      <div className="action-container">
        {actions.map((action, name) => (
          <button
            key={name}
            className="action-btn"
            onClick={() => handleChange(action)}
          >
            {action}
          </button>
        ))}
      </div>
      <div className="player-container">
        <h2>You </h2>
        <div className="action-chosen">{userAction}</div>
      </div>
      <div className="player-container">
        <h2> Computer </h2>
        <div className="action-chosen"> {computerAction} </div>
      </div>
      <h3 className="winner"> {winner} </h3>
      <button
        className="play"
        onClick={() => {
          handleReset();
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default App;
