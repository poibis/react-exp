'use strict';

function FormattedDate(props) {
    return <h4 value={props.startnum}>[t]It is {props.dta.toLocaleTimeString()}. [s] {props.str} [n] {props.num} [f] {props.startnum} [o] {props.originnum}</h4>;
}


// class형 테스트
class Clock extends React.Component {
    constructor(props) {
        super(props);
        /* this.state = {
            posts: [],
            comments: []
        }; */
        this.state = {
            date : new Date(),
            str : 'strstr2',
            addCounter: 0,
            startnum : props.startnum
        };

        /* this.str = 'strstr1'; */
        this.minT = props.minS;
        this.maxT = props.maxS;
    }

    componentDidMount() {
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
        this.setState( (state,props)=> ({
            addCounter: Number(props.counter)
        }))
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getRandomInt( min, max ) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor( Math.random() * (max - min) ) + min;
    }


    tick() {
        this.setState((state, props)=> ({
            date: new Date(),
            string: this.state.str,
            randInt: this.getRandomInt(this.minT, this.maxT),
            startnum: Number(this.state.addCounter) + Number(state.startnum),
            originnum: Number(state.startnum)
        }));
    }

    render() {
        return (
            <div>
                <h4> hello, World!</h4>
                <FormattedDate dta={this.state.date} str={this.state.string} num={this.state.randInt} startnum={this.state.startnum} originnum={this.state.originnum}/>
                {/* <SquareBgcolour bgcolor={this.state.ttt} /> */}
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <Clock counter='1' startnum = '0' minS='1' maxS='10'/>
            <Clock counter='1' startnum = '1' minS='10' maxS='20'/>
            <Clock counter='1' startnum = '2' minS='100' maxS='300'/>
        </div>
    );
}




ReactDOM.createRoot(document.getElementById('state')).render(<App />);