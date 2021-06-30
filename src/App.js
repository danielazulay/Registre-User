import {BrowserRouter,Route} from "react-router-dom"
import './App.css';
import Registre from "./Registre.jsx"

function App() {
  return (

<BrowserRouter>
<Route path="/" component={Registre}/>
 

</BrowserRouter>

  );
}

export default App;
