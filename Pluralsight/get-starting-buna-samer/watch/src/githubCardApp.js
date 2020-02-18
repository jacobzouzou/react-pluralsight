const testData = [
    {
        key: 1,
        name: "Jacob DURANT",
        avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
        company: "ISI"
    },
    {
        key: 2,
        name: "Sophie ALBERT",
        avatar_url: "https://avatars0.githubusercontent.com/u/6820?v=4",
        company: "Microsoft"
    },
    {
        key: 3,
        name: "Pat DJAHA",
        avatar_url: "https://avatars0.githubusercontent.com/u/63648?v=4",
        company: "Facebook"
    }
];

class Form extends React.Component {

    state = {
        userName: ''
    };
    // userNameImput=React.createRef(); 

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userName);
        axios.get(`https://api.github.com/users/${this.state.userName}`).
         then((resp) => {
             this.props.onSubmit(resp.data);
             this.setState({userName:''});
         });
        // console.log(
        //     this.userNameImput.current.value
        // )
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="myform">
                <input type="text"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    placeholder="Github username" required />
                {/* <input type="text" placeholder="Github username" ref={this.userNameImput}  required/> */}
                <button> Add Card</button>
            </form>
        );
    };
}

const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile}></Card>)}
    </div>
);
class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div>
                <img className="card" src={profile.avatar_url} />
                <div className="info" style={{ display: 'inline-block', marginLeft: 10 }}>
                    <div className="name" style={{ fontSize: '125%' }}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

//root component
class App extends React.Component {
    //each class component must have a render fonction
    state = {
        profiles: [],
    }
    addNewProfile= (profileData)=>{
        this.setState(prevState=>(

            { profiles:[...prevState.profiles,profileData]}
        ));
        console.log('App', profileData);
    };
    render() {
        //return virtual DOM
        return (
            <div>
                <div className="header" style={{ fontSize: '200%', color: Math.random() < 0.5 ? 'green' : 'red' }}>{this.props.title}</div>
                <Form onSubmit={this.addNewProfile} />
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }
}

//display

ReactDOM.render(
    <App title="GitHub Cards App" />,
    mountNode
);

