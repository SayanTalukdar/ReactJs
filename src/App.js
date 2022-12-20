import { Provider } from "react-redux";
import store, { Store } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={Store}>
        <div className="App">
          <Header></Header>
          <Main></Main>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
