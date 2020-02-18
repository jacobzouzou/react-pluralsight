//this script not use JSX
const jsTarget=document.getElementById("dateJs");
const reactTarget= document.getElementById("dateReact"); 

const render=()=>{
    //display js element
    jsTarget.innerHTML=`
    <div class="split">
        JS Template
        <input/>
        <p>${new Date()}</p>
    </div>   
     `;

     const reactDiv= React.createElement(
        "div",
        {className: "split" },
        "React Template",
        React.createElement("input"),
        React.createElement(
            "p",
            null,
            new Date().toString()
        )
    );
    //Display react element
    ReactDOM.render(reactDiv,reactTarget);
}

setInterval(() => {
    render();
}, 1000);

