/**
 * Created by wei.cai on 2017/3/22.
 */

/*
 class ChildText extends React.Component {
 render() {
 return <p>
 Hello <h1>React!</h1>
 </p>
 }
 }

 class WrapperText extends React.Component {
 render() {
 return <div>
 <ChildText/>
 I am Wrapper Text!
 </div>
 }
 }

 ReactDOM.render(<WrapperText />, document.getElementById("example"));*/

var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

// tutorial4.js
let Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
});

// tutorial2.js
let CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>
            </div>
        );
    }
});

let CommentForm = React.createClass({
    render: function () {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});

let CommentBox = React.createClass({
    displayName: 'commentBox',
    render: function () {
        return (
            // React.createElement('div', {className: "commentBox"},
            //     "Hello, react! I am a comment box."
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data}/>
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);