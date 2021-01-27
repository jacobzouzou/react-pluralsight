//this script user pure JS not use JSX
const jsTarget = document.getElementById("jsDate");
const reactTarget = document.getElementById("reactDate");

const render = () => {
  //display js element
  jsTarget.innerHTML = `
    <div class="split">
        <h3>JS date Template</h3>
        <p>${new Date()}</p>
    </div>   
     `;

  const reactDiv = React.createElement(
    "div",
    { className: "split" },
    React.createElement("h3", null,"React date Template"),
    React.createElement("p", null, new Date().toString())
  );

  //Display react element
  ReactDOM.render(reactDiv, reactTarget);
};

setInterval(() => {
  render();
}, 1000);
