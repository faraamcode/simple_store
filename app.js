const redux = require("redux")
const createStore = redux.createStore


const initialState = {
    count : 21,
    name : "Yourghut"
}
const reducer = (state =initialState, action)=>{
    if(action.type ==="increase"){
        return {
            ...state, count: state.count + 1
        }
    }
    return state
}

const store = createStore(reducer)
console.log(store.getState());
store.subscribe(()=> console.log("update", store.getState()))
store.dispatch({
    type: "increase"
});
store.dispatch({
    type: "increase"
});
store.dispatch({
    type: "increase"
});



