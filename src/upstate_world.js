'use strict';

function BoilngVerdict(props) {
    let boilFlag = "YET";
    boilFlag = props.temperature >= 100 ? "OVER" : "YET";

    if(boilFlag === "OVER") {
        return <p>The water would boil.</p>;
    } else {
        return <p>The water wouldn't boil.</p>;
    }
}

const scaleNames = {
    c: "Celsius",
    f: "fahrenheit"
}

function toCelsius(fahrenheit) {
    return (fahrenheit -32) * 5 / 9;
}

function toFarenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }
    handleCelsiusChange(temperature) {
        this.setState({scale:'c', temperature});
    }
    handleFarenheitChange(temperature) {
        this.setState({scale:'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFarenheit) : temperature;
        //console.log(scale + celsius);

        return (
            <div>
                <TemperatureInput scale='c' temperature = {celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale='f' temperature = {fahrenheit} onTemperatureChange={this.handleFarenheitChange}/>
                <BoilngVerdict
                    temperature={parseFloat(celsius)}
                />
                
            </div>
        );
    }
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        //this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

ReactDOM.createRoot(document.getElementById('upstate')).render(<Calculator />);