import React from 'react';
import AppWrapper from "./src/AppWrapper";
import configureStore from "./src/redux/reducers/configureStore";
import {Provider} from "react-redux";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}
