'use strict';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mit_txt: '',
            mit_txtarea: '',
            mit_select: '',
            mit_chk1: '',
            mit_chk2: '',
            c1: '',
            c2: '',
            submitted: 'data'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //console.log(event);
        const target = event.target;
        let name = target.name;
        let value = "";
        if(target.type === "checkbox") {
            value = target.checked;

        } else if (target.type === "radio") {
            // init
            this.setState( {c1: false, c2: false});
            value = target.checked;
            name = target.id;

        } else {
            value = target.value;
        }
        //console.log(name);
        this.setState( {[name]: value});
    }

    handleSubmit(event) {
        alert('name was submitted :' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <form name="form_txt" onSubmit={this.handleSubmit}>
                <label>
                    <br></br>
                    <input type="text" name="mit_txt" value={this.state.mit_txt} onChange={this.handleChange} /><br></br>
                    <textarea name="mit_txtarea" value={this.state.mit_txtarea} onChange={this.handleChange} /><br></br>
                    <select name="mit_select" value={this.state.mit_select} onChange={this.handleChange}>
                        <option value="grapefruit">grapefruit</option>
                        <option value="dragonfruit">dragonfruit</option>
                        <option value="applefruit">applefruit</option>
                    </select>
                    <br></br>
                    <input type="checkbox" id="mit_chk1" name="mit_chk1" checked={this.state.mit_chk1} onChange={this.handleChange}/>
                    <label htmlFor="mit_chk1">mit_chk1</label>
                    <input type="checkbox" id="mit_chk2" name="mit_chk2" checked={this.state.mit_chk2} onChange={this.handleChange}/>
                    <label htmlFor="mit_chk2">mit_chk2</label>
                    <br></br>
                    <input type="radio" id="c1" name="mit_radio" checked={this.state.c1} onChange={this.handleChange}/>
                    <label htmlFor="c1">C1</label>
                    <input type="radio" id="c2" name="mit_radio" checked={this.state.c2} onChange={this.handleChange}/>
                    <label htmlFor="c2">C2</label>
                    <br></br>
                </label>
                <input type="submit" value="submit data" />
            </form>
        );
    }
}

ReactDOM.createRoot(document.getElementById('form')).render(<NameForm />);