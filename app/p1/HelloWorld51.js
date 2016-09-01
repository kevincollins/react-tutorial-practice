/**
 *
 * 1. 演示了  DIV 与 INPUT 中数据如何绑定
 * 2. 演示了  state、props 的使用
 *
 *
 */

var HelloWorld51 = React.createClass({

    getInitialState: function () {
        return {username: 'kevin',currentDate:new Date()};
    },
    getDefaultProps: function () {
        return {username: 'defaultName', age: '20'};
    },

    statics: {
        print: function(msg) {
            console.log('the msg is: ' + msg);
        }
    },

    componentDidMount() {
        this.timer = setInterval(this.changeCurrentDate, 1000);
    },

    changeCurrentDate() {
        this.setState({
            currentDate: new Date(),
        });
    },

    handleTextChange: function (e) {

        let currentUsername = e.target.value;
        if (currentUsername == null || currentUsername == '') {
            currentUsername = 'kevin';
        }
        this.setState({username: currentUsername});
    },

    render: function () {
        return (
            <div>
                <input type="text" placeholder="enter your name here" onChange={this.handleTextChange}/>

                Hello, {this.state.username} and {this.props.username}.
                the age is {this.props.age}.
                <p>
                    current Time: {this.state.currentDate.toTimeString()}
                </p>
            </div>
        );
    },
});

HelloWorld51.print('dddddddd');

ReactDOM.render(
    <HelloWorld51 username="jack"/>,
    document.getElementById('content')
);
