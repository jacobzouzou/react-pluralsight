function Button(props) {
  const handleClick = () => props.onClickfunction(props.increment);
  return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}
function App() {
  const [counter, setCounter] = React.useState(0);
  const incrementCounter = (value) => setCounter(counter + value);
  return (
    <div>
      <Button onClickfunction={incrementCounter} increment={1} />
      <Button onClickfunction={incrementCounter} increment={10} />
      <Button onClickfunction={incrementCounter} increment={100} />
      <Display message={counter} />
    </div>
  );
}
const render = () => {
  ReactDOM.render(<App />,document.getElementById('mountNode'));
}

//Call render()
setTimeout(() => {render();}, 1000);

