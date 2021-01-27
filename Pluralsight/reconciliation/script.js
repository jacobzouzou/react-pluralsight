//this script user pure JS not use JSX
const jsTarget = document.getElementById("jsDate");
const reactTarget = document.getElementById("reactDate");

const render = () => {
  //display js element
  jsTarget.innerHTML = `
    <div class="split">
        JS Date Template
        <p>${new Date()}</p>
    </div>   
     `;

  const reactDiv = React.createElement(
    "div",
    { className: "split" },
    "React Date Template",
    React.createElement("p", null, new Date().toString())
  );

  //Display react element
  ReactDOM.render(reactDiv, reactTarget);
};

setInterval(() => {
  render();
}, 1000);
