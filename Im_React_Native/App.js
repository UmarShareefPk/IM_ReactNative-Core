import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import MyApp from "./MyApp"


export default function App() {
  const store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk)   
    )
  );

  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}


 
