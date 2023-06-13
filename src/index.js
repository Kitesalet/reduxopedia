import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './App/Layout/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Counter from './App/Components/Counter';
import DestinationList from './App/Components/DestinationList';
import DestinationFact from './App/Components/DestinationFact';
import ResetApp from './App/Components/ResetApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Header></Header>
  <ResetApp></ResetApp>
  <Counter></Counter>
  <h2 className='text-center text-success py-4' style={{borderTop:"1px solid white"}}>Destination List</h2>
  <DestinationList></DestinationList>
  <DestinationFact></DestinationFact>
  </Provider>
);
