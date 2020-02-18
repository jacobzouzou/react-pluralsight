var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Button(props) {
  var handleClick = function handleClick() {
    return props.onClickfunction(props.increment);
  };
  return React.createElement(
    'button',
    { onClick: handleClick },
    '+',
    props.increment
  );
}

function Display(props) {
  return React.createElement(
    'div',
    null,
    props.message
  );
}
function App() {
  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      counter = _React$useState2[0],
      setCounter = _React$useState2[1];

  var incrementCounter = function incrementCounter(value) {
    return setCounter(counter + value);
  };
  return React.createElement(
    'div',
    null,
    React.createElement(Button, { onClickfunction: incrementCounter, increment: 1 }),
    React.createElement(Button, { onClickfunction: incrementCounter, increment: 10 }),
    React.createElement(Button, { onClickfunction: incrementCounter, increment: 100 }),
    React.createElement(Display, { message: counter })
  );
}
var render = function render() {
  ReactDOM.render(React.createElement(App, null), document.getElementById('mountNode'));
};

//Call render()
setTimeout(function () {
  render();
}, 1000);