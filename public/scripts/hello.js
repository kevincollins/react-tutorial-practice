/**
 *
 * 1. 演示了  DIV 与 INPUT 中数据如何绑定
 * 2. 演示了  props 的使用及原理
 *
 *
 */


var HelloWorld = React.createClass({

  getInitialState: function() {
    return {username: 'kevin', text: ''};
  },

  handleTextChange: function(e) {

    let currentUsername = e.target.value;
    if(currentUsername==null ||currentUsername==''){
      currentUsername='kevin';
    }
    this.setState({username: currentUsername});
  },

  render: function() {
    return (
      <div>
        <input type="text" placeholder="enter your name here" onChange={this.handleTextChange} />

        Hello, {this.state.username}.
        <p>
        current Time: {this.props.date1.toTimeString()}
        </p>
      </div>
    );
  }
});


setInterval(function() {
  ReactDOM.render(
    <HelloWorld date1={new Date()} />,
    document.getElementById('content')
  );
}, 1000);
