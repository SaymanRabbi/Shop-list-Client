import AddShop from "./AddShop";
import "./App.css";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <AddShop />
    </div>
  );
}

export default App;
