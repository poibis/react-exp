'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function FormattedDate(props) {
    return React.createElement(
        'h4',
        { value: props.startnum },
        '[t]It is ',
        props.dta.toLocaleTimeString(),
        '. [s] ',
        props.str,
        ' [n] ',
        props.num,
        ' [f] ',
        props.startnum,
        ' [o] ',
        props.originnum
    );
}

// class형 테스트

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        /* this.state = {
            posts: [],
            comments: []
        }; */
        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = {
            date: new Date(),
            str: 'strstr2',
            addCounter: 0,
            startnum: props.startnum
        };

        /* this.str = 'strstr1'; */
        _this.minT = props.minS;
        _this.maxT = props.maxS;
        return _this;
    }

    _createClass(Clock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            /* fetchPosts().then(response => {
                this.setState({
                    posts: response.posts
                });
            });
            fetchComments().then(response => {
                this.setState({
                    comments:response.comments
                });
            }); */
            /* this.sCnt =  */
            this.setState(function (state, props) {
                return {
                    addCounter: Number(props.counter)
                };
            });
            this.timerID = setInterval(function () {
                return _this2.tick();
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timerID);
        }
    }, {
        key: 'getRandomInt',
        value: function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }, {
        key: 'tick',
        value: function tick() {
            var _this3 = this;

            this.setState(function (state, props) {
                return {
                    date: new Date(),
                    string: _this3.state.str,
                    randInt: _this3.getRandomInt(_this3.minT, _this3.maxT),
                    startnum: Number(_this3.state.addCounter) + Number(state.startnum),
                    originnum: Number(state.startnum)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h4',
                    null,
                    ' hello, World!'
                ),
                React.createElement(FormattedDate, { dta: this.state.date, str: this.state.string, num: this.state.randInt, startnum: this.state.startnum, originnum: this.state.originnum })
            );
        }
    }]);

    return Clock;
}(React.Component);

function App() {
    return React.createElement(
        'div',
        null,
        React.createElement(Clock, { counter: '1', startnum: '0', minS: '1', maxS: '10' }),
        React.createElement(Clock, { counter: '1', startnum: '1', minS: '10', maxS: '20' }),
        React.createElement(Clock, { counter: '1', startnum: '2', minS: '100', maxS: '300' })
    );
}

ReactDOM.createRoot(document.getElementById('state')).render(React.createElement(App, null));