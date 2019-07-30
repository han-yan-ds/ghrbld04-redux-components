// var GroceryList = function(props) {
//   return (
//     <ul>
//       {props.groceryItems.map( function(item) {
//         return <li>{item}</li>;
//       } )}
//     </ul>
//   );
// };

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isBold: false};
  }

  render() {
    if (this.state.isBold) {
      return <li onMouseLeave={this.makeBold.bind(this, false)}><strong>{this.props.item}</strong></li>;
    }
    return <li onMouseEnter={this.makeBold.bind(this, true)}>{this.props.item}</li>;
  }

  makeBold(yesOrNo) { // make the font weight bold if isBold state is true
    this.setState({isBold: yesOrNo});
  }
};

var GroceryList = function(props) {
  return (
    <ul>
      {props.groceryItems.map( function(item, index){
        return <GroceryListItem key={index} item={item} />;
      })}
    </ul>
  );
};
    
ReactDOM.render(<GroceryList groceryItems={["cucumbers", 'kale', 'bananas']} />, document.getElementById("app"));