'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Form() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('clicked pip');
    }

    return React.createElement(
        'form',
        { onSubmit: handleSubmit },
        React.createElement(
            'button',
            { type: 'submit', alt: 'sub' },
            'submit'
        ),
        React.createElement(ExtCmtForm, null)
    );
}

function ExtCmtForm() {
    return React.createElement(
        'div',
        { className: 'func_button fill', style: { border: "1px solid #EFEFEF", fontSize: "15px", textAlign: "center", width: "200px", height: "50px", lineHeight: "50px", margin: "auto", cursor: "pointer" } },
        React.createElement(
            'span',
            null,
            'func\uD615 \uCD94\uAC00 \uBB38\uAD6C in render'
        )
    );
}

// ReactDOM.createRoot(document.getElementById('event'), <Form />);

var Toggle = function (_React$Component) {
    _inherits(Toggle, _React$Component);

    function Toggle(props) {
        _classCallCheck(this, Toggle);

        var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

        _this.state = { isToggleOn: true };

        // 콜백에서 `this`가 작동하려면 아래 처럼 바인딩 해야 함.
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Toggle, [{
        key: 'handleClick',
        value: function handleClick() {
            this.setState(function (prevState) {
                return {
                    isToggleOn: !prevState.isToggleOn
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'func_button fill', style: { border: "1px solid #EFEFEF", fontSize: "15px", textAlign: "center", width: "280px", height: "50px", lineHeight: "50px", margin: "auto", cursor: "pointer" }, onClick: this.handleClick },
                React.createElement(
                    'span',
                    null,
                    'class\uD615 \uCD94\uAC00 \uBB38\uAD6C is toggle ready = ',
                    this.state.isToggleOn ? 'ON' : 'OFF'
                )
            );
        }
    }]);

    return Toggle;
}(React.Component);

ReactDOM.createRoot(document.getElementById('event')).render(React.createElement(Toggle, null));

var LogginButton = function (_React$Component2) {
    _inherits(LogginButton, _React$Component2);

    function LogginButton() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, LogginButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = LogginButton.__proto__ || Object.getPrototypeOf(LogginButton)).call.apply(_ref, [this].concat(args))), _this2), _this2.handleClick = function (id, e) {
            console.log(id);
            console.log(e);
            console.log('I clicked this\nparty \n', _this2);
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    // `this`가 handleClick 내에서 binding 되도록 함
    //  caution *experiment grammer *


    _createClass(LogginButton, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var id = 'df';
            return React.createElement(
                'button',
                { id: 'test', onClick: function onClick(e) {
                        return _this3.handleClick(id, e);
                    } },
                'loggin btn clicked me'
            );
        }
    }]);

    return LogginButton;
}(React.Component);

ReactDOM.createRoot(document.getElementById('event_p2')).render(React.createElement(LogginButton, null));