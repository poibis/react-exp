'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function FancyBorder(props) {
    /* console.log(props);
    console.log(props.children[0]);
    console.log(props.children[0].ref);
    console.log(props.children[0]._owner); */

    return React.createElement(
        'div',
        { className: 'FancyBorder FancyBorder-' + props.colour, style: { border: '3px solid blue' } },
        props.children
    );
}

function Dialog(props) {
    return React.createElement(
        FancyBorder,
        { colour: 'blue' },
        React.createElement(
            'h3',
            { className: 'Dialog-title' },
            props.title
        ),
        React.createElement(
            'p',
            { className: 'Dialog-message' },
            props.message
        ),
        props.children
    );
}

function WelcomeDialog() {
    return React.createElement(Dialog, {
        title: 'Welcome',
        message: 'Thank you for visiting our spacecraft!'
    });
}
//ReactDOM.createRoot(document.getElementById("composition")).render(<WelcomeDialog/>);


var SignUpDialog = function (_React$Component) {
    _inherits(SignUpDialog, _React$Component);

    function SignUpDialog(props) {
        _classCallCheck(this, SignUpDialog);

        var _this = _possibleConstructorReturn(this, (SignUpDialog.__proto__ || Object.getPrototypeOf(SignUpDialog)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSignUp = _this.handleSignUp.bind(_this);
        _this.state = { login: '' };

        return _this;
    }

    _createClass(SignUpDialog, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ login: e.target.value });
        }
    }, {
        key: 'handleSignUp',
        value: function handleSignUp(e) {
            alert('Welcome aboard, ' + this.state.login + '!');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                Dialog,
                { title: 'Mars Exploration Program',
                    message: 'How should we refer to you??' },
                React.createElement('input', { value: this.state.login,
                    onChange: this.handleChange }),
                React.createElement(
                    'button',
                    { onClick: this.handleSignUp },
                    'Sign up ~'
                )
            );
        }
    }]);

    return SignUpDialog;
}(React.Component);

ReactDOM.createRoot(document.getElementById("composition")).render(React.createElement(SignUpDialog, null));

// 
// 
// 
// 

function SplitPane(props) {
    return React.createElement(
        'div',
        { className: 'SplitPane' },
        React.createElement(
            'div',
            { className: 'SplitPane-left' },
            props.left
        ),
        React.createElement(
            'div',
            { className: 'SplitPane-right' },
            props.right
        )
    );
}

function Contents() {
    return React.createElement('div', { className: 'Contents', style: { backgroundColor: 'lightblue', width: '300px', height: '200px' } });
}

function Chat() {
    return React.createElement('div', { className: 'Chat', style: { backgroundColor: 'pink', width: '300px', height: '200px' } });
}

function Sapp() {
    return React.createElement(SplitPane, {
        left: React.createElement(Contents, null),
        right: React.createElement(Chat, null)
    });
}

ReactDOM.createRoot(document.getElementById("composition_s2")).render(React.createElement(Sapp, null));