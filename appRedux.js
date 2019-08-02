////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTS
import { createStore } from 'redux'; // for store
import { Provider } from 'react-redux'; // for index.js


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ACTION CREATORS
var isBoldActionCreator = function(isBold) {
  return { type: 'ITEM_IS_BOLD', isBold: isBold };
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// REDUCERS
var isBoldReducer = function(state = false, action) {
  return (action.type === 'ITEM_IS_BOLD') ? action.isBold || false : state;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// STORE
var store = createStore(isBoldReducer);


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CONTAINERS
var mapStateToProps = function(state) {
  return {item: state.isBold};
}
var mapDispatchToProps = function(dispatch) {
  return { makeBold: function(yesOrNo) { dispatch(isBoldActionCreator(yesOrNo)) } };
}
var GroceryListItemContainer = connect(mapStateToProps)(GroceryListItem);


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// COMPONENTS
var GroceryListItem = function(props) {
  // props: item, key
  return <li onMouseEnter={() => makeBold(true)}>{props.item + props.key}</li>;
}

var GroceryList = function(props) {
  // props: groceryItems
  return (
    <ul>
      {props.groceryItems.map( function(item, index){
        return <GroceryListItem key={index} item={item} />;
      })}
    </ul>
  );
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RUN
ReactDOM.render(<Provider store={store}><GroceryList groceryItems={["cucumbers", 'kale', 'bananas']} /></Provider>, 
  document.getElementById("app"));