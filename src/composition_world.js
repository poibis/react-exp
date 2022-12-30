'use strict';

function FancyBorder(props) {
    /* console.log(props);
    console.log(props.children[0]);
    console.log(props.children[0].ref);
    console.log(props.children[0]._owner); */

    return (
        <div className={'FancyBorder FancyBorder-' + props.colour} style={{border:'3px solid blue'}}>
            {props.children}
        </div>
    );
}


function Dialog(props) {
    return (
        <FancyBorder colour="blue">
            <h3 className="Dialog-title">
                {props.title}
            </h3>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!"
        ></Dialog>
    );
}
//ReactDOM.createRoot(document.getElementById("composition")).render(<WelcomeDialog/>);


class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
        
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp(e) {
        alert(`Welcome aboard, ${this.state.login}!`);
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program"
                    message="How should we refer to you??">
                <input value={this.state.login}
                        onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>
                    Sign up ~
                </button>
            </Dialog>
        );
    }
}

ReactDOM.createRoot(document.getElementById("composition")).render(<SignUpDialog/>);

// 
// 
// 
// 

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function Contents() {
    return <div className="Contents" style={{backgroundColor:'lightblue',width:'300px',height:'200px'}}/>;
  }
  
  function Chat() {
    return <div className="Chat" style={{backgroundColor:'pink',width:'300px',height:'200px'}}/>;
  }


function Sapp() {
    return (
        <SplitPane
            left={<Contents/>}
            right={<Chat/>}
        />
    );
}

ReactDOM.createRoot(document.getElementById("composition_s2")).render(<Sapp/>);