import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import generateStore from './redux/configureStore';

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Header className="header" />
      <Routes>
        <Route
          path="/"
          element={<Rockets />}
        />
        <Route
          path="/missions"
          element={<Missions />}
        />
        <Route
          path="/myprofile"
          element={<MyProfile />}
        />
      </Routes>
    </Provider>
  );
}

export default App;
