'use strict';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};

    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        //console.log(isLoggedIn);
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

function LogoutButton(props) {
    //console.log(props);
    return <input type='button' value="logout button" onClick={props.onClick} />;
}

function LoginButton(props) {
    //console.log(props);
    return <input type='button' value="login button" onClick={props.onClick} />;
}


function UserGreeting(props) {
    return <h4>Welcome back!</h4>;
}

function GuestGreeting(props) {
    return <h4>Please sign to get it all</h4>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn) {
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }
}

ReactDOM.createRoot(document.getElementById('condition2')).render(<LoginControl />);


function MailBox(props) {
    //console.log(props);
    const unreadMessages = props.unMsg;
    const rows = [];
    for(let i=0; i< unreadMessages.length; i++) {
        rows.push(<div key={i} style={ {backgroundColor:'#ccde88', width:'150px', marginTop:'5px' }}><span className="blink" style={{marginLeft:'5px', marginRight:'5px', color:'#ff99dc'}}>N</span> {unreadMessages[i]}</div>);
    }
    return (
        <div>
            <h4>hello!</h4>
            {unreadMessages.length > 0 &&
                <h2>
                    you have {unreadMessages.length} unread messages. 
                </h2>
            }
            {rows}

        </div>
        
    );
}
const messages = ['React', 'Re: React', 'Re:Re: React', 'test'];
ReactDOM.createRoot(document.getElementById('condition3')).render( <MailBox unMsg={messages} />);

function WarningBanner(props) {
    if(!props.warn) return null;

    return (
        <div className="warnnninnnng">
            warning flag
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.createRoot(document.getElementById('condition4')).render( <Page/> );