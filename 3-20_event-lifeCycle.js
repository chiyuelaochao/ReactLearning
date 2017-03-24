/**
 * React component repeat using
 */

class ChildText extends React.Component {
    render() {
        return <p>
            Hello <b>React!</b>
        </p>
    }
}

class WrapperText extends React.Component {
    render() {
        return <div>
            /*note: Parent components must contain child components here. for example:
            It's wrong if you add a child component with label of 'div' into a parent component with label of 'p'.*/
            <ChildText></ChildText>
            <span>Cai Wei</span>
        </div>
    }
}
ReactDOM.render(<WrapperText></WrapperText>, document.getElementById("div1"));


/**
 * a simple case: show like/dislike when you click the button
 */
var LikeText = React.createClass({
    /*set the default value of the component*/
    getInitialState: function () {
        return {
            isLike: false
        }
    },
    /*click event of the button*/
    onTextClick: function () {
        /*set the new value to the state of the component
         then the component will be re-rendered automatically. */
        this.setState({isLike: !this.state.isLike});
    },

    render: function () {
        let text = this.state.isLike ? 'like' : 'dislike';
        return <div>
            <p>You {text} me.</p>
            <button onClick={this.onTextClick}>click me</button>
        </div>
    }
});
ReactDOM.render(<LikeText/>, document.getElementById("div2"));


/**
 * another simple case: text observer
 */
let TextComponent = React.createClass({
    getDefaultProps: function () {
        return {
            text: 'Cai Wei'
        }
    },
    render: function () {
        return <p>Hello <b>{this.props.text}</b>!</p>
    },
});

let ObserverComponent = React.createClass({
    getInitialState: function () {
        return {
            value: 'Wade'
        }
    },
    onTextChange: function (event) {
        this.setState({value: event.target.value});
    },

    render: function () {
        return <div>
            /*you can transfer value to child component in this way.(props)*/
            <TextComponent text={this.state.value}></TextComponent>
            <input type="text" onChange={this.onTextChange} defaultValue="Please input here!"/>
        </div>
    }
});
ReactDOM.render(<ObserverComponent/>, document.getElementById("div3"));


/**
 * the life cycle of component
 */
let LifeCycleComponent = React.createClass({
    //just running one time when the component is instantiated，return the props of the object
    getDefaultProps: function () {
        console.log("getDefaultProps");
        return {name: 'null'};
    },


    //as the instant of the component, just running one time when the component is instantiated，return the state of the object
    getInitialState: function () {
        console.log("getInitialState");
        return {count: 0};
    },

    //just running one time before the component is rendered
    componentWillMount: function () {
        console.log("componentWillMount");
    },

    // required method for creating the virtual DOM.
    // can only access data via this.props and this.state.
    // can return null, false, or any React component, except array.
    // can only return one top-level component.
    // Can not change the state of the component or modify the DOM output
    render: () => {
        console.log("render");
        return <div>MyComponent</div>;
    },

    //just running one time when the component is rendered the first time,
    //you can use this.getDOMNode() function to find the real DOM element.
    componentDidMount: function () {
        console.log("componentDidMount");
    },

    // running when component receive the new props and be used as the 'nextProps' parameter.
    componentWillReceiveProps: function (nextProps) {
        console.log("componentWillReceiveProps");
    },

    // Whether the component should render the new props or state
    // Returns false represent skipping the subsequent lifecycle method
    // usually do not be used to avoid bugs.
    shouldComponentUpdate: function () {
        console.log("shouldComponentUpdate");
        return true;
    },

    //running before receiving the new props or state and rendering.
    componentWillUpdate: function () {
        console.log("componentWillUpdate");
    },

    //running after new props or state been rendered, you can find the new DOM element now.
    componentDidUpdate: function () {
        console.log("componentWillUpdate");
    },

    //running before the component be destroyed, you can do some clearing work here.
    componentWillUnmount: function () {
        console.log("componentWillUnmount");
    }

});


ReactDOM.render(<LifeCycleComponent/>, document.getElementById("div4"));