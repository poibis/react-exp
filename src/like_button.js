'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { liked: false };
    console.log(`sadf DDD`+JSON.stringify(this.state));

  }

  render() {
    console.log(this.state.liked);
    /* if (this.state.liked) {
      return 'You liked this.';
    } */

    return (
      <button onClick={()=> this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
let root = ReactDOM.createRoot(domContainer);
root.render(LikeButton);