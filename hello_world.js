'use strict';

//const domContainer = document.querySelector('#root');

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function formatName(user) {
    return user.firstName + ' vs ' + user.lastName;
}

/* function Welcome(props) {
    return <h1>props hello, function method {props.name}</h1>
} */
/**
 * * or ES6 class style is here
*/

var Welcome = function (_React$Component) {
    _inherits(Welcome, _React$Component);

    function Welcome() {
        _classCallCheck(this, Welcome);

        return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
    }

    _createClass(Welcome, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'h1',
                null,
                'props hello, class method ',
                this.props.name
            );
        }
    }]);

    return Welcome;
}(React.Component);

//const customElements = <Welcome name="Harry" class="roanClass"/>;


var user = {
    firstName: 'Petter',
    lastName: 'johnson'
};

/* const elements_ments = (
    <h2>
    Hello, {formatName(user)}!
    </h2>
); */

/* const custom_ele = React.createElement(
    'Welcome',
    {className: 'Harry'}
); */

// **********************
// 함수형 처리 방법
function App() {
    return React.createElement(
        'div',
        null,
        React.createElement(Welcome, { name: 'Harry', 'class': 'hClass' }),
        React.createElement(Welcome, { name: 'Marry', 'class': 'mClass' }),
        React.createElement(Welcome, { name: 'Carry', 'class': 'cClass' })
    );
}

ReactDOM.createRoot(document.getElementById('ele')).render(React.createElement(App, null));
// 함수형 처리 방법
// **********************

// **********************
// 
var elements_ments = React.createElement('h1', { className: 'greeting' }, 'Hel2lo, ' + formatName(user) + '!');

function Clocks(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'hello, this tick time ',
            props.toString(),
            '.'
        ),
        React.createElement(
            'h2',
            null,
            'It\'s changing every 2sec ',
            props.toLocaleTimeString(),
            '.'
        )
    );
}
// **********************
// 클래스형 처리 방법
/* class Clocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>hello, this tick time</h1>
                <h2>It's {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
} */
// 클래스형 처리 방법
// **********************

function tick2(root) {

    var element = React.createElement(
        'div',
        null,
        elements_ments,
        Clocks(new Date())
    );
    root.render(element);
}

/* ReactDOM.createRoot(document.getElementById('root')).render(tick2()); */

var root = ReactDOM.createRoot(document.getElementById('root'));
var timeId = setInterval(function () {
    return tick2(root);
}, 2000);
/* const comment = {
    date: new Date(),
    text: 'comment text test props',
    author: {
        name: 'kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
} */

/* let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(timeId); */

/* const t1 = 'ttt';
const test = `testtest ${t1}`;
console.log(test); */

// **********************
// comment component test
function formatDate(date) {
    return date.toLocaleTimeString();
}

function Comment(props) {
    return React.createElement(
        'div',
        { className: 'Comment' },
        React.createElement(UserInfo, { user: props.author }),
        React.createElement(
            'div',
            { className: 'Comment-text' },
            props.text
        ),
        React.createElement(
            'div',
            { className: 'Comment-date' },
            formatDate(props.date)
        )
    );
}

function Avatar(props) {
    return React.createElement('img', { className: 'Avatar',
        src: props.user.avatarUrl,
        alt: props.user.name
    });
}

function UserInfo(props) {
    return React.createElement(
        'div',
        { className: 'UserInfo' },
        React.createElement(Avatar, { user: props.user }),
        React.createElement(
            'div',
            { className: 'UserInfo-name' },
            props.user.name
        )
    );
}

var comment = {
    date: new Date(),
    text: 'comment text test props',
    author: {
        name: 'kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
    //console.log(comment);

};ReactDOM.createRoot(document.getElementById('comment')).render(React.createElement(Comment, { date: comment.date, text: comment.text, author: comment.author }));
// 
// **********************