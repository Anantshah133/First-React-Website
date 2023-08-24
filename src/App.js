import './App.css';
import Buttons, { NavBar } from './component/button';
import Trial from './component/trial';

const name = ["Gandu", "Gendubhai", "Ganjedi"];

function App() {
  return (
    <>
      <NavBar />
      <Trial {...name} />
      <Buttons />
    </>
  )
}

export default App;