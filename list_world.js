'use strict';

function ListItem(props) {
    return React.createElement(
        'li',
        null,
        props.value
    );
}

function NumberList(props) {
    var numbers = props.arrNum;
    // 함수 추출 방식
    var reactDoubled = numbers.map(function (mapNumber, mapIndex, mapSource) {
        return React.createElement(ListItem, { key: mapNumber.toString(), value: mapNumber });
    });

    return React.createElement(
        'ul',
        null,
        numbers.map(function (number) {
            return React.createElement(ListItem, { key: number.toString(), value: number });
        })
    );
}

var numbers = [1, 2, 3, 4, 5];
ReactDOM.createRoot(document.getElementById('list')).render(React.createElement(NumberList, { arrNum: numbers }));

/** 
 * TODO key setting
*/

function Post(props) {
    return React.createElement(
        'div',
        { key: props.id },
        React.createElement(
            'h4',
            null,
            props.title
        ),
        React.createElement(
            'p',
            null,
            props.content
        )
    );
}

function Blog(props) {
    var sidebar = React.createElement(
        'ul',
        null,
        props.posts.map(function (post) {
            return React.createElement(
                'li',
                { key: post.id },
                post.title
            );
        })
    );

    var contents = props.posts.map(function (post) {
        return React.createElement(Post, { key: post.id, id: post.id, title: post.title, content: post.content });
    });

    return React.createElement(
        'div',
        null,
        sidebar,
        React.createElement(
            'div',
            { style: { border: '1px solid #AAAAAA' } },
            '\xA0'
        ),
        contents
    );
}

var posts = [{ id: 1, title: 'Hello World', content: 'Welcome to learning React!!!!!!' }, { id: 2, title: 'Installation', content: 'You can install React from npm.' }];
ReactDOM.createRoot(document.getElementById('list_s2')).render(React.createElement(Blog, { posts: posts }));