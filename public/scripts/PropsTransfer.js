
function FancyCheckbox(props) {
  var { checked, ...other } = props;
    console.log(checked);
    console.log(other);
  var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
  // `other` contains { onClick: console.log } but not the checked property
  return (
      <div {...other} className={fancyClass} />
  );
}mo
ReactDOM.render(
    <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
      Hello world!
    </FancyCheckbox>,
    document.getElementById('content')
);

