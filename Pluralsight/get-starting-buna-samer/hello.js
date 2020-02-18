//Create function compoment
const Hello = ()=>{
    return (
        React.createElement("p",null,"Hello world !")
    );
}

//use function component 
ReactDOM.render(
    React.createElement(Hello,null),
    document.getElementById('mountnode')
);