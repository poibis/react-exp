'use strict';

//const domContainer = document.querySelector('#root');

function formatName(user) {
    return user.firstName + ' vs ' + user.lastName;
}

/* function Welcome(props) {
    return <h1>props hello, function method {props.name}</h1>
} */
/**
 * * or ES6 class style is here
*/
class Welcome extends React.Component {
    render() {
        return <h1>props hello, class method {this.props.name}</h1>
    }
}


//const customElements = <Welcome name="Harry" class="roanClass"/>;


const user = {
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
    return (
        <div>
            <Welcome name="Harry" class="hClass"/>
            <Welcome name="Marry" class="mClass"/>
            <Welcome name="Carry" class="cClass"/>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('ele')).render(<App/>);
// 함수형 처리 방법
// **********************

// **********************
// 
const elements_ments = React.createElement(
    'h1',
    {className : 'greeting'},
    `Hel2lo, ${formatName(user)}!`
);

function Clocks(props) {
    return (
        <div>
            <h1>hello, this tick time {props.toString()}.</h1>
            <h2>It's changing every 2sec {props.toLocaleTimeString()}.</h2>
        </div>
    )
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
    
    const element = (
      <div>
        {elements_ments}
        {/* 클래스형 */}
        {/* {<Clocks />} */}
        {/* 함수형 */}
        {Clocks(new Date())}
      </div>
    );
    root.render(element);
}

/* ReactDOM.createRoot(document.getElementById('root')).render(tick2()); */

let root = ReactDOM.createRoot(document.getElementById('root'));
const timeId = setInterval( ()=> tick2(root),2000 );
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
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'comment text test props',
    author: {
        name: 'kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
}
//console.log(comment);

ReactDOM.createRoot( document.getElementById('comment') ).render( <Comment date={comment.date} text={comment.text} author={comment.author} /> );
// 
// **********************
