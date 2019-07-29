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
  }

  render() {
    return <li onMouseOver={this.makeBold}>{this.props.item}</li>;
  }

  makeBold() {
    // $(".groceryItem").css('font-weight', 'bold');
  }
};

var GroceryList = function(props) {
  return (
    <ul>
      {props.groceryItems.map( function(item){
        return <GroceryListItem key={i} item={item} />;
      })}
    </ul>
  );
};
    
ReactDOM.render(<GroceryList groceryItems={["cucumbers", 'kale', 'bananas']} />, document.getElementById("app"));