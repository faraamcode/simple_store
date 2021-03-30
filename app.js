const redux = require("redux")
const createStore = redux.createStore
const combinereducer = redux.combineReducers


const orangeState = {
    orange : 21,

}
const bannanState = {
    bannana : 21,

}
const orangereducer = (state =orangeState, action)=>{
    if(action.type ==="buy_orange"){
        return {
            ...state, orange: state.orange + 1
        }
    }
    return state
}
const bannanareducer = (state =bannanState, action)=>{
    if(action.type ==="buy_bannaba"){
        return {
            ...state, bannana: state.bannana + 1
        }
    }
    return state
}
const combineredux = combinereducer({first: orangereducer, second :bannanareducer})
const store = createStore(combineredux)
console.log(store.getState());
store.subscribe(()=> console.log("update", store.getState()))
store.dispatch({
    type: "buy_bannaba"
});
store.dispatch({
    type: "buy_orange"
});
store.dispatch({
    type: "buy_bannaba"
});



