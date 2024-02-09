import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import Audio from "./Audio";

function App() {
  return (
    <Provider store={store}>
      <Audio />
    </Provider>
  );
}

export default App;
