'use strict';

//ReactDOM.createRoot(document.getElementById('thinking')).render(<ShowData />);

// without data architecture component



class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.setState = {propStocked: 0};

    }
    handleChange(e) {
        if(e.target.checked == true) {
            this.props.onStockChange(1);
        } else {
            this.props.onStockChange(0);
        }
    }
    
    inputChange(e) {
        this.props.onKeyword(e.target.value);
    }

    render() {
        return (
            <div style={{ border:'1px solid #00a2ff'}}>
                <input type="text" placeholder="Search...." onChange={this.inputChange} /><br></br>
                <input type="checkbox" id="stockF" name="stockF" onChange={this.handleChange}  />
                <label htmlFor="stockF" style={{color:'#00a2ff'}}>Only Show products in stock</label>
            </div>
            
        );
    }
}

function MockUpData(props) {
    const listArr = props.mockuplist;
    if(listArr.length < 1) {
        return(
            <div>
                <div className="mockup-category">{props.category}</div>
                <div className="mockup-list" style={{color:'#00ffaa'}}> No result.</div>
            </div>
            
        );
    } else {
        return(
            <div>
                <div className="mockup-category">{props.category}</div>
    
                {listArr.map( (item,index) => (
                    <div className="mockup-list" key={index}>
                        {item}
                    </div>
                ))}
    
            </div>
            
        );
    }
}

function getHighlight(txt, key, fl) {
    if(fl === 'y') {
        const regex = new RegExp(key,'gi');
        let regexArray, finalCword, rtd;
    
        while( (regexArray = regex.exec(txt)) !== null ) {
            finalCword = regexArray[0];
        }
    
        rtd = txt.replace(regex, "<span class='hightlight'>"+finalCword+"</span>");
        return {__html: rtd};

    } else {
        return {__html: txt};

    }
}

function MockUpList(props) {
    let mockupCategory = new Array();
    let mockupList = new Array();
    let mockupView = new Array();
    let stockOptionFl = props.stocked === 1 ? 'y' : 'n';
    let keywordFl = props.keyword ? 'y' : 'n';
    let lowerKeyword = props.keyword.toLowerCase().replace(/(\s*)/g, "");

    props.dta.map( (item, index) => {
        mockupCategory.push(item.category);
        // indexOf 는 존재하면 0 이상
        // includes는 존재하면 true / false

        let callName = item.name;
        const setName = callName.toLowerCase().replace(/(\s*)/g, "");
        if( (stockOptionFl !== 'y' || (stockOptionFl == 'y' && props.stocked == item.stocked)) && (keywordFl === 'n' || (keywordFl === 'y' && setName.includes(lowerKeyword) == true)) ) {
            /* console.log(itemName.includes(props.keyword) + ' and '+ keywordFl); */

            if(keywordFl === 'y' && setName.includes(lowerKeyword) == true) {
                callName = getHighlight(item.name, lowerKeyword, 'y');
            } else {
                callName = getHighlight(item.name, lowerKeyword, 'n');
            }
            mockupList.push(
                <div className="mockup-dta" key={item.index} cate={item.category} stocked={item.stocked}>
                    <div className="mockup-title-name" dangerouslySetInnerHTML={callName}></div>
                    <div className="mockup-title-price">{item.price}</div>
                </div>
            );
        }
    });
    mockupCategory = [...new Set(mockupCategory)];


    return (
        <div>
            {mockupCategory.map( (item, index) => (
                mockupView = mockupList.filter( (number, index, source) => {
                    return number.props.cate == item ? true : false;
                }),

                <MockUpData key={index} category={item} mockuplist={mockupView}></MockUpData>
            ) )}
        </div>
    );
}

function MockUpBar(props) {

    return (
        <div style={{ border:'1px solid #00cf58', textAlign:'left', paddingLeft:'15px' }}>
            {props.children}
            <MockUpList dta={props.dta} stocked={props.stocked} keyword={props.keyword}></MockUpList>
        </div>
    );
}

class MockUp extends React.Component {
    constructor(props) {
        super(props);
        this.stockChange = this.stockChange.bind(this);
        this.keyword = this.keyword.bind(this);
        this.state = {
            dta: '',
            propStocked: 0,
            propKeyword: ''
        }

    }

    stockChange(stock) {
        this.setState({ propStocked: stock });
    }

    keyword(word) {
        this.setState({ propKeyword: word});
    }


    componentDidMount() {
        const dta_option = new Object();
        dta_option.method = "GET";
        dta_option.headers = {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        };
        dta_option.type = "XML";
        const url = "https://www.jswjake.space/tutorial/t2/api/think_mockup";

        
        const dtaF = (url, dta_option)=> {
            fetch(url, dta_option)
            .then((response) => response.json())
            .then((data) => {
                /* data && data.map( (item, index) => {

                }); */
                this.setState({dta: data});
            })
            .catch( (error) => 
                console.log("error:", error),
            );
        }
        dtaF(url, dta_option);

    }

    render() {
        if(this.state.dta) {
            return (
                <div style={{width: '250px', heihgt: '600px', margin: '50px auto 100px auto', textAlign:'center'}}>
                    <SearchBar onStockChange={this.stockChange} onKeyword={this.keyword} ></SearchBar>
                    <MockUpBar dta={this.state.dta} stocked={this.state.propStocked} keyword={this.state.propKeyword}>
                        <div className="mockup-title">
                            <div className="mockup-title-name">Name</div>
                            <div className="mockup-title-price">Price</div>
                        </div>
                    </MockUpBar>
                </div>
            );
        }
    }


}

ReactDOM.createRoot(document.getElementById('thinking2')).render(<MockUp />);


// without data architecture component


