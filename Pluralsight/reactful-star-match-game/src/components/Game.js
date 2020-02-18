import React from 'react';
import DisplayStar from "./DisplayStar";
import utils from './Utils';
import PlayNumber from "./PlayNumber";
import PlayAgain from "./PlayAgain"; 

//Custom hoook
const useGameState = () => {
  const [stars, setStars] = React.useState(utils.random(1, 9));
  const [availableNumbers, setavailableNumbers] = React.useState(utils.range(1, 9));
  const [candidateNumbers, setcandidateNumbers] = React.useState([]);
  const [secondsLeft, setSecondsLeft] = React.useState(10);

  React.useEffect(() => {
    if (secondsLeft > 0 && availableNumbers.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);

      return () => {
        clearTimeout(timerId);
      }
    }
  });
  const setGameState = (newCandiateNumbers) => {
    if (utils.sum(newCandiateNumbers) !== stars) {
      setcandidateNumbers(newCandiateNumbers);
    }
    else {
      const newAvailableNumbers = availableNumbers.filter(
        n => !newCandiateNumbers.includes(n)
      );

      //redraw stars (from what'is available)
      setStars(utils.randomSumIn(newAvailableNumbers))
      setavailableNumbers(newAvailableNumbers);
      setcandidateNumbers([]);
    }
  };
  //state transition methode
  return { stars, availableNumbers, candidateNumbers, secondsLeft, setGameState };
};

const Game = (props) => {

  const { stars, availableNumbers, candidateNumbers, secondsLeft, setGameState } = useGameState();

  const candidatesAreWrong = utils.sum(candidateNumbers) > stars;
  // const gameIsWon= availableNumbers.length===0;
  // const gameIsLost= secondsLeft===0;
  const gameStatus = availableNumbers.length === 0
    ? "won"
    : secondsLeft == 0 ? "lost" : "active";

  // const resetGame = () => {
  //   setStars(utils.random(1, 9));
  //   setavailableNumbers(utils.range(1, 9));
  //   setcandidateNumbers([]);
  // }

  const numberStatus = (number) => {
    if (!availableNumbers.includes(number)) {
      return 'used';
    }
    if (candidateNumbers.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const onNumberClick = (number, currentStatus) => {
    //transition of machine state
    if (gameStatus !== "active" || currentStatus === "used") {
      return;
    }
    //candidateNumbers
    // const newCandiateNumbers= candidateNumbers.concat(number);

    const newCandiateNumbers =
      currentStatus === "available" ?
        candidateNumbers.concat(number) :
        candidateNumbers.filter(cn => cn !== number);

    setGameState(newCandiateNumbers);

  };
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
    </div>
      <div className="body">
        <div className="left">
          {
            gameStatus !== "active" ? (
              <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
            ) : (
                <DisplayStar count={stars} />
              )
          }
        </div>
        <div className="right">
          {utils.range(1, 9).map(number =>
            <PlayNumber
              key={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
              number={number} />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );

};

export default Game;