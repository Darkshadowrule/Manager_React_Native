import React from 'react';
import {Provider} from 'react-redux';
import{createStore,applyMiddleware} from 'redux'
import reducers from './src/reducers'
import firebase from 'firebase';
import Router from './src/Router';
import ReduxThunk from 'redux-thunk'  ;
 class App extends React.Component {
   componentWillMount()
   {
   const firebaseConfig = {
      apiKey: "your_key",
      authDomain: "manager-428fc.firebaseapp.com",
      databaseURL: "https://manager-428fc.firebaseio.com",
      projectId: "manager-428fc",
      storageBucket: "manager-428fc.appspot.com",
      messagingSenderId: "171496360954",
      appId: "1:171496360954:web:9ff1d1937814844b"
    };
    firebase.initializeApp(firebaseConfig);
   }
  render() {
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        
        <Router/>
       
     
      </Provider>
    
    );
  }
}

export default App;
