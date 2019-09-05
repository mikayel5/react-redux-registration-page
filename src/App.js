import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Registration from "./components/Registration";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";

const store = createStore(rootReducer);

export default class Example extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="SingInSigUp container">
          <div className="row justify-content-center">
            <Auth />
            <Registration />
          </div>
        </div>
      </Provider>
    );
  }
}
