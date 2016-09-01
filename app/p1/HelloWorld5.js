/**
 *使用 props 进行属性传递
 *
 */

var HelloWorld5 = React.createClass({

    render: function () {
        var style1 = { color: 'red'};
        var style2 = { color: 'black'};

        var {checked, ...other} = this.props;
        var clazz = checked ? style1 : style2;

        return (
            <div {...other} style={clazz}/>
        );
    }
});

function print() {
    console.log('xxxxxxxxxxxx'+new Date());
}

ReactDOM.render(
    <HelloWorld5 checked={false} onClick={print}>
        Hello world!
    </HelloWorld5>,
    document.getElementById('content')
);

