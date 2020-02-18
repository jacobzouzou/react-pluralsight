var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var testData = [{
    key: 1,
    name: "Jacob DURANT",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "ISI"
}, {
    key: 2,
    name: "Sophie ALBERT",
    avatar_url: "https://avatars0.githubusercontent.com/u/6820?v=4",
    company: "Microsoft"
}, {
    key: 3,
    name: "Pat DJAHA",
    avatar_url: "https://avatars0.githubusercontent.com/u/63648?v=4",
    company: "Facebook"
}];

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Form);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            userName: ''
        }, _this.handleSubmit = function (event) {
            event.preventDefault();
            console.log(_this.state.userName);
            axios.get("https://api.github.com/users/" + _this.state.userName).then(function (resp) {
                _this.props.onSubmit(resp.data);
                _this.setState({ userName: '' });
            });
            // console.log(
            //     this.userNameImput.current.value
            // )
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    // userNameImput=React.createRef(); 

    _createClass(Form, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "form",
                { onSubmit: this.handleSubmit, className: "myform" },
                React.createElement("input", { type: "text",
                    value: this.state.userName,
                    onChange: function onChange(event) {
                        return _this2.setState({ userName: event.target.value });
                    },
                    placeholder: "Github username", required: true }),
                React.createElement(
                    "button",
                    null,
                    " Add Card"
                )
            );
        }
    }]);

    return Form;
}(React.Component);

var CardList = function CardList(props) {
    return React.createElement(
        "div",
        null,
        props.profiles.map(function (profile) {
            return React.createElement(Card, Object.assign({ key: profile.id }, profile));
        })
    );
};

var Card = function (_React$Component2) {
    _inherits(Card, _React$Component2);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: "render",
        value: function render() {
            var profile = this.props;
            return React.createElement(
                "div",
                null,
                React.createElement("img", { className: "card", src: profile.avatar_url }),
                React.createElement(
                    "div",
                    { className: "info", style: { display: 'inline-block', marginLeft: 10 } },
                    React.createElement(
                        "div",
                        { className: "name", style: { fontSize: '125%' } },
                        profile.name
                    ),
                    React.createElement(
                        "div",
                        { className: "company" },
                        profile.company
                    )
                )
            );
        }
    }]);

    return Card;
}(React.Component);

//root component


var App = function (_React$Component3) {
    _inherits(App, _React$Component3);

    function App() {
        var _ref2;

        var _temp2, _this4, _ret2;

        _classCallCheck(this, App);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, (_ref2 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref2, [this].concat(args))), _this4), _this4.state = {
            profiles: []
        }, _this4.addNewProfile = function (profileData) {
            _this4.setState(function (prevState) {
                return { profiles: [].concat(_toConsumableArray(prevState.profiles), [profileData]) };
            });
            console.log('App', profileData);
        }, _temp2), _possibleConstructorReturn(_this4, _ret2);
    }
    //each class component must have a render fonction


    _createClass(App, [{
        key: "render",
        value: function render() {
            //return virtual DOM
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "header", style: { fontSize: '200%', color: Math.random() < 0.5 ? 'green' : 'red' } },
                    this.props.title
                ),
                React.createElement(Form, { onSubmit: this.addNewProfile }),
                React.createElement(CardList, { profiles: this.state.profiles })
            );
        }
    }]);

    return App;
}(React.Component);

//display

ReactDOM.render(React.createElement(App, { title: "GitHub Cards App" }), mountNode);