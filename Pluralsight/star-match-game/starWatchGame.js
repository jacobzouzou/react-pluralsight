var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// v1 STAR MATCH - Starting Template

var DisplayStar = function DisplayStar(props) {
  return utils.range(1, props.count).map(function (startId) {
    return React.createElement("div", {
      key: startId,
      className: "star"
    });
  });
  // <>
  //   {
  //     utils.range(1, props.count).map(startId =>
  //       <div key={startId} className="star"/>
  //     )
  //   }
  // </>
};

var PlayNumber = function PlayNumber(props) {
  return React.createElement(
    "button",
    {
      className: "number",
      style: { backgroundColor: colors[props.status] },
      onClick: function onClick() {
        props.onClick(props.number, props.status);
      } },
    props.number
  );
};

var PlayAgain = function PlayAgain(props) {
  return React.createElement(
    "div",
    { className: "game-done" },
    React.createElement(
      "div",
      {
        className: "message",
        style: { color: props.gameStatus === "lost" ? "red" : "green" }
      },
      props.gameStatus === "lost" ? "Game Over" : "Nice"
    ),
    React.createElement(
      "button",
      { onClick: props.onClick },
      "Play Again"
    )
  );
};

//Custom hoook
var useGameState = function useGameState() {
  var _React$useState = React.useState(utils.random(1, 9)),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      stars = _React$useState2[0],
      setStars = _React$useState2[1];

  var _React$useState3 = React.useState(utils.range(1, 9)),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      availableNumbers = _React$useState4[0],
      setavailableNumbers = _React$useState4[1];

  var _React$useState5 = React.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      candidateNumbers = _React$useState6[0],
      setcandidateNumbers = _React$useState6[1];

  var _React$useState7 = React.useState(10),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      secondsLeft = _React$useState8[0],
      setSecondsLeft = _React$useState8[1];

  React.useEffect(function () {
    if (secondsLeft > 0 && availableNumbers.length > 0) {
      var timerId = setTimeout(function () {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);

      return function () {
        clearTimeout(timerId);
      };
    }
  });
  var setGameState = function setGameState(newCandiateNumbers) {
    if (utils.sum(newCandiateNumbers) !== stars) {
      setcandidateNumbers(newCandiateNumbers);
    } else {
      var newAvailableNumbers = availableNumbers.filter(function (n) {
        return !newCandiateNumbers.includes(n);
      });

      //redraw stars (from what'is available)
      setStars(utils.randomSumIn(newAvailableNumbers));
      setavailableNumbers(newAvailableNumbers);
      setcandidateNumbers([]);
    }
  };
  //state transition methode
  return { stars: stars, availableNumbers: availableNumbers, candidateNumbers: candidateNumbers, secondsLeft: secondsLeft, setGameState: setGameState };
};

var Game = function Game(props) {
  var _useGameState = useGameState(),
      stars = _useGameState.stars,
      availableNumbers = _useGameState.availableNumbers,
      candidateNumbers = _useGameState.candidateNumbers,
      secondsLeft = _useGameState.secondsLeft,
      setGameState = _useGameState.setGameState;

  var candidatesAreWrong = utils.sum(candidateNumbers) > stars;
  // const gameIsWon= availableNumbers.length===0;
  // const gameIsLost= secondsLeft===0;
  var gameStatus = availableNumbers.length === 0 ? "won" : secondsLeft == 0 ? "lost" : "active";

  // const resetGame = () => {
  //   setStars(utils.random(1, 9));
  //   setavailableNumbers(utils.range(1, 9));
  //   setcandidateNumbers([]);
  // }

  var numberStatus = function numberStatus(number) {
    if (!availableNumbers.includes(number)) {
      return 'used';
    }
    if (candidateNumbers.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  var onNumberClick = function onNumberClick(number, currentStatus) {
    //transition of machine state
    if (gameStatus !== "active" || currentStatus === "used") {
      return;
    }
    //candidateNumbers
    // const newCandiateNumbers= candidateNumbers.concat(number);

    var newCandiateNumbers = currentStatus === "available" ? candidateNumbers.concat(number) : candidateNumbers.filter(function (cn) {
      return cn !== number;
    });

    setGameState(newCandiateNumbers);
  };
  return React.createElement(
    "div",
    { className: "game" },
    React.createElement(
      "div",
      { className: "help" },
      "Pick 1 or more numbers that sum to the number of stars"
    ),
    React.createElement(
      "div",
      { className: "body" },
      React.createElement(
        "div",
        { className: "left" },
        gameStatus !== "active" ? React.createElement(PlayAgain, { onClick: props.startNewGame, gameStatus: gameStatus }) : React.createElement(DisplayStar, { count: stars })
      ),
      React.createElement(
        "div",
        { className: "right" },
        utils.range(1, 9).map(function (number) {
          return React.createElement(PlayNumber, {
            key: number,
            status: numberStatus(number),
            onClick: onNumberClick,
            number: number });
        })
      )
    ),
    React.createElement(
      "div",
      { className: "timer" },
      "Time Remaining: ",
      secondsLeft
    )
  );
};

// Color Theme
var colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue'
};

// Math science
var utils = {
  // Sum an array
  sum: function sum(arr) {
    return arr.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
  },

  // create an array of numbers between min and max (edges included)
  range: function range(min, max) {
    return Array.from({ length: max - min + 1 }, function (_, i) {
      return min + i;
    });
  },

  // pick a random number between min and max (edges included)
  random: function random(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  },

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: function randomSumIn(arr, max) {
    var sets = [[]];
    var sums = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0, len = sets.length; j < len; j++) {
        var candidateSet = sets[j].concat(arr[i]);
        var candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  }
};

var StarMatch = function StarMatch() {
  var _React$useState9 = React.useState(1),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      gameId = _React$useState10[0],
      setGameId = _React$useState10[1];

  return React.createElement(Game, { key: gameId, startNewGame: function startNewGame() {
      return setGameId(gameId + 1);
    } });
};

ReactDOM.render(React.createElement(StarMatch, null), mountNode);