import React from 'react';
import { Provider } from 'react-redux';
import BookContainer from './components/bookContainer';
import HookBookContainer from './components/hookBookContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer />
        <HookBookContainer />
      </div>
    </Provider>
  );
}

export default App;
