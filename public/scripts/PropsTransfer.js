var FancyCheckbox = React.createClass({

    render: function () {
        var {checked, ...other} = this.props;
        var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';

        return (
            <div {...other} className={fancyClass}/>
        );
    }
});

function print() {
    console.log('xxxxxxxxxxxx'+new Date());
}

ReactDOM.render(
    <FancyCheckbox checked={true} onClick={print}>
        Hello world!
    </FancyCheckbox>,
    document.getElementById('content')
);

