'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function BoilngVerdict(props) {
    var boilFlag = "YET";
    boilFlag = props.temperature >= 100 ? "OVER" : "YET";

    if (boilFlag === "OVER") {
        return React.createElement(
            "p",
            null,
            "The water would boil."
        );
    } else {
        return React.createElement(
            "p",
            null,
            "The water wouldn't boil."
        );
    }
}

var scaleNames = {
    c: "Celsius",
    f: "fahrenheit"
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFarenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function tryConvert(temperature, convert) {
    var input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    var output = convert(input);
    var rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

var Calculator = function (_React$Component) {
    _inherits(Calculator, _React$Component);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this.handleCelsiusChange = _this.handleCelsiusChange.bind(_this);
        _this.handleFarenheitChange = _this.handleFarenheitChange.bind(_this);
        _this.state = { temperature: '', scale: 'c' };
        return _this;
    }

    _createClass(Calculator, [{
        key: "handleCelsiusChange",
        value: function handleCelsiusChange(temperature) {
            this.setState({ scale: 'c', temperature: temperature });
        }
    }, {
        key: "handleFarenheitChange",
        value: function handleFarenheitChange(temperature) {
            this.setState({ scale: 'f', temperature: temperature });
        }
    }, {
        key: "render",
        value: function render() {
            var scale = this.state.scale;
            var temperature = this.state.temperature;
            var celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
            var fahrenheit = scale === 'c' ? tryConvert(temperature, toFarenheit) : temperature;
            //console.log(scale + celsius);

            return React.createElement(
                "div",
                null,
                React.createElement(TemperatureInput, { scale: "c", temperature: celsius, onTemperatureChange: this.handleCelsiusChange }),
                React.createElement(TemperatureInput, { scale: "f", temperature: fahrenheit, onTemperatureChange: this.handleFarenheitChange }),
                React.createElement(BoilngVerdict, {
                    temperature: parseFloat(celsius)
                })
            );
        }
    }]);

    return Calculator;
}(React.Component);

var TemperatureInput = function (_React$Component2) {
    _inherits(TemperatureInput, _React$Component2);

    function TemperatureInput(props) {
        _classCallCheck(this, TemperatureInput);

        var _this2 = _possibleConstructorReturn(this, (TemperatureInput.__proto__ || Object.getPrototypeOf(TemperatureInput)).call(this, props));

        _this2.handleChange = _this2.handleChange.bind(_this2);
        _this2.state = { temperature: '' };
        return _this2;
    }

    _createClass(TemperatureInput, [{
        key: "handleChange",
        value: function handleChange(e) {
            //this.setState({temperature: e.target.value});
            this.props.onTemperatureChange(e.target.value);
        }
    }, {
        key: "render",
        value: function render() {
            var temperature = this.props.temperature;
            var scale = this.props.scale;
            return React.createElement(
                "fieldset",
                null,
                React.createElement(
                    "legend",
                    null,
                    "Enter temperature in ",
                    scaleNames[scale]
                ),
                React.createElement("input", {
                    value: temperature,
                    onChange: this.handleChange })
            );
        }
    }]);

    return TemperatureInput;
}(React.Component);

ReactDOM.createRoot(document.getElementById('upstate')).render(React.createElement(Calculator, null));