import { configureStore } from '@reduxjs/toolkit'
import addNewIntakeFormReducer from './Reducers/addNewIntakeFormReducer'
import thunk from 'redux-thunk';
//import addNewIntakeForm from './Actions/addNewIntakeForm'

const initialIntakeArrayState = {IntakeArray:[{
    Incident_Loc: "",
    Pain_Level: "",
    Emergency_Level: "",
    Symptoms: "",
    Rel_Information: ""
  }]};
const reducer = {
    IntakeForm: addNewIntakeFormReducer
}
const store = configureStore({reducer,initialIntakeArrayState, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),})
export default store;
//console.log('Initial State', store.getState());
// const unsubscribe = store.subscribe(()=> console.log('updated state', store.getState()))
// store.dispatch(addNewIntakeForm());
// unsubscribe();