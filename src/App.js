import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import AuthContainer from "./components/AuthContainer";
import RegistrationContainer from "./components/RegistrationContainer";

const store = createStore(rootReducer);

export default class Example extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="SingInSigUp container">
          <div className="row justify-content-center">
            <AuthContainer />
            <RegistrationContainer/>
          </div>
        </div>
      </Provider>
    );
  }
}
