import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

// components
import JournalContainer from "./components/JournalContainer";
import RightContainer from "./components/RightContainer";
import PublishConfirm from "./components/PublishConfirm";
// import Login from "./components/Login";
// import Signup from "./components/Signup";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App App-half-screen">
        <JournalContainer />
        <RightContainer />
      </div>
      {/* <PublishConfirm /> */}
    </Provider>
  );
  // return (
  //   <Provider store={store}>
  //     <div className="App">
  //       <Signup />
  //     </div>
  //   </Provider>
  // );
};

export default App;
