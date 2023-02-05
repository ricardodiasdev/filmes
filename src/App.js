import { ToastContainer } from "react-toastify";
import RoutesApp from "./routes/routes";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000}/>
      <RoutesApp/>
    </div>
  );
}

export default App;
