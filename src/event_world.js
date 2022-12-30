'use strict';

function Form() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('clicked pip');
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" alt="sub">submit</button>
            <ExtCmtForm />
        </form>
    )
}

function ExtCmtForm() {
    return (
        <div className="func_button fill" style={{border: "1px solid #EFEFEF", fontSize: "15px", textAlign: "center", width: "200px", height: "50px", lineHeight: "50px", margin: "auto", cursor: "pointer" }}><span>func형 추가 문구 in render</span></div>
    )
}

// ReactDOM.createRoot(document.getElementById('event'), <Form />);
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn : true};

        // 콜백에서 `this`가 작동하려면 아래 처럼 바인딩 해야 함.
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div className="func_button fill" style={{border: "1px solid #EFEFEF", fontSize: "15px", textAlign: "center", width: "280px", height: "50px", lineHeight: "50px", margin: "auto", cursor: "pointer" }} onClick={this.handleClick}><span>class형 추가 문구 is toggle ready = {this.state.isToggleOn ? 'ON' : 'OFF'}</span></div>
        )
    }
}
ReactDOM.createRoot(document.getElementById('event')).render( <Toggle /> );

class LogginButton extends React.Component {

    // `this`가 handleClick 내에서 binding 되도록 함
    //  caution *experiment grammer *
    handleClick = (id, e) => {
        console.log(id);
        console.log(e);
        console.log(`I clicked this
party 
`, this);
    }
    render() {
        
        const id = 'df';
        return (
            <button id='test' onClick={ (e) => this.handleClick(id, e)}>
                loggin btn clicked me
            </button>
        )
    }

}

ReactDOM.createRoot(document.getElementById('event_p2')).render(<LogginButton />);
