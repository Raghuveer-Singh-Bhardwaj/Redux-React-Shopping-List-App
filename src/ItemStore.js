import {createStore} from 'redux'

var initialState = [];
const reducer = function (state = initialState,action){
    if(action.type === "CREATE_ITEM"){
        let temp = state;
        temp.push({id : Date.now(), name: action.itemName});
        return [...state,action.itemName]
    }
    if(action.type === "REMOVE_ITEM"){
        return state.filter((itemname) => itemname.name !== action.itemName);
    }
    return state;
}

const store = createStore(reducer);
store.subscribe(() => {
   // alert("State changed to ",store.getState);
})

export default store;