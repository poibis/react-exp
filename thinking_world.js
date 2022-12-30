'use strict';

//ReactDOM.createRoot(document.getElementById('thinking')).render(<ShowData />);

// without data architecture component


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
    _inherits(SearchBar, _React$Component);

    function SearchBar(props) {
        _classCallCheck(this, SearchBar);

        var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.inputChange = _this.inputChange.bind(_this);
        _this.setState = { propStocked: 0 };

        return _this;
    }

    _createClass(SearchBar, [{
        key: 'handleChange',
        value: function handleChange(e) {
            if (e.target.checked == true) {
                this.props.onStockChange(1);
            } else {
                this.props.onStockChange(0);
            }
        }
    }, {
        key: 'inputChange',
        value: function inputChange(e) {
            this.props.onKeyword(e.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { style: { border: '1px solid #00a2ff' } },
                React.createElement('input', { type: 'text', placeholder: 'Search....', onChange: this.inputChange }),
                React.createElement('br', null),
                React.createElement('input', { type: 'checkbox', id: 'stockF', name: 'stockF', onChange: this.handleChange }),
                React.createElement(
                    'label',
                    { htmlFor: 'stockF', style: { color: '#00a2ff' } },
                    'Only Show products in stock'
                )
            );
        }
    }]);

    return SearchBar;
}(React.Component);

function MockUpData(props) {
    var listArr = props.mockuplist;
    if (listArr.length < 1) {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'mockup-category' },
                props.category
            ),
            React.createElement(
                'div',
                { className: 'mockup-list', style: { color: '#00ffaa' } },
                ' No result.'
            )
        );
    } else {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'mockup-category' },
                props.category
            ),
            listArr.map(function (item, index) {
                return React.createElement(
                    'div',
                    { className: 'mockup-list', key: index },
                    item
                );
            })
        );
    }
}

function getHighlight(txt, key, fl) {
    if (fl === 'y') {
        var regex = new RegExp(key, 'gi');
        var regexArray = void 0,
            finalCword = void 0,
            rtd = void 0;

        while ((regexArray = regex.exec(txt)) !== null) {
            finalCword = regexArray[0];
        }

        rtd = txt.replace(regex, "<span class='hightlight'>" + finalCword + "</span>");
        return { __html: rtd };
    } else {
        return { __html: txt };
    }
}

function MockUpList(props) {
    var mockupCategory = new Array();
    var mockupList = new Array();
    var mockupView = new Array();
    var stockOptionFl = props.stocked === 1 ? 'y' : 'n';
    var keywordFl = props.keyword ? 'y' : 'n';
    var lowerKeyword = props.keyword.toLowerCase().replace(/(\s*)/g, "");

    props.dta.map(function (item, index) {
        mockupCategory.push(item.category);
        // indexOf 는 존재하면 0 이상
        // includes는 존재하면 true / false

        var callName = item.name;
        var setName = callName.toLowerCase().replace(/(\s*)/g, "");
        if ((stockOptionFl !== 'y' || stockOptionFl == 'y' && props.stocked == item.stocked) && (keywordFl === 'n' || keywordFl === 'y' && setName.includes(lowerKeyword) == true)) {
            /* console.log(itemName.includes(props.keyword) + ' and '+ keywordFl); */

            if (keywordFl === 'y' && setName.includes(lowerKeyword) == true) {
                callName = getHighlight(item.name, lowerKeyword, 'y');
            } else {
                callName = getHighlight(item.name, lowerKeyword, 'n');
            }
            mockupList.push(React.createElement(
                'div',
                { className: 'mockup-dta', key: item.index, cate: item.category, stocked: item.stocked },
                React.createElement('div', { className: 'mockup-title-name', dangerouslySetInnerHTML: callName }),
                React.createElement(
                    'div',
                    { className: 'mockup-title-price' },
                    item.price
                )
            ));
        }
    });
    mockupCategory = [].concat(_toConsumableArray(new Set(mockupCategory)));

    return React.createElement(
        'div',
        null,
        mockupCategory.map(function (item, index) {
            return mockupView = mockupList.filter(function (number, index, source) {
                return number.props.cate == item ? true : false;
            }), React.createElement(MockUpData, { key: index, category: item, mockuplist: mockupView });
        })
    );
}

function MockUpBar(props) {

    return React.createElement(
        'div',
        { style: { border: '1px solid #00cf58', textAlign: 'left', paddingLeft: '15px' } },
        props.children,
        React.createElement(MockUpList, { dta: props.dta, stocked: props.stocked, keyword: props.keyword })
    );
}

var MockUp = function (_React$Component2) {
    _inherits(MockUp, _React$Component2);

    function MockUp(props) {
        _classCallCheck(this, MockUp);

        var _this2 = _possibleConstructorReturn(this, (MockUp.__proto__ || Object.getPrototypeOf(MockUp)).call(this, props));

        _this2.stockChange = _this2.stockChange.bind(_this2);
        _this2.keyword = _this2.keyword.bind(_this2);
        _this2.state = {
            dta: '',
            propStocked: 0,
            propKeyword: ''
        };

        return _this2;
    }

    _createClass(MockUp, [{
        key: 'stockChange',
        value: function stockChange(stock) {
            this.setState({ propStocked: stock });
        }
    }, {
        key: 'keyword',
        value: function keyword(word) {
            this.setState({ propKeyword: word });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            var dta_option = new Object();
            dta_option.method = "GET";
            dta_option.headers = {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            };
            dta_option.type = "XML";
            var url = "https://www.jswjake.space/tutorial/t2/api/think_mockup";

            var dtaF = function dtaF(url, dta_option) {
                fetch(url, dta_option).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    /* data && data.map( (item, index) => {
                     }); */
                    _this3.setState({ dta: data });
                }).catch(function (error) {
                    return console.log("error:", error);
                });
            };
            dtaF(url, dta_option);
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.dta) {
                return React.createElement(
                    'div',
                    { style: { width: '250px', heihgt: '600px', margin: '50px auto 100px auto', textAlign: 'center' } },
                    React.createElement(SearchBar, { onStockChange: this.stockChange, onKeyword: this.keyword }),
                    React.createElement(
                        MockUpBar,
                        { dta: this.state.dta, stocked: this.state.propStocked, keyword: this.state.propKeyword },
                        React.createElement(
                            'div',
                            { className: 'mockup-title' },
                            React.createElement(
                                'div',
                                { className: 'mockup-title-name' },
                                'Name'
                            ),
                            React.createElement(
                                'div',
                                { className: 'mockup-title-price' },
                                'Price'
                            )
                        )
                    )
                );
            }
        }
    }]);

    return MockUp;
}(React.Component);

ReactDOM.createRoot(document.getElementById('thinking2')).render(React.createElement(MockUp, null));

// without data architecture component