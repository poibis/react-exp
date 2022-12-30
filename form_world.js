'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NameForm = function (_React$Component) {
    _inherits(NameForm, _React$Component);

    function NameForm(props) {
        _classCallCheck(this, NameForm);

        var _this = _possibleConstructorReturn(this, (NameForm.__proto__ || Object.getPrototypeOf(NameForm)).call(this, props));

        _this.state = {
            mit_txt: '',
            mit_txtarea: '',
            mit_select: '',
            mit_chk1: '',
            mit_chk2: '',
            c1: '',
            c2: '',
            submitted: 'data'
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(NameForm, [{
        key: 'handleChange',
        value: function handleChange(event) {
            //console.log(event);
            var target = event.target;
            var name = target.name;
            var value = "";
            if (target.type === "checkbox") {
                value = target.checked;
            } else if (target.type === "radio") {
                // init
                this.setState({ c1: false, c2: false });
                value = target.checked;
                name = target.id;
            } else {
                value = target.value;
            }
            //console.log(name);
            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            alert('name was submitted :' + JSON.stringify(this.state));
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { name: 'form_txt', onSubmit: this.handleSubmit },
                React.createElement(
                    'label',
                    null,
                    React.createElement('br', null),
                    React.createElement('input', { type: 'text', name: 'mit_txt', value: this.state.mit_txt, onChange: this.handleChange }),
                    React.createElement('br', null),
                    React.createElement('textarea', { name: 'mit_txtarea', value: this.state.mit_txtarea, onChange: this.handleChange }),
                    React.createElement('br', null),
                    React.createElement(
                        'select',
                        { name: 'mit_select', value: this.state.mit_select, onChange: this.handleChange },
                        React.createElement(
                            'option',
                            { value: 'grapefruit' },
                            'grapefruit'
                        ),
                        React.createElement(
                            'option',
                            { value: 'dragonfruit' },
                            'dragonfruit'
                        ),
                        React.createElement(
                            'option',
                            { value: 'applefruit' },
                            'applefruit'
                        )
                    ),
                    React.createElement('br', null),
                    React.createElement('input', { type: 'checkbox', id: 'mit_chk1', name: 'mit_chk1', checked: this.state.mit_chk1, onChange: this.handleChange }),
                    React.createElement(
                        'label',
                        { htmlFor: 'mit_chk1' },
                        'mit_chk1'
                    ),
                    React.createElement('input', { type: 'checkbox', id: 'mit_chk2', name: 'mit_chk2', checked: this.state.mit_chk2, onChange: this.handleChange }),
                    React.createElement(
                        'label',
                        { htmlFor: 'mit_chk2' },
                        'mit_chk2'
                    ),
                    React.createElement('br', null),
                    React.createElement('input', { type: 'radio', id: 'c1', name: 'mit_radio', checked: this.state.c1, onChange: this.handleChange }),
                    React.createElement(
                        'label',
                        { htmlFor: 'c1' },
                        'C1'
                    ),
                    React.createElement('input', { type: 'radio', id: 'c2', name: 'mit_radio', checked: this.state.c2, onChange: this.handleChange }),
                    React.createElement(
                        'label',
                        { htmlFor: 'c2' },
                        'C2'
                    ),
                    React.createElement('br', null)
                ),
                React.createElement('input', { type: 'submit', value: 'submit data' })
            );
        }
    }]);

    return NameForm;
}(React.Component);

ReactDOM.createRoot(document.getElementById('form')).render(React.createElement(NameForm, null));