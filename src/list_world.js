'use strict';

function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.arrNum;
    // 함수 추출 방식
    const reactDoubled = numbers.map( (mapNumber, mapIndex, mapSource) => 
        <ListItem key={mapNumber.toString()} value={mapNumber} />
    );

    return (
        <ul>
            {/* 함수형 방식*/}
            {/* {reactDoubled} */}

            {/* jsx input directly way*/}
            {numbers.map( (number) =>
                <ListItem key={number.toString()} value={number} />
            )}
        </ul>

    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.createRoot(document.getElementById('list')).render(<NumberList arrNum={numbers} />);

/** 
 * TODO key setting
*/

function Post(props) {
    return (
        <div key={props.id}>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    );
}

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map( (post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    const contents = props.posts.map( (post) =>
        <Post key={post.id} id={post.id} title={post.title} content={post.content}/>
    );

    return (
        <div>
            {sidebar}
            <div style={{border:'1px solid #AAAAAA'}}>&nbsp;</div>
            {contents}
        </div>
    );
}


const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!!!!!!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.createRoot(document.getElementById('list_s2')).render(<Blog posts={posts}/>);