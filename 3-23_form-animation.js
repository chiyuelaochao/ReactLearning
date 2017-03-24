/**
 * get the child component's event
 */
var GenderSelect = React.createClass({
    render: function () {
        return (
            <select onChange={this.props.onGenderChange}>
                <option value="1">male</option>
                <option value="0">female</option>
            </select>
        )
    }
});

var IndexForm = React.createClass({
    getInitialState(){
        return {
            gender: 1,
            name: 'caiwei'
        }
    },
    onGenderSelectChange: function (genderEvent) {
        console.log(genderEvent.target.value);
        this.setState({gender: genderEvent.target.value});
    },

    onFormSubmit: function (formEvent) {
        // note: prevent the default submit act of the form
        formEvent.preventDefault();
        /*this.setState({name: this.ref.name_input.value});*/
        console.log(this.state);
        //or start an ajax request then handle data
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <GenderSelect onGenderChange={this.onGenderSelectChange}/>
                <br/>
                /*I got a question about the attribute of "ref" here, why there will be a tips of "ref is not allowed to use" when I
                add the attribute of "ref" in the input component?
                <input type="text" ref="name_input" defaultValue="name"/>*/
                <br/>
                <button type="submit">OK</button>
            </form>
        )
    }
});
ReactDOM.render(<IndexForm/>, document.getElementById("div1"));


/**
 * get the event of the components
 */
var FormComponent = React.createClass({
    getInitialState(){
        return {
            phone: '15979911440',
        }
    },
    onInputChange: function (inputEvent) {
        console.log(inputEvent.target.value);
        this.setState({phone: inputEvent.target.value})
    },
    onFormSubmit: function (formEvent) {
        formEvent.preventDefault();
        console.log(this.state);
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="number" onChange={this.onInputChange} defaultValue="123"/>
                <button type="submit">number ok</button>
            </form>
        )
    }
});
ReactDOM.render(<FormComponent/>, document.getElementById("div2"));


/**
 * get multiple form components event
 */
var MultipleFormComponent = React.createClass({
    getInitialState(){
        return {
            username: 'caiwei',
            gender: 1,
            agree: 1
        }
    },
    onFormSubmit: function (formEvent) {
        formEvent.preventDefault();
        console.log(this.state);
    },

    /*The first way to check the components' event*/
    /*<input id="username" onChange={this.onComponentChange.bind(this,'username')}/>
     onComponentChange: function (key, componentEvent) {
     console.log(key + "," + componentEvent.target.value);
     var obj = {};
     obj[key] = componentEvent.target.value;
     this.setState(obj);
     },*/

    /*The second way to check the components' event.*/
    onComponentChange: function (componentEvent) {
        console.log(componentEvent.target.id + "," + componentEvent.target.value);
        var obj = {};
        obj[componentEvent.target.id] = componentEvent.target.value;
        this.setState(obj);
    },

    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="username">Username:</label>
                <input id="username" onChange={this.onComponentChange}/>
                <br/>
                <label htmlFor="gender">Gender:</label>
                <select id="gender" onChange={this.onComponentChange}>
                    <option value="1">male</option>
                    <option value="0">female</option>
                </select>
                <br/>
                /*I got a question about the checkbox of input component, why the result is the same whether I change the value of the checkbox?*/
                <br/>
                <label htmlFor="agree">Agree:</label>
                <input id="agree" type="checkbox" onChange={this.onComponentChange}/>
                <br/>
                <button type="submit">submit data</button>
            </form>
        )
    }
});
ReactDOM.render(<MultipleFormComponent/>, document.getElementById("div3"));

/**
 * a simple animation
 */

var AnimationComponent = React.createClass({
        getDefaultProps(){
            console.log("life cycle:getDefaultProps");
            return {
                distance: 200, //the target value of the distance, you will find the benefit about the props.
                interval: 50
            }
        },
        getInitialState(){
            console.log("life cycle:getInitialState");
            return {
                distance: 1,
                status: 1
            }

        },
        render: function () {
            console.log("life cycle:render");
            let style = {
                color: 'yellow',
                marginLeft: this.state.distance,
            }
            return (
                <p style={style}>
                    There will be an animation here.
                </p>
            )
        },
        transformComponent: function () {
            console.log(this.state);
            /*let num = this.state.status === 1 ? ++this.state.distance : --this.state.distance;
            console.log(num);
            this.setState({distance: num})
            if (num = 200) {
                this.setState({status: 0})
            }
            if (num = 0) {
                this.setState({status: 1})
            }*/
            if(this.state.distance < this.props.distance){
                this.setState({
                    distance : ++this.state.distance
                });
            }else{
                clearInterval(this.timer);
            }
        },
        componentDidMount()   {
            console.log("life cycle:componentDidMount");
            this.timer = setInterval(this.transformComponent, this.props.interval);
            // clearInterval(this.timer); // This function clear interval.
        }
    })
    ;
ReactDOM.render(<AnimationComponent/>, document.getElementById("div4"));